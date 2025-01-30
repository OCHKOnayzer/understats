<script lang="ts">
import { getCoreRowModel, type CellContext, type ColumnDef } from '@tanstack/table-core';
import { onDestroy, onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { createSvelteTable, FlexRender } from '$components/ui/data-table';
import * as Table from '$components/ui/table';
import { fetchFilteredData } from '$src/components/entities/stats/api/api';
import MobileCard from '$src/components/features/stats/Mobile/MobileCard.svelte';
import TableNoData from '$src/components/ui/tableNoData/TableNoData.svelte';
import { useUserProfile } from '$src/services/auth/useProfile';
import { betsTableStore } from '$src/stores/betsTableStore';
import { filterStore } from '$src/stores/filterStore';
import { currentUser } from '$src/stores/modalStore';
import { generateBetKey } from '$src/utils/functions/generateBetKey';

import AuthDemoButton from '../../demo/demoButtons/AuthDemoButton.svelte';

import { columns, type Bet } from './columns';

let innerWidth = $state(0);
let isMobile = $derived(innerWidth < 400);
let { query } = useUserProfile();
let isAuthenticated = $derived(!!$currentUser);
let prevPage = $state($filterStore.pagination.currentPage);
let prevItemsPerPage = $state($filterStore.pagination.itemsPerPage);

type BetColumnMeta = {
	textAlign?: 'left' | 'right';
};

type BetColumnDef = ColumnDef<Bet, unknown> & {
	meta?: BetColumnMeta;
};

const table = createSvelteTable({
	get data() {
		return $betsTableStore.data;
	},
	columns,
	getCoreRowModel: getCoreRowModel()
});

type CellContextType = CellContext<Bet, unknown>;

let isLoading = $derived($betsTableStore.isLoading);

async function loadData() {
	if ($betsTableStore.isLoading) {
		return;
	}

	try {
		betsTableStore.setLoading(true);

		const response = await fetchFilteredData($filterStore);
		if (!response) {
			throw new Error('Нет данных');
		}

		betsTableStore.setData(response);
	} catch (err) {
		console.error('Error loading data:', err);
		betsTableStore.setError('Ошибка при загрузке данных');
	}
}

onMount(() => {
	loadData();
});

onDestroy(() => {});

$effect(() => {
	const { currentPage, itemsPerPage } = $filterStore.pagination;

	if (currentPage !== prevPage || itemsPerPage !== prevItemsPerPage) {
		prevPage = currentPage;
		prevItemsPerPage = itemsPerPage;
		loadData();
	}
});

$effect(() => {
	if ($betsTableStore.data && !Array.isArray($betsTableStore.data)) {
		betsTableStore.setData([] as Bet[]);
	}
});
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

<div class="relative w-full">
	{#if !isAuthenticated}
		<AuthDemoButton />
	{:else if $betsTableStore.error}
		<div class="p-4 text-red-500">{$betsTableStore.error}</div>
	{:else if $betsTableStore.isLoading}
		<div class="flex h-[calc(100vh-280px)] flex-col items-center justify-center p-4 text-white">
			<span class="loading-spinner mb-3"></span>
			<h2>{$t('stats.loading_data')}</h2>
		</div>
	{:else if !$betsTableStore.data?.length}
		<div class="message-container">
			<TableNoData
				title="{$t('stats.no_bets')}"
				description="{$t('stats.no_bets_description')}"
				variant="{'stats'}" />
		</div>
	{:else if isMobile}
		<div class="mt-4 grid grid-cols-1 gap-2">
			{#each $betsTableStore.data || [] as bet, index (generateBetKey(bet, index))}
				{#if bet}
					<MobileCard data="{bet satisfies Bet}" />
				{/if}
			{/each}
		</div>
	{:else}
		<div class="table-container">
			<div class="table-wrapper">
				<Table.Root>
					<Table.Header>
						{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
							<Table.Row>
								{#each headerGroup.headers as header (header.id)}
									<Table.Head>
										{#if !header.isPlaceholder}
											<div
												class="flex items-center gap-2"
												style="justify-content: {header.column.columnDef.meta?.textAlign === 'right' ? 'flex-end' : 'flex-start'}">
												<img
													src="/icons/table-icon.svg"
													alt="" />
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
							<Table.Row data-state="{row.getIsSelected() && 'selected'}">
								{#each row.getVisibleCells() as cell (cell.id)}
									<Table.Cell style="text-align: {cell.column.columnDef.meta?.textAlign || 'left'}">
										<FlexRender
											content="{cell.column.columnDef.cell}"
											context="{cell.getContext() as CellContextType}" />
									</Table.Cell>
								{/each}
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
.table-container {
	@apply relative h-[calc(100vh-280px)] w-full;
}

.message-container {
	@apply flex h-[calc(100vh-190px)] flex-col items-center justify-center p-4 text-white;
}

.table-wrapper {
	@apply absolute inset-0 mt-4 overflow-auto;
}

.table-wrapper {
	scrollbar-width: thin;
	scrollbar-color: #6660ff #20242f;
}

.table-wrapper::-webkit-scrollbar {
	@apply w-2;
}

.table-wrapper::-webkit-scrollbar-track {
	@apply rounded-lg bg-[#20242f];
}

.table-wrapper::-webkit-scrollbar-thumb {
	@apply rounded-lg bg-[#6660ff] hover:bg-[#5550ee];
}

.loading-spinner {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 3px solid #6660ff;
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
