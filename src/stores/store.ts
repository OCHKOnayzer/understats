import { derived, writable } from 'svelte/store';

import type { IAccountResponse } from '$src/types/accounts';
import type { TableItems } from '$types/types';

// export const BOOKMAKERS = [
// 	{ value: 'fonbet', label: m.fonbet(), icon: '/icons/bk/fonbet.png' },
// 	{ value: 'olimp', label: m.olimp(), icon: '/icons/bk/olimp.png' },
// 	{ value: 'betboom', label: m.betboom(), icon: '/icons/bk/betboom.png' }
// ];

export const TileChecked = writable<string>('tile');

export const accounts = writable<TableItems>([]);

export const allAccounts = writable<IAccountResponse[]>([]);

export const AccountCreateSelect = writable<string>();
// export const AccountCreate = writable([
// 	{ value: 'new', name: m.newAccount() },
// 	{ value: 'old', name: m.oldAccount() }
// ]);

export const AccountStatusSelect = writable<string>();
// export const AccountStatus = writable<{ value: string; name: string }[]>([
// 	{ value: 'active', name: m.activeAccount() },
// 	{ value: 'inactive', name: m.inactiveAccount() }
// ]);

export const filteredAccounts = derived([accounts, AccountCreateSelect, AccountStatusSelect], ([$accounts, $createSelect, $statusSelect]) => {
	let filtered = [...$accounts];

	if ($createSelect) {
		filtered.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return $createSelect === 'new' ? dateB - dateA : dateA - dateB;
		});
	}

	if ($statusSelect) {
		filtered = filtered.filter((account) => {
			if ($statusSelect === 'active') return account.connected;
			return !account.connected;
		});
	}

	return filtered;
});

// export const FilterInputSelect = writable<FilterInputSelectStore>({
// 	preset: {
// 		name: m.filterPresetName(),
// 		placeholder: m.filterPresetPlaceholder(),
// 		selected: { value: '', label: '' },
// 		variant: 'input'
// 	},
// 	bookmaker: {
// 		name: m.bookmakerName(),
// 		placeholder: m.bookmakerPlaceholder(),
// 		selected: { value: '', label: '', icon: '' },
// 		options: BOOKMAKERS,
// 		variant: 'select'
// 	},
// 	status: {
// 		name: m.accountStatusName(),
// 		placeholder: m.accountStatusPlaceholder(),
// 		selected: { value: '', label: '' },
// 		variant: 'input'
// 	},
// 	bed: {
// 		name: m.accountBedName(),
// 		placeholder: '1500 - 2000',
// 		selected: { value: '', label: '' },
// 		options: [
// 			{ value: '1500 - 2000', label: '1500 - 2000' },
// 			{ value: '2000 - 2500', label: '2000 - 2500' },
// 			{ value: '2500 - 3000', label: '2500 - 3000' }
// 		],
// 		variant: 'select'
// 	},
// 	active: {
// 		name: m.accountActiveName(),
// 		placeholder: m.accountActivePlaceholder(),
// 		selected: { value: '', label: '' },
// 		options: [
// 			{ value: 'active', label: m.activeOption() },
// 			{ value: 'inactive', label: m.inactiveOption() }
// 		],
// 		variant: 'select'
// 	},
// 	balance: {
// 		name: m.accountBalanceName(),
// 		placeholder: m.accountBalancePlaceholder(),
// 		selected: { value: '', label: '' },
// 		options: [
// 			{ value: '1500 - 2000', label: '1500 - 2000' },
// 			{ value: '2000 - 2500', label: '2000 - 2500' },
// 			{ value: '2500 - 3000', label: '2500 - 3000' }
// 		],
// 		variant: 'select'
// 	}
// });

// export const LoginForm = writable({
// 	bookmaker: {
// 		name: m.bookmakerName(),
// 		placeholder: m.bookmakerPlaceholder(),
// 		selected: { value: '', label: '', icon: '' },
// 		options: BOOKMAKERS,
// 		variant: 'select'
// 	},
// 	login: {
// 		name: m.loginFormLoginName(),
// 		placeholder: m.loginFormLoginPlaceholder(),
// 		selected: { value: '', label: '' },
// 		variant: 'input'
// 	},
// 	password: {
// 		name: m.loginFormPasswordName(),
// 		placeholder: m.loginFormPasswordPlaceholder(),
// 		selected: { value: '', label: '' },
// 		variant: 'input'
// 	}
// });

export const accountIsSuccess = writable<boolean | null>(null);
export const isOpen = writable(false);

export const filter = writable<boolean>(false);

// export const NAME_MAP = {
// 	[m.loginFormLoginName()]: 'login',
// 	[m.loginFormPasswordName()]: 'password'
// } as const;
