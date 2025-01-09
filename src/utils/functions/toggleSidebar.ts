import { get, writable } from 'svelte/store';

export const isOpen = writable(false);

export const toggleSidebar = () => {
	isOpen.update((value) => !value);
};
