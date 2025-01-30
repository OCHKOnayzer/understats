<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

import MobileFilters from './MobileFilters.svelte';

let isOpen = $state(false);

let totalFilters = $derived(
	$filterStore.selectedSports.length +
		$filterStore.selectedBookmakers.length +
		$filterStore.selectedAccounts.length +
		$filterStore.selectedComands.length +
		$filterStore.selectedTours.length +
		$filterStore.betResult.length +
		$filterStore.betType.length +
		$filterStore.betStatus.length +
		$filterStore.betGameStatus.length
);
</script>

<button
	class="filter-button"
	on:click="{() => (isOpen = true)}">
	<img
		src="/icons/filter.svg"
		alt="filter" />
	{#if totalFilters > 0}
		<span class="filter-count">{totalFilters}</span>
	{/if}
</button>

<MobileFilters bind:open="{isOpen}" />

<style>
.filter-button {
	position: relative;
	background: transparent;
	border: none;
	padding: 8px;
	margin-left: 8px;
}

.filter-count {
	position: absolute;
	top: 0;
	right: 0;
	background: var(--accent-color);
	color: white;
	border-radius: 50%;
	min-width: 18px;
	height: 18px;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate(50%, -50%);
}

@media (min-width: 651px) {
	.filter-button {
		display: none;
	}
}
</style>
