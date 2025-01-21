/* eslint-disable import/no-duplicates */
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export const useBreakpoint = (breakpoint = 400) => {
	const isMobile = writable(false);
	const innerWidth = writable(0);

	const updateWidth = () => {
		innerWidth.set(window.innerWidth);
		isMobile.set(window.innerWidth <= breakpoint);
	};

	onMount(() => {
		updateWidth();
		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	});

	return { isMobile, innerWidth };
};
