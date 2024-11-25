import { createQuery } from '@tanstack/svelte-query';

import { accountService } from './account.service';

export const useAccounts = () => {
	const query = createQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error('Не удалось загрузить профиль');
			}
			return response;
		},
		refetchOnWindowFocus: false,
		staleTime: 30000,
		retry: 1
	});

	return { query };
};
