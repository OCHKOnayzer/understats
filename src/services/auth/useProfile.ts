import { createQuery } from '@tanstack/svelte-query';

import { authService } from './auth.service';

export const useUserProfile = () => {
	const query = createQuery({
		queryKey: ['userProfile'], // Уникальный ключ запроса
		queryFn: async () => {
			const response = await authService.profile();
			if (!response || !response.data) {
				throw new Error('Не удалось загрузить профиль');
			}
			return response.data;
		},
		staleTime: 5 * 60 * 1000,
		retry: false
	});

	return { query };
};
