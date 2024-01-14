<script>
	export let data;
	console.log(data);
</script>

<main>
	<div class="tite"><h1>Moviessss</h1></div>
	{#each data.movies as movie}
		<h1>Title:{movie.title}</h1>
	{/each}
</main>
