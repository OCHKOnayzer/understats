<script lang="ts">
import { getCoreRowModel, getSortedRowModel, type CellContext, type ColumnDef, type SortingState } from '@tanstack/table-core';
import { onDestroy, onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { createSvelteTable, FlexRender } from '$components/ui/data-table';
import * as Table from '$components/ui/table';
import TableError from '$components/ui/tableError/TableError.svelte';
import { fetchFilteredData } from '$src/components/entities/stats/api/bets';
import MobileCard from '$src/components/features/stats/Mobile/MobileCard.svelte';
import TableNoData from '$src/components/ui/tableNoData/TableNoData.svelte';
import { betsTableStore } from '$src/stores/betsTableStore';
import { isDemoEnabled } from '$src/stores/demo';
import { expressBetLegs } from '$src/stores/expressBetStore';
import { filterStore } from '$src/stores/filterStore';
import { currentUser, openModal } from '$src/stores/modalStore';
import { generateBetKey } from '$src/utils/functions/generateBetKey';
import { handleDemoToggle } from '$src/utils/functions/handleDemoToggle';

import AuthDemoButton from '../../demo/demoButtons/AuthDemoButton.svelte';

import { getColumns } from './columns';
import TableRow from './TableRow.svelte';

import type { Bet } from '$src/types/bet';

let innerWidth = $state(0);
let isMobile = $derived(innerWidth < 740);
let prevPage = $state($filterStore.pagination.currentPage);
let prevItemsPerPage = $state($filterStore.pagination.itemsPerPage);
let isLoadingMore = $state(false);
let sorting = $state<SortingState>([]);

function handleExpressClick(bet: Bet) {
	if (bet.type === 'Express' && bet.legs) {
		expressBetLegs.set(bet.legs);
		openModal('ExpressBetModal');
	}
}

type BetColumnMeta = {
	textAlign?: 'left' | 'right';
};

type BetColumnDef = ColumnDef<Bet, unknown> & {
	meta?: BetColumnMeta;
};

const table = createSvelteTable({
	get data() {
		return $betsTableStore.data.bets;
	},
	columns: getColumns($t),
	getCoreRowModel: getCoreRowModel(),
	getSortedRowModel: getSortedRowModel(),
	onSortingChange: (updater) => {
		if (typeof updater === 'function') {
			sorting = updater(sorting);
		} else {
			sorting = updater;
		}
	},
	state: {
		get sorting() {
			return sorting;
		}
	}
});

type CellContextType = CellContext<Bet, unknown>;

async function loadData() {
	if ($betsTableStore.isLoading) return;

	try {
		betsTableStore.setLoading(true);
		betsTableStore.reset();

		const response = await fetchFilteredData({
			...$filterStore,
			pagination: {
				...$filterStore.pagination,
				itemsPerPage: isMobile ? 10 : $filterStore.pagination.itemsPerPage
			}
		});

		if (!response) {
			throw new Error('other.no_data');
		}

		betsTableStore.setTotalItems(response.pagination.total);
		betsTableStore.setData(response.res);
		betsTableStore.setHasMore(response.res.bets.length >= response.pagination.perPage);
	} catch (err) {
		betsTableStore.setError('other.data_error');
	} finally {
		betsTableStore.setLoading(false);
	}
}

async function loadMoreData() {
	if (isLoadingMore || !$betsTableStore.hasMore) return;

	try {
		isLoadingMore = true;
		const mobileFilter = {
			...$filterStore,
			pagination: {
				...$filterStore.pagination,
				currentPage: $betsTableStore.currentPage + 1,
				itemsPerPage: 10
			}
		};

		const response = await fetchFilteredData(mobileFilter);
		if (!response || response.res.bets.length === 0) {
			betsTableStore.setHasMore(false);
			return;
		}

		betsTableStore.appendData(response.res);
		betsTableStore.setHasMore(response.res.bets.length >= response.pagination.perPage);
	} catch (err) {
		betsTableStore.setError('other.data_error');
	} finally {
		isLoadingMore = false;
	}
}

function handleScroll(event: Event) {
	if (!isMobile) return;

	const target = event.target as HTMLElement;
	const { scrollTop, scrollHeight, clientHeight } = target;
	const threshold = 100;

	if (scrollHeight - scrollTop - clientHeight < threshold && !isLoadingMore && $betsTableStore.hasMore) {
		loadMoreData();
	}
}

onMount(async () => {
	if (!$currentUser && $isDemoEnabled) {
		await handleDemoToggle();
	}
	loadData();
});

onDestroy(() => {});

$effect(() => {
	if (!isMobile) {
		const { currentPage, itemsPerPage } = $filterStore.pagination;
		if (currentPage !== prevPage || itemsPerPage !== prevItemsPerPage) {
			prevPage = currentPage;
			prevItemsPerPage = itemsPerPage;
			loadData();
		}
	}
});

$effect(() => {
	if ($betsTableStore.data && !Array.isArray($betsTableStore.data.bets)) {
		betsTableStore.setData({ bets: [] });
	}
});

let lastUser = null;

$effect(() => {
	if ($currentUser !== lastUser) {
		lastUser = $currentUser;
		if ($currentUser) {
			loadData();
		}
	}
});
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

<div class="relative w-full">
	{#if !$currentUser}
		<AuthDemoButton />
	{:else if $betsTableStore.error}
		<div class="table-error-container">
			<TableError error="{$betsTableStore.error}" />
		</div>
	{:else if $betsTableStore.isLoading && !isLoadingMore}
		<div class="flex h-[calc(100vh-280px)] flex-col items-center justify-center p-4 text-white">
			<span class="loading-spinner mb-3"></span>
			<h2>{$t('stats.loading_data')}</h2>
		</div>
	{:else if $currentUser && !$betsTableStore.data?.bets?.length}
		<div class="message-container">
			<TableNoData
				title="{$t('stats.no_bets')}"
				description="{$t('stats.no_bets_description')}"
				variant="stats" />
		</div>
	{:else if isMobile}
		<div
			class="mobile-container mt-4 grid grid-cols-1 gap-2"
			onscroll="{handleScroll}">
			{#each $betsTableStore.data.bets as bet, index (generateBetKey(bet, index))}
				{#if bet}
					<MobileCard data="{bet}" />
				{/if}
			{/each}
			{#if isLoadingMore}
				<div class="flex justify-center p-4">
					<span class="loading-spinner"></span>
				</div>
			{/if}
			{#if !$betsTableStore.hasMore && $betsTableStore.data.bets.length > 0}
				<div class="flex justify-center p-4 text-gray-400">
					{$t('stats.no_more_data')}
				</div>
			{/if}
		</div>
	{:else}
		<div class="table-container">
			<div class="table-wrapper">
				<Table.Root>
					<Table.Header>
						{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
							<Table.Row>
								{#each headerGroup.headers as header (header.id)}
									<Table.Head class="px-2">
										{#if !header.isPlaceholder}
											<div
												class="w-full"
												style="display: flex; justify-content: {header.column.columnDef.meta?.textAlign === 'right' ? 'flex-end' : 'flex-start'}">
												<FlexRender
													content="{header.column.columnDef.header}"
													context="{header.getContext()}" />
											</div>
										{/if}
									</Table.Head>
								{/each}
							</Table.Row>
						{/each}
					</Table.Header>
					<Table.Body>
						{#each table.getRowModel().rows as row, index (generateBetKey(row.original, index))}
							<TableRow
								row="{row}"
								onExpressClick="{handleExpressClick}">
								{#each row.getVisibleCells() as cell (cell.id)}
									<Table.Cell style="cursor: pointer; text-align: {cell.column.columnDef.meta?.textAlign || 'left'}">
										<FlexRender
											content="{cell.column.columnDef.cell}"
											context="{cell.getContext() as CellContextType}" />
									</Table.Cell>
								{/each}
							</TableRow>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
.table-container {
	@apply relative h-[calc(100vh-280px)] w-full font-[Inter];
}

.message-container {
	@apply flex h-[calc(100vh-190px)] flex-col items-center justify-center p-4 font-[Inter] text-white;
}

.table-wrapper {
	@apply absolute inset-0 mt-4 overflow-auto;
}

:global(th) {
	@apply whitespace-nowrap px-2 font-[Inter] font-medium;
}

:global(td) {
	@apply align-middle font-[Inter];
}

.mobile-container {
	height: calc(100vh - 280px);
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: thin;
	scrollbar-color: #6660ff #20242f;
	@apply font-[Inter];
}

.mobile-container::-webkit-scrollbar {
	@apply w-2;
}

.mobile-container::-webkit-scrollbar-track {
	@apply rounded-lg bg-input;
}

.mobile-container::-webkit-scrollbar-thumb {
	@apply rounded-lg bg-violet hover:bg-[#5550ee];
}

.loading-spinner {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 3px solid;
	@apply border-violet;
	border-top: 3px solid transparent;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
