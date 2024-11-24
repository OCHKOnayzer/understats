import { createQuery } from '@tanstack/svelte-query';

import { accountService } from './account.service';

export const useAccounts = () => {
	const query = createQuery({
		queryKey: ['userProfile'],
		queryFn: async () => {
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error('Не удалось загрузить профиль');
			}
			return response;
		}
	});

	return { query };
};
