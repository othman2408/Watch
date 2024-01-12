<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	class="first-letter: mt-4 flex w-8/12 rounded-sm bg-gradient-to-r from-slate-600 to-slate-500 p-3 px-6"
>
	<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
		<a href="/" class="c text-sm font-medium transition-colors hover:text-primary"> Home </a>

		<a href="/docs" class="c text-sm font-medium transition-colors hover:text-primary"> Docs </a>
		<a
			href="/download"
			class="c text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		>
			Download
		</a>
		<a
			href="/about"
			class="c text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		>
			About
		</a>
	</nav>
	<Button variant="outline" class="ml-auto">Login</Button>
</div>

<style>
</style>
