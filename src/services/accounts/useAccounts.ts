import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { getAccessToken } from '../auth/auth-token.service';

import { accountService } from './account.service';

export function useAccounts() {
	const query = createQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const token = getAccessToken();
			if (!token) {
				return null;
			}
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response;
		},
		enabled: !!getAccessToken(),
		refetchOnWindowFocus: true,
		staleTime: 30000,
		retry: 1
	});

	return { query };
}
