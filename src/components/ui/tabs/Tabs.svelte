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
	<div class="overflow-x-auto {variant === 'underline' ? 'justify-between rounded-lg bg-[#363a45] px-2 py-1 w-full' : 'justify-start'}">
		<nav
			class="flex text-white {variant === 'underline' ? 'justify-between rounded-lg w-full' : 'justify-start'}"
			aria-label="Tabs">
			{#each tabs as tab}
				<button
					class="px-4 py-2 text-[15px] transition-all whitespace-nowrap {variant === 'underline' ? 'rounded-lg lg:text-sm md:text-xs w-full' : 'rounded-tl-[12px] rounded-tr-[12px] border-2 border-[#363a45]'} {variant ===
						'underline' && activeTab === tab.id
						? 'bg-[#171B26]'
						: ''} {variant === 'pills' && activeTab === tab.id ? 'bg-[#363A45]' : ''}"
					on:click="{() => handleTabClick(tab.id)}"
					aria-current="{activeTab === tab.id ? 'page' : undefined}">
					{tab.name}
				</button>
			{/each}
		</nav>
	</div>
</div>