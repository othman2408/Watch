export const load = async ({ fetch }) => {
	const res = await fetch('../api/movies');
	const data = await res.json();

	const movies = await data.results;

	return {
		movies
	};
};
