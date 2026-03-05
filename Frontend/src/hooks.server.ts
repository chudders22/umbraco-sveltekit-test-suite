import { dev } from '$app/environment';

// A solution-wide bypass for self-signed certificates during local development.
// This ensures any `fetch` inside `+page.server.ts` or `+layout.server.ts` won't fail
// with DEPTH_ZERO_SELF_SIGNED_CERT against the local Umbraco backend.
if (dev) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};
