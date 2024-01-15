import { SECRET_API_KEY } from '$env/static/private';

export const GET = async ({ params }) => {
	let { movieId } = params;
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${SECRET_API_KEY}`
	);

	const movie = await response.json();

	return new Response(JSON.stringify(movie), { status: 200 });
};
