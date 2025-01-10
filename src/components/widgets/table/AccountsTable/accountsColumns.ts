// import type { ColumnDef } from '@tanstack/table-core'

// export interface Bet {
// 	siteName: string;
// 	userId: string;
// 	accountId: string;
// 	clientSeq: number;
// 	rate: string;
// 	outcome: string;
// 	status: string;
// 	amounts: {
// 		stake: string;
// 		win: string;
// 	};
// 	event: {
// 		id: string;
// 		sport: string;
// 		competitionName: string;
// 		name1: string;
// 		name2: string;
// 		startTime: Record<string, any>;
// 	};
// 	dates: {
// 		placed: Record<string, any>;
// 		settled: Record<string, any>;
// 	};
// 	meta: {
// 		ordinal: number;
// 	};
// }

// export const columns: ColumnDef<Bet>[] = [
// 	{
// 		accessorKey: 'dates.placed',
// 		header: 'column.bet.time',
// 		cell: ({ row }) => {
// 			try {
// 				const date = new Date();
// 				return date.toLocaleString('ru-RU');
// 			} catch (e) {
// 				console.error('Error formatting date:', e);
// 				return 'Invalid date';
// 			}
// 		}
// 	},
// 	{
// 		accessorKey: 'siteName',
// 		header: 'columns.bet.bookmaker'
// 	},
// 	{
// 		accessorKey: 'event.sport',
// 		header: 'columns.bet.sport'
// 	},
// 	{
// 		accessorKey: 'event.competitionName',
// 		header: 'columns.bet.event',
// 		cell: ({ row }) => {
// 			const event = row.original.event;
// 			if (!event) return 'Нет данных';
// 			return `${event.name1} - ${event.name2}`;
// 		}
// 	},
// 	{
// 		accessorKey: 'amounts.stake',
// 		header: 'columns.bet.amount'
// 	},
// 	{
// 		accessorKey: 'rate',
// 		header: 'columns.bet.coefficient'
// 	},
// 	{
// 		accessorKey: 'amounts.win',
// 		header: 'columns.bet.win'
// 	},
// 	{
// 		accessorKey: 'outcome',
// 		header: 'columns.bet.status'
// 	}
// ];

// function getNestedValue(obj: any, path: string, defaultValue: any = '') {
// 	try {
// 		return path.split('.').reduce((current, key) => current[key], obj) ?? defaultValue;
// 	} catch (e) {
// 		console.error(`Error accessing path ${path}:`, e);
// 		return defaultValue;
// 	}
// }
