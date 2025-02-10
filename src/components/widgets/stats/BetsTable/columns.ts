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

export const getColumns = (t: (key: string, params?: Record<string, any>) => string): ColumnDef<Bet>[] => [
	{
		accessorKey: 'dates.placed',
		header: t('columns.bet.time'),
		meta: { textAlign: 'left' } as BetColumnMeta,
		cell: ({ row }) => {
			try {
				const date = new Date(row.original.dates.placed);
				return date.toLocaleString('ru-RU');
			} catch (e) {
				console.error('Error formatting date:', e);
				return t('other.invalid_date');
			}
		}
	},
	{
		accessorKey: 'siteName',
		header: t('columns.bet.bookmaker'),
		meta: { textAlign: 'left' } as BetColumnMeta
	},
	{
		accessorKey: 'event.sport',
		header: t('columns.bet.sport')
	},
	{
		accessorKey: 'event',
		header: t('columns.bet.event'),
		cell: ({ row }) => {
			const bet = row.original;
			if (bet.type === 'Express') {
				const count = bet.legs?.length || 0;
				return `${count} ${t('stats.event')}`;
			}
			const event = bet.event;
			return event.name1 && event.name2 ? `${event.name1} - ${event.name2}` : t('other.no_data');
		}
	},
	{
		accessorKey: 'amounts.stake',
		header: t('columns.bet.ammount'),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'rate',
		header: t('columns.bet.ratio'),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'amounts.win',
		header: t('columns.bet.win'),
		meta: { textAlign: 'right' } as BetColumnMeta
	},
	{
		accessorKey: 'status',
		header: t('columns.bet.status')
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
