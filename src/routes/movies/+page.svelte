<script>
	import Cardo from './../../lib/my-component/Cardo.svelte';
	import Card from '../../lib/my-component/Card.svelte';

	export let data;
	// console.log(data);
</script>

<main>
	<h1 class="pb-5 text-center text-2xl font-bold">Movies</h1>
	<div class="content grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
		{#each data.movies as movie}
			<Cardo />
		{/each}
	</div>
</main>
