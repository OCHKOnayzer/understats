import type { ColumnDef } from '@tanstack/table-core';

export interface IAccountResponse {
	balance: string;
	betsCount: number;
	clientSeq: number;
	currency: string;
	email: string;
	extendedId: string;
	fullName: string;
	login: string;
	phone: string;
	registrationDate: string;
	siteName: string;
}

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
		}
	},
	{
		accessorKey: 'clientSeq',
		header: 'accounts.id'
	},
	{
		accessorKey: 'login',
		header: 'accounts.name'
	},
	{
		accessorKey: 'balance',
		header: 'accounts.balance'
	},
	{
		accessorKey: 'fullName',
		header: 'accounts.fullName'
	},
	{
		accessorKey: 'email',
		header: 'accounts.email'
	},
	{
		accessorKey: 'phone',
		header: 'accounts.phone'
	},
	{
		accessorKey: 'registrationDate',
		header: 'accounts.registrationDate'
	},
	{
		accessorKey: 'lastBet',
		header: 'accounts.lastBet'
	},
	{
		accessorKey: 'outcome',
		header: 'accounts.betCount'
	}
];
