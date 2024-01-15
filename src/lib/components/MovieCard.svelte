<script>
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	export let poster_path, title, overview, release_date, genre, name, runtime;
</script>

<main class="container mx-auto my-8 grid h-full grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-3">
	<!-- Movie Poster -->
	<div class="md:col-span-1 lg:col-span-1">
		<img
			src="https://image.tmdb.org/t/p/original/{poster_path}"
			alt="Movie Poster"
			class="h-full w-full rounded-md object-cover shadow-lg"
		/>
	</div>

	<!-- Movie Details -->
	<div
		class="border-1 border-opacity-18 rounded-10 rounded-lg border-white bg-white bg-opacity-25 p-4 shadow-lg backdrop-blur-md md:col-span-1 lg:col-span-2"
	>
		<h3 class="mb-4 text-3xl font-semibold">{title}</h3>
		<Separator />
		<h4 class="mb-4 mt-2 text-2xl font-semibold">Overview</h4>
		<p class="leading-relaxed text-gray-700">{overview}</p>

		<!-- Additional Details -->
		<div class="mt-8">
			<h3 class="mb-2 text-lg font-semibold">Additional Details</h3>
			<ul class="list-inside list-disc text-gray-700">
				<li>Release Date: {release_date}</li>
				<li>Genre: {genre}</li>
				<li>Director: {name}</li>
				<li>Runtime: {runtime} Min</li>
			</ul>
		</div>

		<!-- Movie Actresses -->
		<div class="mt-8">
			<h3 class="mb-2 text-lg font-semibold">Actresses</h3>
			<ul class="list-inside list-disc text-gray-700">
				<li>Jane Doe</li>
				<li>Mary Smith</li>
				<!-- Add more actresses as needed -->
			</ul>
		</div>

		<div class="btns mt-6 flex justify-center gap-2">
			<Button class="w-full">Watch</Button>
			<Button variant="outline" class="w-full">Download</Button>
		</div>
	</div>
</main>
