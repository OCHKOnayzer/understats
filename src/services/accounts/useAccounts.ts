import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { isDemoEnabled } from '$src/stores/demo';

import { getAccessToken, getDemoToken } from '../auth/auth-token.service';

import { accountService } from './account.service';

export function useAccounts() {
	const query = createQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			// Используем demoToken, если demo режим включён
			const token = getAccessToken() || getDemoToken();
			if (!token) {
				return null;
			}
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response;
		},
		// Изменено: флаг enabled с учётом demo режима
		enabled: !!(getAccessToken() || getDemoToken() || get(isDemoEnabled)),
		refetchOnWindowFocus: true,
		staleTime: 30000,
		retry: 1
	});
	return { query };
}
