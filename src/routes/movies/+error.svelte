<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="h-aut m-auto flex flex-col items-center justify-center dark:bg-gray-900">
	<h1 class="text-8xl font-bold text-gray-800 dark:text-gray-200">{$page.status}</h1>
	<h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200">{$page.error?.message}</h2>
	<p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
		{$page.error?.hint}
	</p>
	<a class="mt-6 inline-flex" href="/">
		<Button>Return to Home</Button>
	</a>
</div>
