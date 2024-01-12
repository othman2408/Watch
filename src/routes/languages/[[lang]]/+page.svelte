<script>
	import { page } from '$app/stores';

	const content = {
		en: 'Hello world',
		ar: 'مرحبا',
		es: 'hola'
	};

	const { lang = 'ar' } = $page.params;
	const msg = content[lang];
</script>

<h1>{msg}</h1>
