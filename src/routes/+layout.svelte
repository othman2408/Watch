<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		width: 80%;
		background-color: #f0f0f0;
		padding: 2rem;
		margin-top: 2rem;
	}
</style>
