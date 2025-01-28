import { redirect } from '@sveltejs/kit';

export async function load({ request }) {
	const userAgent = request.headers.get('user-agent') || '';

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

	if (!isMobile) {
		throw redirect(307, '/');
	}
}
