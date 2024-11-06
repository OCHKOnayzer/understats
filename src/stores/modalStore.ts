import { writable } from 'svelte/store';

export const currentModal = writable('reg');
export const isAuthModalOpen = writable(true);

export const switchLogin = () => currentModal.set('login');
export const switchReg = () => currentModal.set('reg');
export const switchRecover = () => currentModal.set('recover');
export const switchReFinish = () => currentModal.set('ReFinish');

export const closeModal = () => {
	document.body.style.overflow = '';
	isAuthModalOpen.set(false);
};
