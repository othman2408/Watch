<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import Separator from './ui/separator/separator.svelte';
	export let movie_path, id, title, poster_path, backdrop_path;
</script>

<Card.Root
	style="background: rgb(255 255 255 / 25%);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);"
	class="card sm:w-2/2 flex w-full flex-col p-0 md:w-1/3 lg:w-1/3 xl:w-3/12"
>
	<img
		src={`https://image.tmdb.org/t/p/original/${poster_path}`}
		alt="poster"
		class="rounded-t-md"
		on:error={() => (this.src = `https://image.tmdb.org/t/p/original/${backdrop_path}`)}
	/>
	<Card.Header class="px-4 pt-3">
		<Card.Title>{title}</Card.Title>
		<div class="flex items-center justify-between pt-2">
			<div class="tags">
				<Badge variant="outline" class="w-fit">Comedy</Badge>
				<Badge variant="outline" class="w-fit">Comedy</Badge>
			</div>
		</div>
	</Card.Header>
	<!-- <Card.Content class="px-4 ">
	  <Card.Description>{desc}</Card.Description>
	</Card.Content> -->
	<div class="flex-grow"></div>
	<Card.Footer class=" flex justify-evenly px-4 font-bold text-gray-800">
		<a href="/{movie_path}/{id}">View</a>
		<Separator orientation="vertical" class="h-4" />
		<a href="/home">Watch</a>
	</Card.Footer>
</Card.Root>

<style>
	a:hover {
		text-decoration: underline;
	}
</style>
