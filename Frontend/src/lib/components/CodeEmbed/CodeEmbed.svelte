<script lang="ts">
	let { code, language = 'javascript' }: { code: string; language?: string } = $props();
</script>

<div class="overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-zinc-800">
	<!-- Terminal header bar -->
	<div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
		<!-- macOS-style window dots -->
		<div class="flex items-center gap-1.5" aria-hidden="true">
			<div class="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
			<div class="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
			<div class="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
		</div>
		<!-- Language label centred -->
		<span class="font-mono text-xs tracking-wide text-zinc-300">{language}</span>
		<!-- Copy button -->
		<button
			class="rounded px-2 py-1 font-mono text-xs text-zinc-300 transition-all hover:bg-zinc-800 hover:text-red-400 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900 focus-visible:outline-none"
			onclick={() => navigator.clipboard.writeText(code)}
			aria-label="Copy code to clipboard"
		>
			copy
		</button>
	</div>
	<pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-zinc-100"><code
			>{code}</code
		></pre>
</div>
