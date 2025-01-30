import type { ColumnDef } from '@tanstack/table-core';

export interface Bet {
	siteName: string;
	userId: string;
	accountId: string;
	clientSeq: string;
	rate: number;
	outcome: string;
	status: string;
	amounts: number;
	event: string;
	date: string;
	meta: string;
	betId: string;
	sport: string;
	amount: number;
	coefficient: number;
	result: string;
}

type BetColumnMeta = {
	textAlign?: 'left' | 'right';
};

type BetColumnDef = ColumnDef<Bet, unknown> & {
	meta?: BetColumnMeta;
};

export const columns: ColumnDef<Bet>[] = [
	{
		accessorKey: 'dates.placed',
		header: 'columns.bet.time',
		meta: { textAlign: 'left' } as BetColumnMeta,
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
		accessorKey: 'siteName',
		header: 'columns.bet.bookmaker',
		meta: { textAlign: 'left' } as BetColumnMeta
	},
	{
		accessorKey: 'event.sport',
		header: 'columns.bet.sport'
	},
	{
		accessorKey: 'event.competitionName.default',
		header: 'columns.bet.event'
	},
	{
		accessorKey: 'amounts.stake',
		header: 'columns.bet.ammount',
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'rate',
		header: 'columns.bet.ratio',
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'amounts.win',
		header: 'columns.bet.win',
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'status',
		header: 'columns.bet.status'
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
