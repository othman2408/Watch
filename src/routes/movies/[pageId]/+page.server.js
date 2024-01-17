import { SECRET_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { pageId } = params || 1;

	if (+pageId > 500) {
		throw error(404, {
			message: 'Page you are looking for is not found ',
			hint: `Available pages from 1 to 500`
		});
	}

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageId}&api_key=${SECRET_API_KEY}`
	);
	const movies = await res.json();

	return movies;
};
