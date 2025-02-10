<script lang="ts">
import { getCoreRowModel } from '@tanstack/table-core';
import { t } from 'svelte-i18n';

import { createSvelteTable, FlexRender } from '$components/ui/data-table';
import * as Table from '$components/ui/table';
import { closeModal } from '$src/stores/modalStore';

import type { ColumnDef } from '@tanstack/table-core';
import type { BetLeg } from '$src/types/bet';


const { legs = [] } = $props<{ legs: BetLeg[] }>();

let totalCoefficient = $derived(legs.reduce((acc, leg) => acc * leg.rate, 1).toFixed(2));
let allLegsWon = $derived(legs.every((leg) => leg.status === 'Win'));

function formatDate(dateString: string): string {
	try {
		return new Date(dateString).toLocaleString('ru-RU');
	} catch (e) {
		console.error('Error formatting date:', e);
		return $t('express_bet_modal.no_data');
	}
}

function getLocalizedValue(value: { ru?: string; default: string }): string {
	return value?.ru || value?.default || $t('express_bet_modal.no_data');
}

const columns: ColumnDef<BetLeg>[] = [
	{
		accessorKey: 'dates.placed',
		header: $t('express_bet_modal.date'),
		cell: ({ row }) => formatDate(row.original.dates.placed)
	},
	{
		accessorKey: 'event',
		header: $t('express_bet_modal.event'),
		cell: ({ row }) => {
			const event = row.original.event;
			if (!event) return $t('express_bet_modal.no_data');
			return `${getLocalizedValue(event.name1)} - ${getLocalizedValue(event.name2)}`;
		}
	},
	{
		accessorKey: 'event.competitionName',
		header: $t('express_bet_modal.tournament'),
		cell: ({ row }) => getLocalizedValue(row.original.event?.competitionName)
	},
	{
		accessorKey: 'rate',
		header: $t('express_bet_modal.coefficient'),
		cell: ({ row }) => row.original.rate.toFixed(2)
	},
	{
		accessorKey: 'outcome',
		header: $t('express_bet_modal.outcome'),
		cell: ({ row }) => getLocalizedValue(row.original.outcome)
	},
	{
		accessorKey: 'status',
		header: $t('express_bet_modal.status'),
		cell: ({ row }) => {
			const status = row.original.status;
			return status === 'Win' ? $t('express_bet_modal.status_won') : status === 'Lost' ? $t('express_bet_modal.status_lost') : status;
		}
	}
];

const table = createSvelteTable({
	data: legs,
	columns,
	getCoreRowModel: getCoreRowModel()
});

$effect(() => {
	if (legs.length === 0) {
		closeModal();
	}
});
</script>

<div class="modal-content">
	<button
		class="close-button"
		on:click="{closeModal}">×</button>
	<h2 class="modal-title">{$t('express_bet_modal.title')}</h2>
	<div class="table-container">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup}
					<Table.Row>
						{#each headerGroup.headers as header}
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
				{#each table.getRowModel().rows as row}
					<Table.Row>
						{#each row.getVisibleCells() as cell}
							<Table.Cell>
								<FlexRender
									content="{cell.column.columnDef.cell}"
									context="{cell.getContext()}" />
							</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>

<style lang="postcss">
.modal-content {
	background: #363a45;
	padding: 2rem;
	border-radius: 8px;
	max-width: 90%;
	max-height: 90vh;
	overflow: hidden;
	position: fixed;
	color: white;
	min-width: 800px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.modal-title {
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	font-weight: 600;
}

.table-container {
	overflow-y: auto;
	max-height: calc(90vh - 200px);
}

.close-button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.5rem;
	background: transparent;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0.5rem;
	line-height: 1;
}

:global(.table-container table) {
	width: 100%;
	border-collapse: collapse;
}

:global(.table-container th) {
	background: #31384a;
	padding: 0.75rem;
	text-align: left;
	white-space: nowrap;
}

:global(.table-container td) {
	padding: 0.75rem;
	border-bottom: 1px solid #2a2e39;
}

:global(.table-container tr:hover) {
	background: #232556;
}

.table-container::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

.table-container::-webkit-scrollbar-track {
	background: #2a2e39;
	border-radius: 4px;
}

.table-container::-webkit-scrollbar-thumb {
	background: #6660ff;
	border-radius: 4px;
}

.table-container::-webkit-scrollbar-thumb:hover {
	background: #5550ee;
}

.summary {
	margin-top: 1rem;
	padding: 1rem;
	background: #2a2e39;
	border-radius: 8px;
}

.summary-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
}

.summary-item:last-child {
	margin-bottom: 0;
}

.label {
	color: #9ca3af;
}

.value {
	font-weight: 600;
}

.value.won {
	color: #10b981;
}
</style>
