import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, url }) => {
	const userAgent = request.headers.get('user-agent') || '';
	const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

	if (!isMobile) {
		return {
			status: 303,
			redirect: '/'
		};
	}

	return {};
};
