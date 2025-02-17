import { writable } from 'svelte/store';

import type { IAccountResponse } from '$src/types/accounts';

export const accounts = writable<IAccountResponse[]>([]);
export const isAccountsLoading = writable<boolean>(false);
