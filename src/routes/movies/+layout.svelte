<script>
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	export let data;
</script>

<main>
	<div class="mt-8"><Breadcrumb title={'fixed later'} /></div>

	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
