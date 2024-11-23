<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

import Button from '../button/button.svelte';
const tabs = [
	{ id: 'halfYear', label: 'Полгода' },
	{ id: 'month', label: new Date().toLocaleString('default', { month: 'long' })[0].toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1) },
	{ id: 'week', label: 'Неделя' },
	{ id: 'yesterday', label: 'Вчера' },
	{ id: 'today', label: 'Сегодня' }
] as const;
</script>

<div class="filter-tabs">
	{#each tabs as tab}
		<button on:click="{() => filterStore.setActiveTab(tab.id)}">
			<Button variant="{$filterStore.activeTab.includes(tab.id) ? 'filterButtonActive' : 'filterButton'}">
				{tab.label}
			</Button>
		</button>
	{/each}
</div>

<style>
.filter-tabs {
	display: flex;
	padding: 4px;
	gap: 8px;
	margin-bottom: 16px;
	border-radius: 12px;
}

.tab {
	padding: 12px 8px;
	background: transparent;
	border: none;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	font-size: 14px;
	transition: all 0.2s ease-in-out;
}

.tab.active {
	background: #171b26;
}

.tab:hover:not(.active) {
	background: rgba(0, 0, 0, 0.3);
}
</style>
