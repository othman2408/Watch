<script>
	import '../app.pcss';
	import './styles.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<Header></Header>

<main>
	<slot />
</main>

<Footer></Footer>

<style>
	main {
		width: 80%;
		background-color: #f0f0f0;
		padding: 2rem;
		margin-top: 2rem;
	}
</style>
