import { writable } from 'svelte/store';

export const isModalOpen = writable(true);

export const isLogOutModal = writable(false);

export const modalComponent = writable<'authModal' | 'LeaveContainer' | null>('authModal');

export const currentModal = writable('reg');
export const isChatModalOpen = writable(false);
export const isChangeTypeText = writable(false);
export const inputType = writable('password');

export const switchLogin = () => currentModal.set('login');
export const switchReg = () => currentModal.set('reg');
export const switchRecover = () => currentModal.set('recover');
export const switchReFinish = () => currentModal.set('ReFinish');
export const switchText = () => isChangeTypeText.update((value) => !value);

export const leaveModalOpen = () => {};

export const toggleInputType = () => {
	inputType.update((type) => (type === 'password' ? 'text' : 'password'));
};

export const openModal = (component: 'authModal' | 'LeaveContainer') => {
	isModalOpen.set(true);
	modalComponent.set(component);
	document.body.style.overflow = 'hidden';
};

export const closeModal = () => {
	isModalOpen.set(false);
	modalComponent.set(null);
	document.body.style.overflow = '';
};

// open chat

export const openChatModal = () => {
	isChatModalOpen.set(true);
	document.body.style.overflow = 'none';
};
