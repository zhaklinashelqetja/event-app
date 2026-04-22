import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/db';
import { hashPassword, createSession } from '$lib/server/auth';

export const actions = {
	register: async ({ request, cookies }) => {
		//get data
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		let result;
		try {
			[result] = await pool.execute('insert into users (username, password_hash) values (?, ?)', [
				username,
				await hashPassword(password)
			]);
		} catch (error) {
			if (error.code === 'ER_DUP_ENTRY') {
				return fail(400, { error: 'Username already exists' });
			}
		}
		// create session
		const sessionId = await createSession(result.insertId); // implement createSession to generate a session ID and store it in the database
		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 30 * 60 * 60 * 24 // 30 days
		});

		//redirect
		redirect(303, '/admin/events');
	}
};
