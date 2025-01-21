import { renderComponent } from '$src/components/ui/data-table';
import { formatDate } from '$src/utils/functions/formatDate';

import DataTableIdButton from '../stats/BetsTable/data-table-id-button.svelte.svelte';

import type { IAccountResponse } from '$src/types/accounts';
import type { ColumnDef } from '@tanstack/table-core';

export type { IAccountResponse };

export const accountsColumns: ColumnDef<IAccountResponse>[] = [
	{
		accessorKey: 'clientSeq',
		header: ({ column }) =>
			renderComponent(DataTableIdButton, {
				column,
				'data-state': column.getIsSorted() ? 'sorted' : 'unsorted'
			}),
		meta: { width: '120px' }
	},
	{
		accessorKey: 'siteName',
		header: 'accounts.bookmaker',
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
		header: 'accounts.regData',
		cell: ({ row }) => formatDate(row.original.registrationDate),
		meta: { width: '130px' }
	},
	{
		accessorKey: 'balance',
		header: 'accounts.balance',
		meta: { width: '130px' }
	},
	{
		accessorKey: 'lastBet',
		header: 'accounts.lastBet'
	},
	{
		accessorKey: 'betsCount',
		header: 'accounts.betCount'
	}
];
