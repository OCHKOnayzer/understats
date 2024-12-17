<script lang="ts">
import { createEventDispatcher } from 'svelte';

interface Props {
	tabs: Array<{ id: string; name: string }>;
	activeTab: string;
	variant: 'underline' | 'pills';
}

let { tabs, activeTab = $bindable(), variant }: Props = $props();

const dispatch = createEventDispatcher();

function handleTabClick(tabId: string) {
	activeTab = tabId;
	dispatch('tabChange', tabId);
}
</script>

<div class="w-full">
	<div class="overflow-x-auto {variant === 'underline' ? 'w-full justify-between rounded-lg bg-[#363a45] px-2 py-1' : 'justify-start'}">
		<nav
			class="flex text-white {variant === 'underline' ? 'w-full justify-between rounded-lg' : 'justify-start'}"
			aria-label="Tabs">
			{#each tabs as tab}
				<button
					class="whitespace-nowrap px-4 py-2 text-[15px] transition-all {variant === 'underline'
						? 'w-full rounded-lg md:text-xs lg:text-sm'
						: 'rounded-tl-[12px] rounded-tr-[12px] border-2 border-[#363a45]'} {variant === 'underline' && activeTab === tab.id ? 'bg-[#171B26]' : ''} {variant === 'pills' &&
					activeTab === tab.id
						? 'bg-[#363A45]'
						: ''}"
					onclick="{() => handleTabClick(tab.id)}"
					aria-current="{activeTab === tab.id ? 'page' : undefined}">
					{tab.name}
				</button>
			{/each}
		</nav>
	</div>
</div>
