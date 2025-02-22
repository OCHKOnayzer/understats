import { get } from 'svelte/store'

import { queryClient } from '$src/lib/queryClient'
import { getDemoToken, setDemoToken } from '$src/services/auth/auth-token.service'
import { authService } from '$src/services/auth/auth.service'
import { accountStore } from '$src/stores/accountStore'
import { betsTableStore } from '$src/stores/betsTableStore'
import { isDemoEnabled } from '$src/stores/demo'
import { currentUser } from '$src/stores/modalStore'

import { goto } from '$app/navigation'

export async function handleDemoToggle(isFirstVisit: boolean = false) {
	try {
		betsTableStore.reset();
		currentUser.set(null);

		const isDemo = isFirstVisit ? true : get(isDemoEnabled);
		
		if (isDemo) {
			let demoToken = getDemoToken();
			if (!demoToken) {
				const storedDemo = localStorage.getItem('demoToken');
				if (storedDemo) {
					setDemoToken(storedDemo);
				} else {
					await authService.demoAuth();
					demoToken = getDemoToken();
					if (demoToken) {
						localStorage.setItem('demoToken', demoToken);
					}
				}
			}
			const profileResponse = await authService.profile();
			currentUser.set(profileResponse?.data);
		} else {
			if (!get(accountStore).login) {
				currentUser.set(null);
				return;
			}
			const profileResponse = await authService.profile();
			currentUser.set(profileResponse?.data);
		}

		queryClient.invalidateQueries({ queryKey: ['profile'] });
		queryClient.invalidateQueries({ queryKey: ['accounts'] });
		queryClient.invalidateQueries({ queryKey: ['bets count'] });

		if (!isFirstVisit) {
			goto('/');
		}
	} catch (error) {
		betsTableStore.setError('other.error_demo');
	}
}
