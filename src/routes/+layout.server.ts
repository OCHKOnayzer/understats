import { error as svelteError } from '@sveltejs/kit';

import { availableLanguages } from '$src/stores/languageStore';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
	try {
		// Получение cookies
		const cookies = request.headers.get('cookie') || '';
		const match = cookies.match(/(?:^|; )app_lang=([^;]*)/);
		const cookieLocale = match ? decodeURIComponent(match[1]) : null;

		const systemLocale = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || null;

		let locale = cookieLocale || systemLocale || 'en';
		locale = availableLanguages.includes(locale) ? locale : 'en';

		return {
			locale
		};
	} catch (err: any) {
		console.error('Ошибка при определении локали на сервере:', err);

		const wrappedError = new Error('Произошла ошибка при определении локали');
		wrappedError.name = 'LoadError';
		throw svelteError(500, wrappedError.message);
	}
};
