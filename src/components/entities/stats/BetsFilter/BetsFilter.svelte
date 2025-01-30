<script lang="ts">
import Icon from '@iconify/svelte';
import { onDestroy, onMount, tick } from 'svelte';
import { t } from 'svelte-i18n';

import BetFilterResults from '$src/components/features/stats/FilterBet/BetFilterResults.svelte';
import Accordion from '$src/components/ui/accordion/Accordion.svelte';
import BetFilters from '$src/components/ui/betFilters/BetFilters.svelte';
import Calendar from '$src/components/ui/calendar/DateRangePicker.svelte';
import FilterTabs from '$src/components/ui/filterTabs/filterTabs.svelte';
import { betsTableStore } from '$src/stores/betsTableStore';
import { filterStore } from '$src/stores/filterStore';
import { isOpen, toggleSidebar } from '$src/utils/functions/toggleSidebar';

import { fetchFilteredData } from '../api/api';
import BetsSelectFilter from '../BetsSelectFilter/BetsSelectFilter.svelte';

let isLoading = $state<boolean>(false);
let sidebarElement: HTMLElement;

function handleDateSelect(event: CustomEvent<{ startDate: string; endDate: string }>) {
	filterStore.setDateRange(event.detail.startDate, event.detail.endDate);
}

function handleOutsideClick(event: MouseEvent) {
	if (isOpen && sidebarElement && !sidebarElement.contains(event.target as Node)) {
		$isOpen = false;
	}
}

onMount(() => {
	sidebarElement = document.querySelector('.sidebar');
	document.addEventListener('mousedown', handleOutsideClick);
});

onDestroy(() => {
	document.removeEventListener('mousedown', handleOutsideClick);
});

async function applyFilters() {
	try {
		betsTableStore.setLoading(true);
		await tick();
		console.log('Filters before fetch:', $filterStore);
		const data = await fetchFilteredData($filterStore);
		console.log('Filtered Data:', data);
		betsTableStore.setData(data);
		$isOpen = false;
	} catch (error) {
		console.error('Failed to apply filters:', error);
		betsTableStore.setError('Ошибка при загрузке данных');
	} finally {
		betsTableStore.setLoading(false);
		toggleSidebar();
	}
}
</script>

<button
	class="item"
	on:click="{toggleSidebar}">
	<h2 class="title">{$t('stats.filters')}</h2>
	<img
		class="icon"
		src="/icons/circleArrow.svg"
		alt="icon"
		style:transform="{$isOpen ? 'rotate(180deg)' : 'rotate(0)'}" />
</button>

<aside
	class="sidebar w-full"
	class:open="{$isOpen}">
	<div class="sidebar-header">
		<div class="flex items-center justify-between">
			<h1 class="filters-title">{$t('stats.filters')}</h1>
			<button
				type="button"
				on:click="{toggleSidebar}"
				aria-label="Close sidebar"
				class="cursor-pointer transition-colors hover:text-[#0D111D]">
				<Icon
					font-size="24"
					icon="radix-icons:cross-1" />
			</button>
		</div>
	</div>

	<div class="sidebar-content">
		<Calendar on:select="{handleDateSelect}" />
		<FilterTabs />

		<Accordion title="{$t('filter.accordion.results')}">
			<BetFilterResults />
		</Accordion>

		<BetsSelectFilter />

		<Accordion title="{$t('filter.accordion.other')}">
			<BetFilters />
		</Accordion>
	</div>

	<div class="action-buttons">
		<button
			class="clear-button"
			on:click="{() => filterStore.reset()}">
			{$t('stats.clean_filters')}
		</button>
		<button
			class="apply-button"
			on:click="{applyFilters}"
			disabled="{isLoading}">
			{#if isLoading}
				{$t('stats.loading')}...
			{:else}
				{$t('stats.use_filters')} ({$filterStore.selectedSports.length +
					$filterStore.selectedBookmakers.length +
					$filterStore.selectedAccounts.length +
					$filterStore.selectedComands.length +
					$filterStore.selectedTours.length +
					$filterStore.betResult.length +
					$filterStore.betType.length +
					$filterStore.betStatus.length +
					$filterStore.betGameStatus.length})
			{/if}
		</button>
	</div>
</aside>

<style>
.item {
	display: flex;
	background-color: #000000;
	border-radius: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border: none;
	width: 19%;
	padding: 8px 16px;
	justify-content: space-between;
	align-items: center;
}

@media (max-width: 650px) {
	.item {
		display: none;
	}
}

.item:hover {
	background-color: #1a1a1a;
}

.title {
	font-family: Manrope;
	font-size: 16px;
	font-weight: 600;
	margin-right: auto;
	color: white;

	@media (max-width: 768px) {
		font-size: 12px;
	}
}

.icon {
	width: 24px;
	height: 24px;
	transition: transform 0.2s ease-in-out;

	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
}

.sidebar {
	position: fixed;
	top: 0;
	right: -650px;
	width: 650px;
	height: 100vh;
	background-color: #20242f;
	transition: right 0.3s ease-in-out;
	z-index: 1000;
	color: white;
	border-radius: 36px 0 0 36px;
	display: flex;
	flex-direction: column;
}

.sidebar.open {
	right: 0;
}

.sidebar-header {
	position: sticky;
	top: 0;
	background-color: #20242f;
	padding: 24px 24px 0;
	z-index: 2;
	border-radius: 36px 0 0 0;
}

.sidebar-content {
	flex: 1;
	padding: 24px 24px 0;
	overflow-y: auto;
}

.filters-title {
	font-size: 32px;
	font-weight: 600;
	color: white;
}

.action-buttons {
	position: sticky;
	bottom: 0;
	background: #20242f;
	padding: 16px 24px;
	border-top: 1px solid rgba(113, 128, 150, 0.2);
}

.clear-button,
.apply-button {
	padding: 16px;
	width: 50%;
	border-radius: 12px;
	font-weight: 500;
	font-size: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.clear-button {
	width: 50%;
	background: transparent;
	color: white;
	border: 1px solid #718096;
}

.clear-button:hover {
	background: rgba(255, 255, 255, 0.05);
}

.apply-button {
	background: #2f3241;
	color: white;
	border: none;
}

.apply-button:hover {
	background: #383b4d;
}

.apply-button:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}
</style>
