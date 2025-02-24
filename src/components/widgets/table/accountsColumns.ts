import { renderComponent } from '$src/components/ui/data-table';
import { formatDate } from '$src/utils/functions/formatDate';
import { formatNumber } from '$src/utils/functions/formatNumber';

import InfoIcon from '../stats/BetsTable/InfoIcon.svelte';

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
		cell: ({ row }) => {
			const date = new Date(row.original.registrationDate);
			return renderComponent(InfoIcon, {
				formattedValue: formatDate(date),
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
		cell: ({ row }) => {
			if (!row.original.betAddedLastDate) return '';
			const date = new Date(row.original.betAddedLastDate);
			return renderComponent(InfoIcon, {
				formattedValue: formatDate(date),
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
		accessorKey: 'betsCount',
		header: ({ column }) =>
			renderComponent(SortableHeader, {
				title: 'accounts.betCount',
				onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				isSorted: column.getIsSorted()
			})
	}
];
