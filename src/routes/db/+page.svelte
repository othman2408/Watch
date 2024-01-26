<script>
	import { enhance, SubmitFunction } from '$app/forms';
	export let data;
</script>

<main>
	<h1>Data Base Data</h1>
	<div>
		<ul>
			{#each data.users as user}
				<li>{user.email}</li>
			{/each}
		</ul>
	</div>

	<div>
		<form method="POST" action="?/addUser" use:enhance>
			<label for="username">
				Username
				<input type="text" name="username" id="name" />
			</label>

			<label for="email">
				Email
				<input type="email" name="email" id="user" />
			</label>

			<label for="password">
				Password
				<input type="password" name="password" id="pass" />
			</label>

			<button>ADD</button>
		</form>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	div {
		display: flex;
		flex-direction: column;
	}

	form {
		background-color: rgb(219, 219, 234);
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button {
		background-color: cornflowerblue;
	}
</style>
