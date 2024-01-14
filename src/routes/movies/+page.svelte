<script>
	import Card from '../../lib/my-component/Card.svelte';
	export let data;
	// console.log(data);
</script>

<main>
	<h1 class="pb-5 text-center text-2xl font-bold">Movies</h1>
	<div class="content grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
		{#each data.movies as movie}
			<Card
				title={movie.title}
				desc={movie.overview}
				src={'https://images.unsplash.com/photo-1703700414418-2969a8dc8978?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
			/>
		{/each}
	</div>
</main>
