<script>
	import { Home, Popcorn } from 'lucide-svelte';

	export let title;
</script>

<ol class="container ml-8 flex w-fit whitespace-nowrap" aria-label="Breadcrumb">
	<li class="inline-flex items-center">
		<a
			class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
			href="/"
		>
			<Home size={16} strokeWidth={2} class="mr-2" />

			Home
		</a>
		<svg
			class="mx-2 h-4 w-4 flex-shrink-0 overflow-visible text-gray-400 dark:text-neutral-600 dark:text-neutral-600"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
		>
	</li>
	<li class="inline-flex items-center">
		<a
			class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
			href="/movies"
		>
			<Popcorn size={16} strokeWidth={2} class="mr-2" />
			Movies
			<svg
				class="mx-2 h-4 w-4 flex-shrink-0 overflow-visible text-gray-400 dark:text-neutral-600 dark:text-neutral-600"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
			>
		</a>
	</li>
	<li
		class="inline-flex items-center truncate text-sm font-semibold text-gray-800 dark:text-gray-200"
		aria-current="page"
	>
		{title}
	</li>
</ol>

<style>
	.container {
		background: rgb(255 255 255 / 25%);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		padding: 1rem;
	}
</style>
