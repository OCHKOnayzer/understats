<script lang="ts">
import Icon from '@iconify/svelte';
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import * as Drawer from '$components/ui/drawer/index.ts';
import MobileDrawer from '$components/ui/drawer/mobile-drawer.svelte';
import BetFilterResults from '$src/components/features/stats/FilterBet/BetFilterResults.svelte';
import Accordion from '$src/components/ui/accordion/Accordion.svelte';
import BetFilters from '$src/components/ui/betFilters/BetFilters.svelte';
import Calendar from '$src/components/ui/calendar/DateRangePicker.svelte';
import FilterTabs from '$src/components/ui/filterTabs/filterTabs.svelte';

import { fetchFilteredData } from '$src/components/entities/stats/api/api';
import BetsSelectFilter from '$src/components/entities/stats/BetsSelectFilter/BetsSelectFilter.svelte';
import { betsTableStore } from '$src/stores/betsTableStore';
import { filterStore } from '$src/stores/filterStore';

let { open = $bindable(false) } = $props<{
	open?: boolean;
}>();

let isLoading = $state(false);

function lockScroll() {
	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	document.body.style.overflow = 'hidden';
	document.body.style.width = '100%';
	document.body.style.position = 'fixed';
	if (scrollbarWidth > 0) {
		document.body.style.paddingRight = `${scrollbarWidth}px`;
	}
}

function unlockScroll() {
	document.body.style.overflow = '';
	document.body.style.width = '';
	document.body.style.position = '';
	document.body.style.paddingRight = '';
}

$effect(() => {
	if (open) {
		lockScroll();
	} else {
		unlockScroll();
	}
});

function handleDateSelect(event: CustomEvent<{ startDate: string; endDate: string }>) {
	filterStore.setDateRange(event.detail.startDate, event.detail.endDate);
}

async function applyFilters() {
	try {
		isLoading = true;
		betsTableStore.setLoading(true);
		const data = await fetchFilteredData($filterStore);
		betsTableStore.setData(data);
		open = false;
	} catch (error) {
		console.error('Failed to apply filters:', error);
		betsTableStore.setError('Ошибка при загрузке данных');
	} finally {
		isLoading = false;
		betsTableStore.setLoading(false);
	}
}

onMount(() => {
	return () => {
		unlockScroll();
	};
});

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

<MobileDrawer bind:open="{open}">
	<Drawer.Overlay class="drawer-overlay" />
	<Drawer.Content class="drawer-content">
		<div class="drawer-inner">
			<div class="drawer-header-container">
				<div class="drawer-handle-wrapper">
					<div class="drawer-handle"></div>
				</div>

				<div class="drawer-header">
					<h1 class="filters-title">{$t('stats.filters')}</h1>
					<button
						type="button"
						on:click="{() => (open = false)}"
						class="close-button">
						<Icon
							icon="radix-icons:cross-1"
							width="20" />
					</button>
				</div>
			</div>

			<div class="drawer-body">
				<div class="drawer-body-content">
					<div class="filter-section">
						<Calendar on:select="{handleDateSelect}" />
					</div>

					<div class="filter-section">
						<FilterTabs />
					</div>

					<div class="filter-section">
						<Accordion title="{$t('filter.accordion.results')}">
							<BetFilterResults />
						</Accordion>
					</div>

					<div class="filter-section">
						<BetsSelectFilter />
					</div>

					<div class="filter-section">
						<Accordion title="{$t('filter.accordion.other')}">
							<BetFilters />
						</Accordion>
					</div>
				</div>
			</div>

			<div class="drawer-footer">
				<div class="action-buttons">
					<button
						class="clear-button"
						on:click="{() => filterStore.reset()}">
						{$t('filter.clear_filters')}
					</button>
					<button
						class="apply-button"
						on:click="{applyFilters}"
						disabled="{isLoading}">
						{#if isLoading}
							{$t('stats.loading')}...
						{:else}
							{$t('stats.use_filters')} ({totalFilters})
						{/if}
					</button>
				</div>
			</div>
		</div>
	</Drawer.Content>
</MobileDrawer>

<style>
.drawer-overlay {
	position: fixed;
	border: none;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 9998;
}

.drawer-content {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
}

.drawer-inner {
	background: #20242f;
	border-radius: 16px 16px 0 0;
	display: flex;
	flex-direction: column;
	height: 100vh;
	max-height: 90vh;
	box-shadow: none;
}

.drawer-header-container {
	position: sticky;
	top: 0;
	background: #20242f;
	z-index: 20;
	border-radius: 16px 16px 0 0;
}

.drawer-handle-wrapper {
	padding: 12px;
	display: flex;
	justify-content: center;
}

.drawer-handle {
	width: 32px;
	height: 4px;
	background: #2f3241;
	border-radius: 2px;
}

.drawer-header {
	padding: 0 16px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.filters-title {
	font-size: 20px;
	font-weight: 600;
	color: white;
	margin: 0;
}

.close-button {
	color: white;
	background: transparent;
	border: none;
	padding: 8px;
	cursor: pointer;
}

.drawer-body {
	flex: 1;
	min-height: 0;
	position: relative;
}

.drawer-body-content {
	height: 100%;
	overflow-y: auto;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	-webkit-overflow-scrolling: touch;
	padding-bottom: 16px;
}

.drawer-footer {
	flex-shrink: 0;
	background: #20242f;
	border-top: 1px solid rgba(113, 128, 150, 0.1);
}

.action-buttons {
	padding: 16px;
	display: flex;
	gap: 8px;
}

.clear-button,
.apply-button {
	flex: 1;
	height: 48px;
	border-radius: 12px;
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

.clear-button {
	background: #171b26;
	color: #718096;
	border: none;
}

.clear-button:active {
	opacity: 0.8;
}

.apply-button {
	background: #2f3241;
	color: white;
	border: none;
}

.apply-button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.drawer-body-content::-webkit-scrollbar {
	display: none;
}

.drawer-body-content {
	scrollbar-width: none;
	-ms-overflow-style: none;
}

.filter-section :global(.calendar),
.filter-section :global(.filter-tabs),
.filter-section :global(.accordion),
.filter-section :global(.select-filter) {
	background: transparent;
	padding: 0;
	border: none;
}

.filter-section :global(.filter-tabs) {
	margin-bottom: 0;
}

.filter-section :global(.accordion-header) {
	padding: 0;
	margin-bottom: 12px;
}

.filter-section :global(.accordion-content) {
	padding: 0;
}

.filter-section :global(.filter-chip) {
	background: #2f3241;
	border-radius: 12px;
	padding: 8px 16px;
	color: white;
	border: none;
	font-size: 14px;
}

.filter-section :global(.filter-chip.active) {
	background: var(--accent-color);
}

@media (max-width: 380px) {
	.drawer-inner {
		height: 95vh;
		max-height: 95vh;
	}

	.drawer-body-content {
		padding: 12px;
		gap: 12px;
	}

	.action-buttons {
		padding: 12px;
	}

	.clear-button,
	.apply-button {
		height: 44px;
		font-size: 13px;
	}
}

:global(.vaul-drawer-content) {
	box-shadow: none !important;
	outline: none !important;
	--snap-point-height: unset !important;
}

:global(.vaul-drawer-overlay) {
	background: rgba(0, 0, 0, 0.4) !important;
}
</style>
