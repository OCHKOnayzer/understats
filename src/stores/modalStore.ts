import { writable } from 'svelte/store';

export const currentModal = writable('reg');
export const isAuthModalOpen = writable(true);
export const isChatModalOpen = writable(false);
export const isChangeTypeText = writable(false);
export const inputType = writable('password');

export const switchLogin = () => currentModal.set('login');
export const switchReg = () => currentModal.set('reg');
export const switchRecover = () => currentModal.set('recover');
export const switchReFinish = () => currentModal.set('ReFinish');
export const switchText = () => isChangeTypeText.update((value) => !value);

export const toggleInputType = () => {
	inputType.update((type) => (type === 'password' ? 'text' : 'password'));
};

export const closeModal = () => {
	document.body.style.overflow = '';
	isAuthModalOpen.set(false);
};

// open chat

export const openChatModal = () => {
	isChatModalOpen.set(true);
	document.body.style.overflow = 'none';
};
