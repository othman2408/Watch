import { supabase } from '$lib/supabaseClient';

export class DBActions {
	async getAllUsers() {
		const { data, error } = await supabase.from('users').select('*');
		if (error) {
			console.log(error.message);
		}
		return data || [];
	}

	async addUser() {}
}
