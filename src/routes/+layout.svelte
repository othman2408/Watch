<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class=" flex w-8/12 rounded-sm py-8">
	<slot />
</main>

<Footer />

<style>
	/* main {
		background: rgb(255 255 255 / 25%);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	} */
</style>
