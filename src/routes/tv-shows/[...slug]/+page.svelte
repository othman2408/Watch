<script>
	import { page } from '$app/stores';

	const slugPath = $page.params.slug;
	const slugArr = $page.params.slug.split('/');
</script>

<q>
	<!-- <h1>{slugArr[0]} - {slugArr[1]} - {slugArr[2]}</h1> -->

	{#if slugArr.length === 1}
		<h1>Your are in Seires: {slugArr[0]}</h1>
	{:else if slugArr.length === 2}
		<h3>
			Your are in Seires: {slugArr[0]}, in Season {slugArr[1]}
		</h3>
	{:else if slugArr.length === 2}
		<h3>
			Your are in Seires:
			{slugArr[0]}, in Season {slugArr[1]}, in Episode No.
			{slugArr[2]}
		</h3>
	{/if}
</q>
