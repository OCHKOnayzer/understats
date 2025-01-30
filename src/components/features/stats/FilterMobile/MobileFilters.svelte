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
	<Drawer.Overlay class="fixed inset-0 z-[9998] border-none bg-black/40" />
	<Drawer.Content class="fixed inset-x-0 bottom-0 z-[9999]">
		<div class="flex h-[100vh] max-h-[90vh] flex-col rounded-t-2xl bg-[#20242f] shadow-none">
			<div class="sticky top-0 z-20 rounded-t-2xl bg-[#20242f]">
				<div class="flex justify-center p-3">
					<div class="h-1 w-8 rounded-full bg-[#2f3241]"></div>
				</div>

				<div class="flex items-center justify-between px-4 pb-4">
					<h1 class="m-0 text-xl font-semibold text-white">{$t('stats.filters')}</h1>
					<button
						type="button"
						class="cursor-pointer border-none bg-transparent p-2 text-white"
						on:click="{() => (open = false)}">
						<Icon
							icon="radix-icons:cross-1"
							width="20" />
					</button>
				</div>
			</div>

			<div class="relative min-h-0 flex-1">
				<div class="scrollbar-hide flex h-full flex-col gap-4 overflow-y-auto px-4 pb-4">
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

			<div class="flex-shrink-0 border-t border-[#718096]/10 bg-[#20242f]">
				<div class="flex gap-2 p-4">
					<button
						class="h-12 flex-1 cursor-pointer rounded-xl border-none bg-[#171b26] text-sm font-medium text-[#718096] hover:opacity-90 active:opacity-80"
						on:click="{() => filterStore.reset()}">
						{$t('s.clear_filters')}
					</button>
					<button
						class="h-12 flex-1 cursor-pointer rounded-xl border-none bg-[#2f3241] text-sm font-medium text-white hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
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

:global(.vaul-drawer-content) {
	box-shadow: none !important;
	outline: none !important;
	--snap-point-height: unset !important;
}

:global(.vaul-drawer-overlay) {
	background: rgba(0, 0, 0, 0.4) !important;
}

.scrollbar-hide {
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
</style>
