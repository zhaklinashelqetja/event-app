import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/db';
import { verifyPassword, createSession } from '$lib/server/auth';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		// find user in database (replace with actual DB query)
		const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(401, { error: 'Invalid username or password' });
		}

		// check if the password is correct
		if (!(await verifyPassword(password, rows[0].password_hash))) {
			return fail(401, { error: 'Invalid username or password' });
		}

		// create session and session cookie
		const sessionId = await createSession(rows[0].id); // implement createSession to generate a session ID and store it in the database
		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 30 * 60 * 60 * 24 // 30 days
		});
		redirect(303, '/admin/events');
	}
};
