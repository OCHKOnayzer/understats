import { writable } from 'svelte/store';

export const headerTitle = writable('');
export const langSel = writable('');
export const langImage = writable('');

export const selectHeaderTitle = (title: string) => {
	headerTitle.set(title);
};
export const selectedLang = (lang: string) => {
	langSel.set(lang);
	langImage.set(lang);
};
