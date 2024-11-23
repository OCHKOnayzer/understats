import { createI18n } from '@inlang/paraglide-sveltekit';
import { init, register, waitLocale, locale } from 'svelte-i18n';

import * as runtime from '$lib/paraglide/runtime.js';
import { getAppLanguage, setAppLanguage } from '$src/stores/languageStore';

export const i18n = createI18n(runtime);

register('en', () => import('./locales/en.json'));
// register('es', () => import('./locales/es.json'));
register('ru', () => import('./locales/ru.json'));
// register('pt', () => import('./locales/pt.json'));
// register('zh', () => import('./locales/zh.json'));
// register('fr', () => import('./locales/fr.json'));
// register('it', () => import('./locales/it.json'));

const userLanguage = getAppLanguage();
setAppLanguage(userLanguage);

init({
	fallbackLocale: 'en',
	initialLocale: userLanguage
});

export const localeReady = waitLocale();

export const setLanguage = (lang: string) => {
	if (locale.set && setAppLanguage) {
		locale.set(lang);
		setAppLanguage(lang);
	} else {
		console.warn(`Language ${lang} is not supported.`);
	}
};
