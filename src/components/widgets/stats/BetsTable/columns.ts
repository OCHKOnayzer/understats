import { renderComponent } from '$src/components/ui/data-table'
import { formatDate, formatDateWithRecent } from '$src/utils/functions/formatDate'
import { formatNumber } from '$src/utils/functions/formatNumber'

import SortableHeader from '../../table/SortableHeader.svelte'

import type { Bet } from '$src/types/bet'
import type { ColumnDef } from '@tanstack/table-core'

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
		cell: ({ row }) => {
			try {
				return formatDateWithRecent(row.original.dates.placed);
			} catch (e) {
				console.error('Error formatting date:', e);
				return t('other.invalid_date');
			}
		}
	},
	{
		accessorKey: 'clientSeq',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'ID',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'extendedId',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.bkId'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'siteName',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.bookmaker'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
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
		accessorKey: 'event.startTime',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.startTime'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => {
			try {
				return row.original.event.startTime ? formatDate(row.original.event.startTime) : '';
			} catch (e) {
				return '';
			}
		}
	},
	{
		accessorKey: 'isLive',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.type'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => (row.original.isLive ? 'Live' : 'Prematch')
	},
	{
		accessorKey: 'event.competitionName',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.tournament'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => row.original.event.competitionName?.default || ''
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
		accessorKey: 'outcome.default',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('stats.outcome'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => row.original.outcome?.default || ''
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
		cell: ({ row }) => formatNumber(Number(row.original.rate)),
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
	},
	{
		accessorKey: 'amounts.stake',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.amount'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		cell: ({ row }) => formatNumber(Number(row.original.amounts.stake)),
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
		cell: ({ row }) => formatNumber(Number(row.original.amounts.win)),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'profit',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.profit'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted(),
				textAlign: 'right'
			}),
		cell: ({ row }) => {
			const win = Number(row.original.amounts.win);
			const stake = Number(row.original.amounts.stake);
			return formatNumber(win - stake);
		},
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	// {
	// 	accessorKey: 'score',
	// 	header: ({ column }) =>
	// 		renderComponent(SortableHeader, {
	// 			title: t('columns.bet.score'),
	// 			onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
	// 			isSorted: column.getIsSorted()
	// 		}),
	// 	cell: ({ row }) => row.original.score || ''
	// }
];
