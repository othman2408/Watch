<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<Header />

<main class="mt-16 flex h-72 w-8/12 px-6">
	<slot />
</main>

<Footer />

<style>
	main {
		background: rgba(232, 232, 232, 0.5);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(10px);
	}
</style>
