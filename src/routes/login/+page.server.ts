import { fail, redirect } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';

export const actions = {
	login: async ({ locals, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return fail(400, { fail: true, message: 'Tài khoản và mật khẩu không để trống.' });
		}
		try {
			await locals.pb
				.collection('users')
				.authWithPassword(username.toString(), password.toString());
		} catch (error) {
			const errorObj = error as ClientResponseError;
			return fail(500, { fail: true, message: errorObj.data.message });
		}

		throw redirect(303, '/');
	},
	logout: async ({ locals }) => {
		await locals.pb.authStore.clear();
		throw redirect(303, '/login');
	}
};
