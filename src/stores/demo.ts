import { writable } from 'svelte/store';

export const isDemoEnabled = writable(false);

export const toggleDemoMode = () => {
	isDemoEnabled.update((current) => !current);
};
