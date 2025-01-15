import { onMount } from 'svelte';

export const useBreakpoint = (breakpoint = 400) => {
	let isMobile = $state(false);
	let innerWidth = $state(0);

	const updateWidth = () => {
		innerWidth = window.innerWidth;
		isMobile = innerWidth <= breakpoint;
	};

	$effect(() => {
		isMobile = innerWidth < breakpoint;
	});

	onMount(() => {
		updateWidth();
		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	});

	return { isMobile, innerWidth };
};
