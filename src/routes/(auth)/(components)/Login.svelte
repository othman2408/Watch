<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
</script>

<Card.Root
	style="    
	background: rgb(255 255 255 / 30%);
	border-radius: 10px;
	border: 1px solid rgb(255 255 255);"
>
	<Card.Header class="bg space-y-1">
		<Card.Title class="text-2xl">Login to your account</Card.Title>
		<Card.Description>Enter your email below to login.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" placeholder="••••••••••••••••" type="password" />
		</div>
		<Button class="w-full">Login</Button>
	</Card.Content>
	<Card.Footer class="grid gap-4">
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
			<div class="relative flex justify-center text-xs uppercase">
				<span class="select-none bg-[#f2f6fa] px-2 text-muted-foreground"> Or continue with </span>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-6">
			<Button variant="outline">
				<a href="/login">Github</a>
			</Button>
			<Button variant="outline">
				<a href="/login">Google</a>
			</Button>
		</div>
	</Card.Footer>
</Card.Root>
