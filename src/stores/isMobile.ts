import { writable } from 'svelte/store';

export const isMobile = writable(false);

function checkScreenWidth() {
	isMobile.set(window.innerWidth <= 768);
}
export function initializeScreenWidthListener() {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => {
		window.removeEventListener('resize', checkScreenWidth);
	};
}
