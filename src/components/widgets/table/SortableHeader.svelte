<script lang="ts">
import { t } from 'svelte-i18n';
export let title: string;
export let onClick: () => void;
export let isSorted: boolean | 'asc' | 'desc' = false;
</script>

<button
	class="group flex items-center gap-1 text-[14px] font-medium text-gray-200 hover:text-white"
	on:click="{onClick}">
	{$t(title)}
	<img
		src="/icons/table-icon.svg"
		alt=""
		class="h-4 w-4 transform transition-all duration-200 {isSorted ? (isSorted === 'desc' ? 'rotate-180 opacity-100' : 'opacity-100') : 'opacity-0 group-hover:opacity-50'}" />
</button>

<style>
button {
	transition: color 0.2s ease-in-out;
}
</style>
