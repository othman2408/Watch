<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<main class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
	<h1 class="pb-5 text-center text-2xl font-bold">Movies</h1>
	<div class="-mx-4 flex flex-wrap justify-center gap-4">
		{#each data.movies as movie}
			<Card
				title={movie.title}
				desc={movie.overview}
				poster_path={movie.poster_path}
				backdrop_path={movie.backdrop_path}
			/>
		{/each}
	</div>
</main>
