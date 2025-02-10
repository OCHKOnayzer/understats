import type { ColumnDef } from '@tanstack/table-core'

interface LocalizedString {
	default: string;
	ru: string;
	en: string;
	es: string;
	pt: string;
	de: string;
	fr: string;
	it: string;
}

interface BetEvent {
	id: string;
	sport: string;
	competitionName: LocalizedString;
	name1: LocalizedString;
	name2: LocalizedString;
	startTime: string;
}

export interface BetLeg {
	rate: number;
	outcome: LocalizedString;
	status: string;
	type: string;
	event: BetEvent;
	dates: {
		placed: string;
		settled: string;
	};
	meta: {
		ordinal: number;
	};
	isLive: boolean;
}

export interface Bet {
	siteName: string;
	accountClientSeq?: number;
	clientSeq: string;
	rate: number;
	status: string;
	type?: 'Express' | string;
	amounts: {
		stake: number | string;
		win: number | string;
	};
	event: Partial<BetEvent>;
	dates: {
		placed: string;
		settled?: string;
	};
	meta: {
		ordinal: number;
	};
	legs?: BetLeg[];
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
				const date = new Date(row.original.dates.placed);
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
		accessorKey: 'event',
		header: 'columns.bet.event',
		cell: ({ row }) => {
			const bet = row.original;
			if (bet.type === 'Express') {
				return `${bet.legs?.length || 0} событий`;
			}
			const event = bet.event;
			return event.name1 && event.name2 ? `${event.name1} - ${event.name2}` : 'Нет данных';
		}
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
