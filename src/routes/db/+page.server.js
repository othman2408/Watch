import { DBActions } from '$lib/DBActions';
import { fail } from '@sveltejs/kit';

const DB = new DBActions();

export async function load() {
	return {
		users: await DB.getAllUsers()
	};
}

export const actions = {
	addUser: async ({ request }) => {
		const formData = await request.formData();
		const user = {
			username: formData.get('username'),
			email: formData.get('email'),
			password: formData.get('password')
		};
		await DB.addUser(user);
	}
};
