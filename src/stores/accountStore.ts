import { writable } from 'svelte/store';

import type { IAccountRequest } from '$src/types/accounts';

function createAccountStore() {
	const isBrowser = typeof window !== 'undefined';
	const storedData = isBrowser ? localStorage.getItem('account') : null;
	const initialData: IAccountRequest = storedData ? JSON.parse(storedData) : { login: '', password: '' };

	const { subscribe, set, update } = writable<IAccountRequest>(initialData);

	return {
		subscribe,
		setData: (data: IAccountRequest) => {
			if (isBrowser) {
				localStorage.setItem('account', JSON.stringify(data));
			}
			update(() => data);
		},
		reset: () => {
			if (isBrowser) {
				localStorage.removeItem('account');
			}
			set({ login: '', password: '' });
		}
	};
}

export const accountStore = createAccountStore();
