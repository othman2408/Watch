import { supabase } from '$lib/supabaseClient';

export class DBActions {
	async getAllUsers() {
		const { data, error } = await supabase.from('users').select('*');
		if (error) {
			console.log(error.message);
		}
		return data || [];
	}

	async getUser(username) {
		return await supabase.from('users').select('*').like('username', username).single();
	}

	async addUser(user) {
		let checkUser = this.getUser(user.username);

		if (checkUser != undefined) {
			const { data, error } = await supabase
				.from('users')
				.insert([{ username: user.username, email: user.email, password: user.password }])
				.select();

			if (data) {
				console.log(data);
				return true;
			}

			console.dir(`${error.message} - ${error.hint}`);
			return error;
		}
	}
}
