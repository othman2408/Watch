<script>
	import Login from './Login.svelte';
	import Register from './Register.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { goto } from '$app/navigation';

	let selectedTab = 'login'; // Set the default selected tab

	function selectTab(tabValue) {
		selectedTab = tabValue;
		goto(`/${tabValue}`);
	}
</script>

<Tabs.Root bind:value={selectedTab} class="m-auto w-full  md:w-full lg:w-5/12">
	<Tabs.List
		class="tabs w-full"
		style="background: rgb(255 255 255 / 41%);
			border-radius: 10px;
			border: 1px solid rgb(0 0 0 / 6%);"
	>
		<Tabs.Trigger value="login" class="w-full" on:click={() => selectTab('login')}
			>Login</Tabs.Trigger
		>
		<Tabs.Trigger value="register" class="w-full" on:click={() => selectTab('register')}
			>Register</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="register"><Register /></Tabs.Content>
	<Tabs.Content value="login"><Login /></Tabs.Content>
</Tabs.Root>
