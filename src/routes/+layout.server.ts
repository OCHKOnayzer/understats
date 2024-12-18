import { error as svelteError } from '@sveltejs/kit';

import { availableLanguages } from '$src/stores/languageStore';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
	try {
		const cookies = request.headers.get('cookie') || '';
		const match = cookies.match(/(?:^|; )app_lang=([^;]*)/);
		const locale = match ? decodeURIComponent(match[1]) : 'en';

		// Проверка, доступна ли локаль
		const validLocale = availableLanguages.includes(locale) ? locale : 'en';

		return {
			locale: validLocale
		};
	} catch (err: any) {
		console.error('Ошибка при определении локали на сервере:', err);

		// Обертка ошибки для совместимости с линтером
		const wrappedError = new Error('Произошла ошибка при определении локали');
		wrappedError.name = 'LoadError';
		throw svelteError(500, wrappedError.message);
	}
};
