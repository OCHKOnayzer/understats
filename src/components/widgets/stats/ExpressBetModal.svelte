<script lang="ts">
import { getCoreRowModel, type ColumnDef } from '@tanstack/table-core';
import { t } from 'svelte-i18n';

import { createSvelteTable, FlexRender } from '$components/ui/data-table';
import * as Table from '$components/ui/table';
import { closeModal } from '$src/stores/modalStore';

import type { BetLeg } from '$src/types/bet';

const { legs = [] } = $props<{ legs: BetLeg[] }>();

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

<div
	class="modal-overlay"
	on:click="{closeModal}"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}"
	role="button"
	tabindex="0">
	<div
		class="modal-content"
		on:click|stopPropagation
		role="presentation">
		<button
			class="close-button"
			on:click="{closeModal}">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round">
				<line
					x1="18"
					y1="6"
					x2="6"
					y2="18"></line>
				<line
					x1="6"
					y1="6"
					x2="18"
					y2="18"></line>
			</svg>
		</button>
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
</div>

<style lang="postcss">
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 50;
}

.modal-content {
	background: #363a45;
	padding: 2rem;
	border-radius: 8px;
	max-width: 90%;
	max-height: 90vh;
	overflow: hidden;
	position: relative;
	color: white;
	min-width: 800px;
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
	top: 1.5rem;
	right: 1.5rem;
	background: transparent;
	border: none;
	color: #9ca3af;
	cursor: pointer;
	padding: 0.5rem;
	line-height: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: color 0.2s;
}

.close-button:hover {
	color: white;
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
