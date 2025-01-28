import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import { error as svelteError } from '@sveltejs/kit';

import { availableLanguages } from '$src/stores/languageStore';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
	try {
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
		console.error(get(t)('error.local_error_in_server'), err);

		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		throw svelteError(500, get(t)('error.local_error'));
	}
};
