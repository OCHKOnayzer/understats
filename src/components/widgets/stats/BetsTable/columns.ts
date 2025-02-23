import { renderComponent } from '$src/components/ui/data-table';

import SortableHeader from '../../table/SortableHeader.svelte';

import type { Bet } from '$src/types/bet';
import type { ColumnDef } from '@tanstack/table-core';

type BetColumnMeta = {
	textAlign?: 'left' | 'right';
};

type BetColumnDef = ColumnDef<Bet, unknown> & {
	meta?: BetColumnMeta;
};

export const getColumns = (t: (key: string, params?: Record<string, any>) => string): ColumnDef<Bet>[] => [
	{
		accessorKey: 'dates.placed',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.time'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		meta: { textAlign: 'left' } as BetColumnMeta,
		cell: ({ row }) => {
			try {
				const date = new Date(row.original.dates.placed);
				return date.toLocaleString('ru-RU');
			} catch (e) {
				console.error('Error formatting date:', e);
				return t('other.invalid_date');
			}
		}
	},
	{
		accessorKey: 'siteName',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.bookmaker'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		meta: { textAlign: 'left' } as BetColumnMeta
	},
	{
		accessorKey: 'event.sport',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.sport'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
	},
	{
		accessorKey: 'event',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.event'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => {
			const bet = row.original;
			if (bet.type === 'Express') {
				const count = bet.legs?.length || 0;
				return `${count} ${t('stats.event')}`;
			}
			const event = bet.event;
			return event.name1 && event.name2 ? `${event.name1.default} - ${event.name2.default}` : t('other.no_data');
		}
	},
	{
		accessorKey: 'amounts.stake',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.ammount'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'rate',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.ratio'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'amounts.win',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.win'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'status',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.status'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
	}
];

function getNestedValue(obj: any, path: string, defaultValue: any = '') {
	try {
		return path.split('.').reduce((current, key) => current[key], obj) ?? defaultValue;
	} catch (e) {
		console.error(`Error accessing path ${path}:`, e);
		return defaultValue;
	}
}
