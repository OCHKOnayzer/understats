import { renderComponent } from '$src/components/ui/data-table'
import { formatDateWithRecent } from '$src/utils/functions/formatDate'
import { formatNumber } from '$src/utils/functions/formatNumber'

import SortableHeader from '../../table/SortableHeader.svelte'
import InfoIcon from './InfoIcon.svelte'

import type { Bet } from '$src/types/bet'
import type { ColumnDef } from '@tanstack/table-core'

type BetColumnMeta = {
	textAlign?: 'left' | 'right';
};

export const getColumns = (t: (key: string, params?: Record<string, any>) => string): ColumnDef<Bet>[] => [
	{
		id: 'placedDate',
		accessorFn: (row) => row.dates.placed,
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.time'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => {
			const date = new Date(row.original.dates.placed);
			return renderComponent(InfoIcon, {
				formattedValue: formatDateWithRecent(date),
				fullValue: date.toLocaleString('ru-RU', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit'
				}),
				align: 'left'
			});
		}
	},
	{
		accessorKey: 'clientSeq',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'ID',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
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
		id: 'sport',
		accessorFn: (row) => row.event.sport,
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.sport'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
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
		id: 'competition',
		accessorFn: (row) => row.event.competitionName?.default,
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.tournament'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => row.original.event.competitionName?.default || ''
	},
	{
		id: 'outcome',
		accessorFn: (row) => row.outcome?.default,
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
		id: 'stake',
		accessorFn: (row) => row.amounts.stake,
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
		id: 'win',
		accessorFn: (row) => row.amounts.win,
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
		id: 'profit',
		accessorFn: (row) => {
			const win = Number(row.amounts.win);
			const stake = Number(row.amounts.stake);
			return win - stake;
		},
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
	{
		id: 'startTime',
		accessorFn: (row) => row.event.startTime,
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: t('columns.bet.startTime'),
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => {
			if (!row.original.event.startTime) return '';
			const date = new Date(row.original.event.startTime);
			return renderComponent(InfoIcon, {
				formattedValue: formatDateWithRecent(date),
				fullValue: date.toLocaleString('ru-RU', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit'
				}),
				align: 'left'
			});
		}
	}
];
