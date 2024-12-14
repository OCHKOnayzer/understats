import { selectedLang } from './HeaderStores';

const availableLanguages = ['en', 'es', 'ru', 'pt', 'de', 'fr', 'it'];

const getSystemLanguage = () => {
	if (typeof window === 'undefined') {
		return 'en';
	}

	if (navigator.languages && navigator.languages.length) {
		return navigator.languages[0].split('-')[0];
	} else if (navigator.language) {
		return navigator.language.split('-')[0];
	}

	return 'en';
};

export const getAppLanguage = () => {
	if (typeof window === 'undefined') {
		return 'en';
	}

	const storedLanguage = localStorage.getItem('appLanguage');
	if (storedLanguage && availableLanguages.includes(storedLanguage)) {
		return storedLanguage;
	}

	const systemLanguage = getSystemLanguage();
	return availableLanguages.includes(systemLanguage) ? systemLanguage : 'en';
};

export const setAppLanguage = (language: string) => {
	if (typeof window === 'undefined') {
		return;
	}

	if (availableLanguages.includes(language)) {
		localStorage.setItem('appLanguage', language);
		selectedLang(language);
	} else {
		console.warn(`Language ${language} is not supported.`);
	}
};
