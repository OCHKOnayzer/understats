import { renderComponent } from '$src/components/ui/data-table';
import { formatDate } from '$src/utils/functions/formatDate';
import { formatNumber } from '$src/utils/functions/formatNumber';

import SortableHeader from './SortableHeader.svelte';

import type { IAccountResponse } from '$src/types/accounts';
import type { ColumnDef } from '@tanstack/table-core';

export type { IAccountResponse };

export const accountsColumns: ColumnDef<IAccountResponse>[] = [
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
				title: 'accounts.bookmaker',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
	},
	{
		accessorKey: 'login',
		header: 'accounts.login'
	},
	{
		accessorKey: 'email',
		header: 'accounts.mail'
	},
	{
		accessorKey: 'extendedId',
		header: 'accounts.bkId'
	},
	{
		accessorKey: 'fullName',
		header: 'accounts.fullName'
	},
	{
		accessorKey: 'phone',
		header: 'accounts.phone'
	},
	{
		accessorKey: 'registrationDate',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.regData',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => formatDate(row.original.registrationDate)
	},
	{
		accessorKey: 'balance',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.balance',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => `${formatNumber(row.original.balance)} ${row.original.currency}`
	},
	{
		accessorKey: 'betAddedLastDate',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.lastBet',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => (row.original.betAddedLastDate ? formatDate(row.original.betAddedLastDate) : '')
	},
	{
		accessorKey: 'betsCount',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.betCount',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
	}
];
