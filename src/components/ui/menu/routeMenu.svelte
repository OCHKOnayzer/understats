<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { closeMenu, isMenuOpen } from '$src/stores/menu';

import { pageRoutes } from './items/LinkItems';

import { afterNavigate } from '$app/navigation';

let currentPath = '';
let isImagesLoaded = false;

onMount(async () => {
	currentPath = window.location.pathname;

	const imagePromises = pageRoutes.flatMap((route) => [preloadImage(route.img1), preloadImage(route.img2)]);

	await Promise.all(imagePromises);
	isImagesLoaded = true;
});

afterNavigate(() => {
	const previousPath = currentPath;
	currentPath = window.location.pathname;

	if (currentPath) {
		if ($isMenuOpen === true) {
			closeMenu();
		}
	}
});

function preloadImage(src: string): Promise<void> {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = src;
		img.onload = () => resolve();
		img.onerror = () => resolve();
	});
}
</script>

<div class="flex h-auto flex-col items-center justify-center {isImagesLoaded ? '' : 'blurred'} mt-6">
	{#each pageRoutes as item}
		<a
			href="{item.href}"
			class="mb-[12px] flex h-[50px] w-full items-center rounded-[12px] text-gray-500 no-underline transition duration-300 hover:cursor-pointer
		{currentPath === item.href ? 'bg-activeElements text-white' : ''}">
			<div class="relative ml-[12px] mr-2.5 flex h-[20px] w-[20px] items-center justify-center">
				<img
					src="{item.img1}"
					alt="{$t('{item.title}')} (active)"
					class="absolute h-full w-full object-contain
			{currentPath === item.href ? 'opacity-100' : 'opacity-0'}" />
				<img
					src="{item.img2}"
					alt="{$t('{item.title}')} (inactive)"
					class="absolute h-full w-full object-contain
			{currentPath === item.href ? 'opacity-0' : 'opacity-100'}" />
			</div>
			<span class="flex items-center text-sm">
				{$t(item.title)}
			</span>
		</a>
	{/each}
</div>

<style>
.blurred {
	filter: blur(5px);
	pointer-events: none;
	opacity: 0.7;
	transition: filter 0.3s ease, opacity 0.3s ease;
}
</style>
