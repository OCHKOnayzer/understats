import { writable } from 'svelte/store';

export const isFaqMenuOpen = writable(true);

export const openFaqMenu = () => {
	isFaqMenuOpen.set(true);
};
export const closeFaqMenu = () => {
	isFaqMenuOpen.set(false);
};
