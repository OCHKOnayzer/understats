import { renderComponent } from '$src/components/ui/data-table';
import { formatDate } from '$src/utils/functions/formatDate';

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
			}),
		meta: { width: '120px' }
	},
	{
		accessorKey: 'siteName',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.bookmaker',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		meta: { width: '80px' }
	},
	{
		accessorKey: 'login',
		header: 'accounts.login',
		meta: { width: '100px' }
	},
	{
		accessorKey: 'email',
		header: 'accounts.mail',
		meta: { width: '100px' }
	},
	{
		accessorKey: 'bkId',
		header: 'accounts.bkId',
		meta: { width: '150px' }
	},
	{
		accessorKey: 'fullName',
		header: 'accounts.fullName',
		meta: { width: '180px' }
	},
	{
		accessorKey: 'phone',
		header: 'accounts.phone',
		meta: { width: '120px' }
	},
	{
		accessorKey: 'registrationDate',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.regData',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		cell: ({ row }) => formatDate(row.original.registrationDate),
		meta: { width: '130px' }
	},
	{
		accessorKey: 'balance',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.balance',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			}),
		meta: { width: '130px' }
	},
	{
		accessorKey: 'lastBet',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.lastBet',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
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
