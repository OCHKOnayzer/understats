import type { IAccountResponse } from '$src/types/accounts';
import type { ColumnDef } from '@tanstack/table-core';

export type { IAccountResponse };

export const accountsColumns: ColumnDef<IAccountResponse>[] = [
	{
		accessorKey: 'siteName',
		header: 'accounts.bookmaker',
		cell: ({ row }) => {
			try {
				const date = new Date();
				return date.toLocaleString('ru-RU');
			} catch (e) {
				console.error('Error formatting date:', e);
				return 'Invalid date';
			}
		},
		meta: { width: '120px' }
	},
	{
		accessorKey: 'clientSeq',
		header: 'accounts.id',
		meta: { width: '80px' }
	},
	{
		accessorKey: 'login',
		header: 'accounts.login',
		meta: { width: '100px' }
	},
	{
		accessorKey: 'balance',
		header: 'accounts.balance',
		meta: { width: '100px' }
	},
	{
		accessorKey: 'fullName',
		header: 'accounts.fullName',
		meta: { width: '150px' }
	},
	{
		accessorKey: 'email',
		header: 'accounts.mail',
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
		meta: { width: '130px' }
	},
	{
		accessorKey: 'lastBet',
		header: 'accounts.lastBet',
		meta: { width: '130px' }
	},
	{
		accessorKey: 'outcome',
		header: 'accounts.betCount'
	}
];
