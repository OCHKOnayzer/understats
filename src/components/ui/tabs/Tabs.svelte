<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Props {
        tabs: Array<{ id: string; name: string }>;
        activeTab: string;
        variant: 'underline' | 'pills';
    }

    let {tabs,activeTab = $bindable(),variant}:Props = $props();
    
    const dispatch = createEventDispatcher();
    
    function handleTabClick(tabId: string) {
        activeTab = tabId;
        dispatch('tabChange', tabId);
    }
</script>

<div class="w-full">
    <div >
        <nav class="flex text-white {variant === 'underline' ? 'bg-[#363a45] rounded-lg justify-between px-2 py-1' : 'justify-start'}" aria-label="Tabs">
            {#each tabs as tab}
                <button
                    class="px-4 py-2 text-[15px] transition-all {variant === 'underline' ? 'rounded-lg' : 'border-[#363a45] border-2 rounded-tr-[12px] rounded-tl-[12px]'} {variant === 'underline' && activeTab === tab.id ? 'bg-[#171B26]' : ''} {variant === 'pills' && activeTab === tab.id ? 'bg-[#363A45]' : ''}"
                    on:click={() => handleTabClick(tab.id)}
                    aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                    {tab.name}
                </button>
            {/each}
        </nav>
    </div>
</div>
