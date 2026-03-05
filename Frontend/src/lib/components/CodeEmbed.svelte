<script lang="ts">
	let { code, language = 'javascript' }: { code: string; language?: string } = $props();
</script>

<div class="relative overflow-hidden rounded-md bg-gray-900 shadow-sm">
	<div class="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs text-gray-400">
		<span>{language}</span>
		<button
			class="transition-colors hover:text-white"
			onclick={() => navigator.clipboard.writeText(code)}
			aria-label="Copy code to clipboard">Copy</button
		>
	</div>
	<pre class="overflow-x-auto p-4 font-mono text-sm text-gray-100"><code>{code}</code></pre>
</div>
