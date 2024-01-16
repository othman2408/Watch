export const load = async ({ fetch, params }) => {
	const { pageId } = params;
	console.log(pageId);
	const res = await fetch(`../api/movies/${pageId}`);
	const data = await res.json();

	const movies = await data.results;

	return {
		movies
	};
};
