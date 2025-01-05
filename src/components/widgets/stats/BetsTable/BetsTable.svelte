<script lang="ts">
import { createSvelteTable, FlexRender } from '$components/ui/data-table';
import * as Table from '$components/ui/table';

import { fetchFilteredData } from '$src/components/entities/stats/api/api';
import MobileCard from '$src/components/features/stats/Mobile/MobileCard.svelte';
import { filterStore } from '$src/stores/filterStore';
import { currentUser } from '$src/stores/modalStore';
import { getCoreRowModel } from '@tanstack/table-core';
import { onMount } from 'svelte';

import { betsTableStore } from '$src/stores/betsTableStore';
import AuthDemoButton from '../../demo/demoButtons/AuthDemoButton.svelte';
import { columns } from './columns';

let innerWidth = $state(0);
let isMobile = $derived(innerWidth < 400);
let isAuthenticated = $derived(!!$currentUser);

const table = createSvelteTable({
	get data() {
		return $betsTableStore.data;
	},
	columns,
	getCoreRowModel: getCoreRowModel()
});

onMount(async () => {
	try {
		betsTableStore.setLoading(true);
		const data = await fetchFilteredData($filterStore);
		betsTableStore.setData(data);
	} catch (err) {
		betsTableStore.setError('Ошибка при загрузке данных');
		console.error(err);
	} finally {
		betsTableStore.setLoading(false);
	}
});
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

{#if !isAuthenticated}
	<AuthDemoButton />
{:else if isMobile}
	<div class="grid grid-cols-1 gap-4">
		<MobileCard />
		<MobileCard />
		<MobileCard />
	</div>
{:else if $betsTableStore.isLoading}
	<div class="flex justify-center p-4">
		<span class="loading-spinner">Загрузка...</span>
	</div>
{:else if $betsTableStore.error}
	<div class="p-4 text-red-500">{$betsTableStore.error}</div>
{:else}
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head>
								{#if !header.isPlaceholder}
									<FlexRender
										content="{header.column.columnDef.header}"
										context="{header.getContext()}" />
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state="{row.getIsSelected() && 'selected'}">
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell>
								<FlexRender
									content="{cell.column.columnDef.cell}"
									context="{cell.getContext()}" />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell
							colspan="{columns.length}"
							class="h-24 text-center">
							Нет результатов
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
{/if}

<style>
.loading-spinner {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 2px solid #f3f3f3;
	border-top: 2px solid #3498db;
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
