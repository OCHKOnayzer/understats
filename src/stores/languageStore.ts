// src/stores/languageStore.ts
import { writable } from 'svelte/store';

// Доступные языки
export const availableLanguages = ['en', 'es', 'ru', 'pt', 'de', 'fr', 'it'];

// Хранилище для выбранного языка
export const selectedLang = writable<string>('en');

// Функция для установки языка на клиенте и в куки
export const setAppLanguage = (language: string) => {
	if (availableLanguages.includes(language)) {
		selectedLang.set(language);
		// Сохранение в localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem('appLanguage', language);
			// Установка куки на 1 год
			document.cookie = `app_lang=${language}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
		}
	} else {
		console.warn(`Language ${language} is not supported.`);
	}
};

// Функция для получения языка из куки на клиенте
export const getAppLanguageFromCookie = (): string => {
	if (typeof window === 'undefined') {
		return 'en';
	}

	const matches = document.cookie.match(new RegExp('(?:^|; )app_lang=([^;]*)'));
	return matches ? decodeURIComponent(matches[1]) : 'en';
};

// Функция для получения языка из локального хранилища или куки
export const getAppLanguage = (): string => {
	if (typeof window === 'undefined') {
		return 'en';
	}

	const storedLanguage = localStorage.getItem('appLanguage');
	if (storedLanguage && availableLanguages.includes(storedLanguage)) {
		return storedLanguage;
	}

	const cookieLanguage = getAppLanguageFromCookie();
	return availableLanguages.includes(cookieLanguage) ? cookieLanguage : 'en';
};
