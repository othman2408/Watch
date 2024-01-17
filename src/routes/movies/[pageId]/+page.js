export const load = async ({ data }) => {
	return {
		movies: data.results,
		totalPages: data.total_pages,
		totalResults: data.total_results
	};
};
