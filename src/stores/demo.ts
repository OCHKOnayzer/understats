import { writable } from 'svelte/store';

import { queryClient } from '$src/lib/queryClient';

const isBrowser = typeof window !== 'undefined';
const storedDemoState = isBrowser ? localStorage.getItem('isDemoEnabled') === 'true' : false;
export const isDemoEnabled = writable<boolean>(storedDemoState);

isDemoEnabled.subscribe((value) => {
	if (isBrowser) {
		localStorage.setItem('isDemoEnabled', String(value));
		queryClient.invalidateQueries();
	}
});

export const toggleDemoMode = () => {
	isDemoEnabled.update((current) => !current);
};
