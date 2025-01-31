import { get } from 'svelte/store';

import { fetchFilteredData } from '$src/components/entities/stats/api/api';
import { demo } from '$src/constants/constants';
import { authService } from '$src/services/auth/auth.service';
import { accountStore } from '$src/stores/accountStore';
import { betsTableStore } from '$src/stores/betsTableStore';
import { isDemoEnabled } from '$src/stores/demo';
import { filterStore } from '$src/stores/filterStore';
import { currentUser } from '$src/stores/modalStore';

const { login, password } = get(accountStore);

export async function handleDemoToggle() {
	try {
		const newDemoState = !get(isDemoEnabled);

		betsTableStore.reset();
		currentUser.set(null);

		const loginResponse = await authService.main('login', newDemoState ? { login: demo.login, password: demo.password } : { login, password });

		if (!loginResponse?.data) {
			throw new Error('Ошибка авторизации');
		}

		const profile = await authService.profile();
		if (profile?.data) {
			currentUser.set(profile.data);

			isDemoEnabled.set(newDemoState);
			await loadData();
		}
	} catch (error) {
		console.error('Error during demo toggle:', error);
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
