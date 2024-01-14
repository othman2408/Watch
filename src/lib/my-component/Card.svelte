<script>
	import * as Card from '$lib/components/ui/card';

	export let title, desc, src;
</script>

<Card.Root>
	<Card.Header>
		<img class="h-auto max-h-60 w-full object-cover pb-2" {src} alt="img" />
		<Card.Title>{title}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content></Card.Content>
</Card.Root>
