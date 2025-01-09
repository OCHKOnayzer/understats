import { createQuery } from '@tanstack/svelte-query';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';

import { accountService } from './account.service';

export const useAccounts = () => {
	const query = createQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response;
		},
		refetchOnWindowFocus: true,
		staleTime: 30000,
		retry: 1
	});

	return { query };
};
