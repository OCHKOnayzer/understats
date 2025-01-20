// import { get } from 'svelte/store';

// import { demoStore } from '../stores/demo';

// const DEMO_CREDENTIALS = {
// 	login: 'demo@example.com',
// 	password: 'guest_password'
// };

// export const handleTokenError = () => {
// 	localStorage.removeItem('token');
// 	demoStore.reset();
// };

// export const getActiveToken = () => {
// 	const { isDemoEnabled, demoToken, regularToken } = get(demoStore);
// 	return isDemoEnabled ? demoToken : regularToken;
// };

// export const toggleDemoMode = async (authService: any) => {
// 	const { isDemoEnabled } = get(demoStore);

// 	if (!isDemoEnabled) {
// 		try {
// 			const response = await authService.login(DEMO_CREDENTIALS);
// 			demoStore.enableDemo(response.token);
// 		} catch (error) {
// 			console.error('Demo login failed:', error);
// 		}
// 	} else {
// 		const { regularToken } = get(demoStore);
// 		if (regularToken) {
// 			demoStore.disableDemo();
// 		} else {
// 			demoStore.reset();
// 		}
// 	}
// };
