<script lang="ts">
import { t } from 'svelte-i18n';
export let title: string;
export let onClick: () => void;
export let isSorted: boolean | 'asc' | 'desc' = false;
</script>

<button
	class="flex items-center gap-1 text-[14px] group"
	on:click="{onClick}">
	
	<img
		src="/icons/table-icon.svg"
		alt=""
		class="w-4 h-4 transition-all duration-200 transform {isSorted ? (isSorted === 'desc' ? 'rotate-180 opacity-100' : 'opacity-100') : 'opacity-0 group-hover:opacity-100'}" />
	{$t(title)}
</button>
