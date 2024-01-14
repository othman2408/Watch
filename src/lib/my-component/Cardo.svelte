<script>
	function handleClick() {
		console.log('SVG icon clicked!');
	}
</script>

<div class="w-full overflow-hidden rounded-lg shadow-lg md:w-[297px]">
	<div class="relative">
		<img
			alt="The Super Mario Bros. Movie"
			class="h-auto w-full"
			src="https://images.unsplash.com/photo-1592795694700-d3ac8a1e2f19?q=80&w=3419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			style="object-fit: cover; width: 100%; height: 100%;"
		/>
		<div class="absolute bottom-2 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
			<div class="mb-1 w-fit rounded-full bg-stone-100 px-2 py-1 text-xs">Comedy</div>
			<h3 class="text-lg font-bold text-white">The Super Mario Bros. Movie</h3>
			<p class="text-sm text-white">
				While working underground to fix a water main, Brooklyn plumbers and brothers Mario...
			</p>
		</div>
		<div
			class="play-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
			on:click={handleClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class=" icon-tabler icon-tabler-player-play-filled"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
					stroke-width="0"
					fill="white"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
</style>
