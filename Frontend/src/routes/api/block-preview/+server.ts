import { render } from 'svelte/server';
import { componentMap } from '$lib/utils/componentMap';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';
import previewCss from '$lib/styles/blockpreview.css?inline';

/**
 * GET /api/block-preview/styles.css
 * Serves the compiled preview CSS as a proper stylesheet so @property rules
 * are registered correctly by the browser (inline <style> blocks do not
 * reliably register @property in all injection contexts).
 * Referenced from the HeadlessBlockPreview Template config in appsettings.
 */
export const GET: RequestHandler = () => {
	return new Response(previewCss, {
		headers: {
			'Content-Type': 'text/css; charset=utf-8',
			'Cache-Control': 'no-store'
		}
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const apiKey = request.headers.get('kuhb-header');
	if (env.BLOCK_PREVIEW_API_KEY && apiKey !== env.BLOCK_PREVIEW_API_KEY) {
		return new Response('Unauthorized', { status: 401 });
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return new Response('Invalid JSON body', { status: 400 });
	}

	// Umbraco serialises as camelCase; guard against PascalCase just in case
	const blockContent = (body.content ?? body.Content) as
		| { contentType?: string; properties?: Record<string, unknown> }
		| undefined;

	const blockSettings = (body.settings ?? body.Settings) as
		| { properties?: { constrainToContentColumn?: unknown } }
		| null
		| undefined;

	if (!blockContent?.contentType) {
		return new Response('<p>No contentType in request body</p>', {
			headers: { 'Content-Type': 'text/html; charset=utf-8' }
		});
	}

	const Component = componentMap[blockContent.contentType];

	if (!Component) {
		return new Response(
			`<p style="padding:1rem;color:#854d0e;background:#fef9c3">Unknown block type: <strong>${blockContent.contentType}</strong></p>`,
			{ headers: { 'Content-Type': 'text/html; charset=utf-8' } }
		);
	}

	const { head, body: htmlBody } = render(Component, {
		props: blockContent.properties ?? {}
	});

	// Mirror BlockList.svelte: constrain unless constrainToContentColumn is explicitly null
	const isConstrained = blockSettings?.properties?.constrainToContentColumn !== null;

	const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${head}
</head>
<body>
  <div id="__preview">
    <!--
      Replicates the live-site wrapper chain:
        +layout.svelte  →  div.min-h-screen.bg-white.text-zinc-900
        BlockList.svelte →  div.flex.flex-col  →  section[.container.mx-auto]
    -->
    <div class="w-full bg-white text-zinc-900">
      <div class="flex flex-col">
        <section class="${isConstrained ? 'container mx-auto' : ''}">
          ${htmlBody}
        </section>
      </div>
    </div>
  </div>
</body>
</html>`;

	return new Response(html, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	});
};
