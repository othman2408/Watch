<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { goto } from '$app/navigation';

	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';

	let className: string | undefined | null = undefined;
	export { className as class };

	const loginHandler = () => {
		goto('/movies');
	};
</script>

<div class="first-letter: mt-8 flex w-8/12 rounded-sm p-1 px-6">
	<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
		<img src="/logo-center.svg" alt="logo" class="w-20" />
		<Separator orientation="vertical" />
		<a href="/" class="c text-sm font-medium transition-colors hover:text-primary"> Home </a>
		<a
			href="/movies"
			class="c text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		>
			Movies
		</a>
		<a
			href="/tv-shows"
			class="c text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		>
			TV-Shows
		</a>
		<a
			href="/live"
			class="c text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		>
			Live
		</a>
	</nav>
	<Button class="ml-auto" on:click={loginHandler}>Login</Button>
</div>

<style>
</style>
