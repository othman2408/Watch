<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from '$lib/my-component/Footer.svelte';
	import Header from '$lib/my-component/Header.svelte';
</script>

<Header />

<main class="my-8 flex w-8/12 rounded-sm px-6 py-8">
	<slot />
</main>

<Footer />

<style>
	main {
		background: rgb(255 255 255 / 25%);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
</style>
