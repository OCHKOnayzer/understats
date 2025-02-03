import { get, writable } from 'svelte/store'

import { queryClient } from '$src/lib/queryClient'
import { getAccessToken, removeDemoToken, setAccessToken } from '$src/services/auth/auth-token.service'
import { authService } from '$src/services/auth/auth.service'
import { accountStore } from '$src/stores/accountStore'
import { betsTableStore } from '$src/stores/betsTableStore'
import { currentUser } from '$src/stores/modalStore'
import { handleDemoToggle } from '$src/utils/functions/handleDemoToggle'
import axios from 'axios'
import { tick } from 'svelte'

const isBrowser = typeof window !== 'undefined';
let initialDemoState = true;

if (isBrowser) {
	const stored = localStorage.getItem('isDemoEnabled');
	if (stored !== null) {
		initialDemoState = stored === 'true';
	}
	const account = get(accountStore);
	if (account && account.login) {
		initialDemoState = false;
	}
}

export const isDemoEnabled = writable<boolean>(initialDemoState);

isDemoEnabled.subscribe((value) => {
	if (isBrowser) {
		localStorage.setItem('isDemoEnabled', String(value));
		queryClient.invalidateQueries();
	}
});

accountStore.subscribe((acct) => {
	if (acct && acct.login && get(isDemoEnabled)) {
		isDemoEnabled.set(false);
	}
});

export const toggleDemoMode = async () => {
	const currentMode = get(isDemoEnabled);
	const newMode = !currentMode;

	isDemoEnabled.set(newMode);
	await tick();

	if (newMode) {
		const accessToken = getAccessToken();
		if (accessToken) {
			localStorage.setItem('previousAccessToken', accessToken);
		}
		await handleDemoToggle();
	} else {
		removeDemoToken();
		await new Promise(resolve => setTimeout(resolve, 500));
		axios.defaults.headers.common.Authorization = undefined;
	
		let accessToken = getAccessToken();
		if (!accessToken) {
			accessToken = localStorage.getItem('previousAccessToken');
			if (accessToken) {
				setAccessToken(accessToken);
				localStorage.removeItem('previousAccessToken');
			}
		}


		if (accessToken) {
			const loginResponse = await authService.profile();
			currentUser.set(loginResponse?.data);

			accountStore.setData(loginResponse?.data);
		} else {
			currentUser.set(null);
			betsTableStore.setData([]);
		}
		queryClient.invalidateQueries({ queryKey: ['accounts'] });
		queryClient.invalidateQueries({ queryKey: ['bets count'] });
	}
};
