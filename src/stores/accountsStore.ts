import type { IAccountResponse } from '$src/types/accounts';
import { writable } from 'svelte/store';

export const accounts = writable<IAccountResponse[]>([]);
export const isAccountsLoading = writable<boolean>(false); 