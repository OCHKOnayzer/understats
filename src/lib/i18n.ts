// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit';
import { init, register, waitLocale } from 'svelte-i18n';

import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime);

// file initialized by the svelte-i18n
register('ru', () => import('./locales/ru.json'));
register('en', () => import('./locales/en.json'));

init({
	fallbackLocale: 'ru',
	initialLocale: 'ru'
});

export const localeReady = waitLocale();
