import { get } from 'svelte/store'


import { queryClient } from '$src/lib/queryClient'
import { authService } from '$src/services/auth/auth.service'
import { accountStore } from '$src/stores/accountStore'
import { betsTableStore } from '$src/stores/betsTableStore'
import { isDemoEnabled } from '$src/stores/demo'
import { filterStore } from '$src/stores/filterStore'
import { currentUser } from '$src/stores/modalStore'

import { goto } from '$app/navigation'
import { fetchFilteredData } from '$src/components/entities/stats/api/bets'

export async function handleDemoToggle() {
	try {
		betsTableStore.reset();
		currentUser.set(null);

		let loginResponse;
		if (!get(accountStore).login) {
			if (get(isDemoEnabled)) {
				loginResponse = await authService.demoAuth();
				currentUser.set(loginResponse?.data);
			} else {
				currentUser.set(null);
				return;
			}
		} else {
			if (get(isDemoEnabled)) {
				loginResponse = await authService.demoAuth();
				currentUser.set(loginResponse?.data);
			} else {
				loginResponse = await authService.profile();
				currentUser.set(loginResponse?.data);
			}
		}

		console.log('Login response:', loginResponse?.data);
		if (!loginResponse?.data) {
			return;
		}

		queryClient.invalidateQueries({ queryKey: ['accounts'] });
		queryClient.invalidateQueries({ queryKey: ['bets count'] });
		queryClient.invalidateQueries();

		await loadData();
		goto('/');
	} catch (error) {
		betsTableStore.setError('Ошибка при переключении режима');
	}
}

async function loadData() {
	try {
		const response = await fetchFilteredData(get(filterStore));
		if (response) {
			betsTableStore.setData(response);
		}
	} catch (error) {
		console.error('Error loading data:', error);
	}
}
