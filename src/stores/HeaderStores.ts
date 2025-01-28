import { writable } from 'svelte/store';

export const headerTitle = writable<string>('');
export const afterUrl = writable<string>('/');
export const langSel = writable('');
export const langImage = writable('');
export const closeState = writable<boolean>(false);

export const selectHeaderTitle = (title: string) => {
	headerTitle.set(title);
};
export const selectedLang = (lang: string) => {
	langSel.set(lang);
	langImage.set(lang);
};
