<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from '$lib/my-component/Footer.svelte';
	import Header from '$lib/my-component/Header.svelte';
</script>

<Header />

<main class="my-8 flex h-72 w-8/12 px-6">
	<slot />
</main>

<Footer />

<style>
	main {
		background: rgba(156, 156, 156, 0.5);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(10px);
	}
</style>
