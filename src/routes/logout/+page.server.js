// +page.server.js
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    // Delete the authentication token from cookies
    cookies.delete('hq_token', { path: '/' });

    // Redirect to home or login page
    throw redirect(302, '/');
}
