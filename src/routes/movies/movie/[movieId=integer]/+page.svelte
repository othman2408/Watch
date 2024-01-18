<script>
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data;
	let { poster_path, title, overview, release_date, genres, production_companies, runtime } =
		data.movie;
</script>

<main class="column flex-col">
	<MovieCard
		{poster_path}
		{title}
		{overview}
		{release_date}
		genre={genres[0].name}
		name={production_companies[0].name}
		{runtime}
	/>
</main>
