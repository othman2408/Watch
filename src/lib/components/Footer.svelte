<script>
	import { FacebookIcon, InstagramIcon, MountainIcon, TwitterIcon } from 'lucide-svelte';
</script>

<footer class="w-8/12 rounded-t-sm bg-gray-800 py-2">
	<div class="container px-4 md:px-6">
		<div
			class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0"
		>
			<div class="flex items-center space-x-2">
				<img src="/logo-white.svg" alt="" class="w-20" />
			</div>
			<nav class="gap-6 sm:flex">
				<a class="text-xs font-medium text-gray-300 hover:text-white" href="#"> Home </a>
				<a class="text-xs font-medium text-gray-300 hover:text-white" href="#"> Movies </a>
				<a class="text-xs font-medium text-gray-300 hover:text-white" href="#"> TV Shows </a>
				<a class="text-xs font-medium text-gray-300 hover:text-white" href="#"> About </a>
				<a class="text-xs font-medium text-gray-300 hover:text-white" href="#"> Contact </a>
			</nav>
			<div class="flex space-x-4">
				<a href="#">
					<FacebookIcon size={22} strokeWidth={1} class="text-white" />
				</a>
				<a href="#">
					<TwitterIcon size={22} strokeWidth={1} class=" text-white" />
				</a>
				<a href="#">
					<InstagramIcon size={22} strokeWidth={1} class=" text-white" />
				</a>
			</div>
		</div>
		<p class="mt-1 select-none text-center text-[10px] text-gray-500">
			© 2024 WATCH Website. All rights reserved.
		</p>
	</div>
</footer>
