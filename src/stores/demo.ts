import axios from 'axios';
import { get, writable } from 'svelte/store';
// eslint-disable-next-line import/no-duplicates
import { tick } from 'svelte';

import { queryClient } from '$src/lib/queryClient';
import { getAccessToken, removeDemoToken, setAccessToken } from '$src/services/auth/auth-token.service';
import { authService } from '$src/services/auth/auth.service';
import { accountStore } from '$src/stores/accountStore';
import { betsTableStore } from '$src/stores/betsTableStore';
import { currentUser } from '$src/stores/modalStore';
import { handleDemoToggle } from '$src/utils/functions/handleDemoToggle';

const isBrowser = typeof window !== 'undefined';
let initialDemoState = true;
let isTogglingDemo = false;

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
	}
});

// Комментирую блок, который отключает demo режим при наличии аккаунта
// accountStore.subscribe((acct) => {
//	if (acct && acct.login && get(isDemoEnabled) && !getDemoToken()) {
//		isDemoEnabled.set(false);
//	}
// });

export const toggleDemoMode = async () => {
	if (isTogglingDemo) return;
	isTogglingDemo = true;
	try {
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
			await new Promise((resolve) => setTimeout(resolve, 500));
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
	} finally {
		isTogglingDemo = false;
	}
};
