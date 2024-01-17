<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
	console.log(data.totalResults, data.totalPages);

	const handlePageChange = (pageNo) => {
		goto(`/movies/${pageNo}`);
	};
</script>

<main class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
	<h1 class="pb-5 text-center text-2xl font-bold">Movies</h1>
	<div class="-mx-4 flex flex-wrap justify-center gap-4">
		{#each data.movies as movie}
			<Card
				movie_path={'movies/movie'}
				id={movie.id}
				title={movie.title}
				poster_path={movie.poster_path}
				backdrop_path={movie.backdrop_path}
			/>
		{/each}
	</div>
	<div class="mt-14">
		<Pagination pageCount={5000} dataPerPage={10} {handlePageChange} />
	</div>
</main>
