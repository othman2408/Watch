<script>
	import { page } from '$app/stores';
	import MovieCard from '$lib/components/MovieCard.svelte';
	const movieId = $page.params.movieId;

	export let data;
	let { poster_path, title, overview, release_date, genres, production_companies, runtime } =
		data.movie;
	console.log(data.movie);
</script>

<MovieCard
	{poster_path}
	{title}
	{overview}
	{release_date}
	genre={genres[0].name}
	name={production_companies[0].name}
	{runtime}
/>
