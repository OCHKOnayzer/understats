import { derived, writable } from 'svelte/store';

export const isModalOpen = writable(false);

export const isLogOutModal = writable(false);

export const modalComponent = writable<
	| 'authModal'
	| 'LeaveContainer'
	| 'FailedModal'
	| 'SuccessfulModal'
	| 'SorryModal'
	| 'LangModal'
	| 'SupportModal'
	| 'ChatModal'
	| 'PayTariffs'
	| 'SocialModal'
	| 'PaySupport'
	| 'PlanExpiredModal'
	| null
>(null);
export type currentTariffsType = 'Lite' | 'Standart' | 'Pro' | '';
export const currentTariffs = writable<currentTariffsType>('');
export const currentLimits = writable('');
export const currentAccounst = writable('');

import { removeAccessToken } from '$src/services/auth/auth-token.service';

import type { IAuthResponse } from '$src/types/types';

// export const isModalOpen = writable(getAccessToken() ? false : true);

export const currentModal = writable('login');
export const isChatModalOpen = writable(false);
export const isChangeTypeText = writable(false);
export const confirmPassword = writable('');
export const inputType = writable('password');

export const currentUser = writable<IAuthResponse | null>(null);
export const isAuthenticated = derived(currentUser, ($user) => !!$user);

export const switchLogin = () => currentModal.set('login');
export const switchReg = () => currentModal.set('reg');
export const switchRecover = () => currentModal.set('recover');
export const switchReFinish = () => currentModal.set('ReFinish');
export const switchText = () => isChangeTypeText.update((value) => !value);

export const leaveModalOpen = () => {};

export const toggleInputType = () => {
	inputType.update((type) => (type === 'password' ? 'text' : 'password'));
};

export const openModal = (
	component:
		| 'authModal'
		| 'LeaveContainer'
		| 'FailedModal'
		| 'SuccessfulModal'
		| 'SorryModal'
		| 'LangModal'
		| 'SupportModal'
		| 'ChatModal'
		| 'PayTariffs'
		| 'SocialModal'
		| 'PlanExpiredModal'
		| 'PaySupport'
) => {
	isModalOpen.set(true);
	modalComponent.set(component);
	document.body.style.overflow = 'hidden';
};

export const closeModal = () => {
	isModalOpen.set(false);
	modalComponent.set(null);
	document.body.style.overflow = '';
};

export const openChatModal = () => {
	isChatModalOpen.set(true);
	document.body.style.overflow = 'none';
};

export const setCurrentTariffs = (tariffs: currentTariffsType) => {
	currentTariffs.set(tariffs);
};
export const setCurrentLimits = (limits: string, accounts: string) => {
	currentLimits.set(limits);
	currentAccounst.set(accounts);
};
export const logout = () => {
	removeAccessToken();
	isModalOpen.set(true);
	currentModal.set('login');
};
