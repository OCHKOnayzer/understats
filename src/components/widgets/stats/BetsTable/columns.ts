import type { ColumnDef } from '@tanstack/table-core';

export interface Bet {
	id: string;
	sport: string;
	competition: string;
	stake: number;
	win: number;
	bookmakerId: string;
	placed: string;
	settled: string;
	status: string;
}

export const columns: ColumnDef<Bet>[] = [
	{
		accessorKey: 'sport',
		header: 'Спорт'
	},
	{
		accessorKey: 'competition',
		header: 'Соревнование'
	},
	{
		accessorKey: 'stake',
		header: 'Ставка',
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('stake'));
			return new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB'
			}).format(amount);
		}
	},
	{
		accessorKey: 'win',
		header: 'Выигрыш',
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('win'));
			return new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB'
			}).format(amount);
		}
	},
	{
		accessorKey: 'bookmakerId',
		header: 'Букмекер'
	},
	{
		accessorKey: 'placed',
		header: 'Дата ставки'
	},
	{
		accessorKey: 'settled',
		header: 'Дата расчета'
	},
	{
		accessorKey: 'status',
		header: 'Статус'
	}
];
