export const load = async ({ fetch, params }) => {
	let { movieId } = params;
	const response = await fetch(`/api/movies/${movieId}`);
	const data = await response.json();

	return {
		movie: data
	};
};
