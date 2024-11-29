<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    export let tabs: Array<{ id: string; name: string }> = [];
    export let activeTab: string = '';
    export let variant: 'underline' | 'pills' = 'underline';
    
    const dispatch = createEventDispatcher();
    
    function handleTabClick(tabId: string) {
        activeTab = tabId;
        dispatch('tabChange', tabId);
    }
</script>

<div class="w-full">
    <div class="border-b border-gray-200">
        <nav class="-mb-px flex gap-4" aria-label="Tabs">
            {#each tabs as tab}
                <button
                    class="
                        relative py-4 px-1 text-sm font-medium transition-colors
                        {variant === 'underline' 
                            ? 'border-b-2 ' + (activeTab === tab.id 
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')
                            : 'rounded-lg px-4 ' + (activeTab === tab.id
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700')
                        }
                    "
                    on:click={() => handleTabClick(tab.id)}
                    aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                    {tab.name}
                    {#if variant === 'underline' && activeTab === tab.id}
                        <span
                            class="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500"
                            aria-hidden="true"
                        />
                    {/if}
                </button>
            {/each}
        </nav>
    </div>
</div>
