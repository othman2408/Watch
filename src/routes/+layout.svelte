<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="align my-8 flex w-8/12 rounded-sm px-6 py-8 align-middle">
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
