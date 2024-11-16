import { createQuery } from '@tanstack/svelte-query';

import { authService } from './auth.service';

export const useUserProfile = () => {
	const query = createQuery({
		queryKey: ['userProfile'],
		queryFn: async () => {
			const response = await authService.profile();
			if (!response || !response.data) {
				throw new Error('Не удалось загрузить профиль');
			}
			return response.data;
		},
		staleTime: 1000 * 60 * 5,
		retry: 2
	});

	return { query };
};
