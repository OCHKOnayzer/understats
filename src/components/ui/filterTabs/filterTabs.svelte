<script lang="ts">
import { t } from 'svelte-i18n';

import { filterStore } from '$src/stores/filterStore';

import Button from '../button/button.svelte';

const tabs = [
	{ id: 'halfYear', label: 'filter.tabs.halfYear' },
	{ id: 'month', label: new Date().toLocaleString('default', { month: 'long' })[0].toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1) },
	{ id: 'week', label: 'filter.tabs.week' },
	{ id: 'yesterday', label: 'filter.tabs.yesterday' },
	{ id: 'today', label: 'filter.tabs.today' }
] as const;

$: isCustomDateRange = $filterStore.activeTab === 'nothing';
</script>

<div class="filter-tabs">
	{#each tabs as tab}
		<button on:click="{() => filterStore.setActiveTab(tab.id)}">
			<Button variant="{!isCustomDateRange && $filterStore.activeTab === tab.id ? 'filterButtonActive' : 'filterButton'}">
				{$t(tab.label)}
			</Button>
		</button>
	{/each}
</div>

<style>
.filter-tabs {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 32px;
	border-radius: 12px;
}

button {
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
}
</style>
