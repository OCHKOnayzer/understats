import { init, locale, register, waitLocale } from 'svelte-i18n';

import { getAppLanguage, setAppLanguage } from '$src/stores/languageStore';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));
register('ru', () => import('./locales/ru.json'));
register('pt', () => import('./locales/pt.json'));
register('fr', () => import('./locales/fr.json'));
register('it', () => import('./locales/it.json'));
register('de', () => import('./locales/de.json'));

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
