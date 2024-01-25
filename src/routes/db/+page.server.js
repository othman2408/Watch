import { DBActions } from '$lib/DBActions';

const actions = new DBActions();

export async function load() {
	// const { data, error } = await supabase.from('users').select('*');
	// if (error) {
	// 	console.log(error.message);
	// }
	// return {
	// 	users: data ?? []
	// };

	return {
		users: await actions.getAllUsers()
	};
}
