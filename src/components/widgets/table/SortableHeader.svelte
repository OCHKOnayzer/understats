<script lang="ts">
import { t } from 'svelte-i18n';
export let title: string;
export let onClick: () => void;
export let isSorted: boolean | 'asc' | 'desc' = false;
export let textAlign: 'left' | 'right' = 'left';
</script>

<div
	class="flex w-full items-center font-[Inter] text-[14px]"
	style="justify-content: {textAlign === 'right' ? 'flex-end' : 'flex-start'}">
	<button
		class="group relative flex items-center font-medium text-gray-200 hover:text-white"
		on:click="{onClick}">
		<span>{$t(title)}</span>
		<img
			src="/icons/table-icon.svg"
			alt=""
			class="absolute {textAlign === 'right' ? '-left-5' : '-right-5'} h-4 w-4 transform transition-all duration-200 {isSorted
				? isSorted === 'desc'
					? 'rotate-180 opacity-100'
					: 'opacity-100'
				: 'opacity-0 group-hover:opacity-50'}" />
	</button>
</div>

<style>
button {
	transition: color 0.2s ease-in-out;
}
</style>
