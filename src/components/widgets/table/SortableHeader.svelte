<script lang="ts">
import { t } from 'svelte-i18n';
export let title: string;
export let onClick: () => void;
export let isSorted: boolean | 'asc' | 'desc' = false;
</script>

<button
	class="flex items-center gap-1 text-[14px]"
	on:click="{onClick}">
	<img
		src="/icons/table-icon.svg"
		alt=""
		class="items-center {isSorted === 'desc' ? 'rotate-180' : ''} transition-all duration-200" />
	{$t(title)}
</button>
