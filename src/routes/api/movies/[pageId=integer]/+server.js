import { SECRET_API_KEY } from '$env/static/private';

export const GET = async ({ params }) => {
	let { pageId } = params;
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageId}&api_key=${SECRET_API_KEY}`
	);

	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
};
