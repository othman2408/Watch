<script>
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<footer class="w-8/12 rounded-t-sm py-3">
	<div class="container px-4 md:px-6">
		<div
			class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0"
		>
			<div class="flex items-center space-x-2">
				<img src="/logo-center.svg" alt="" class="w-20" />
			</div>
			<p class="mt-1 select-none text-center text-[10px] text-gray-500">
				© 2024 WATCH Website. All rights reserved.
			</p>
			<div class="flex space-x-4">
				<a href="/">
					<Facebook size={20} strokeWidth={1.2} class="text-[#1b1f2b]" />
				</a>
				<a href="/">
					<Twitter size={20} strokeWidth={1.2} class="text-[#1b1f2b]" />
				</a>
				<a href="/">
					<Instagram size={20} strokeWidth={1.2} class="text-[#1b1f2b]" />
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: rgb(255 255 255 / 15%);
		border: 1px solid rgb(0 0 0 / 6%);
	}
</style>
