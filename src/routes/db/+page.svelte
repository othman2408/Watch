<script>
	export let data;
	console.log(data.users);
</script>

<main>
	<div>
		<h1>Data Base Data</h1>
		<ul>
			{#each data.users as user}
				<li>{user.email}</li>
			{/each}
		</ul>
	</div>

	<div>
		<form action="POST">
			<label for="name">
				Name
				<input type="text" name="name" id="name" />
			</label>

			<label for="user">
				username
				<input type="text" name="user" id="user" />
			</label>

			<label for="pass">
				password
				<input type="password" name="name" id="pass" />
			</label>
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
</style>
