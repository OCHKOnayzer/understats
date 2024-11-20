<script lang="ts">
import { filterStore } from '$src/stores/filterStore';
const tabs = [
	{ id: 'accounts', label: 'По аккаунтам' },
	{ id: 'sports', label: 'По спорту' },
	{ id: 'bookmaker', label: 'По букмекеру' },
	{ id: 'months', label: 'По месяцам' }
] as const;
</script>

<div class="filter-tabs">
	{#each tabs as tab}
		<button
			class="tab"
			class:active="{$filterStore.activeTab === tab.id}"
			on:click="{() => filterStore.setActiveTab(tab.id)}">
			{tab.label}
		</button>
	{/each}
</div>

<style>
.filter-tabs {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 8px;
	padding: 4px;
	background: #363a45;
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
