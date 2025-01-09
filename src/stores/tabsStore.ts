import { writable } from 'svelte/store';

export const mainTabs = writable([
	{ id: 'no-aggregation', name: 'Без агрегации' },
	{ id: 'by-accounts', name: 'По аккаунтам' },
	{ id: 'by-sport', name: 'По спорту' },
	{ id: 'by-bookmaker', name: 'По букмекеру' },
	{ id: 'by-period', name: 'По периоду' },
	{ id: 'by-weekdays', name: 'По дням недели' }
]);

export const subTabsMap = writable({
	'no-aggregation': [
		{ id: 'all', name: 'Все ставки' },
		{ id: 'win', name: 'Выигрышные' },
		{ id: 'lose', name: 'Проигрышные' },
		{ id: 'pending', name: 'В ожидании' }
	],
	'by-accounts': [
		{ id: 'all', name: 'Все букмекеры' },
		{ id: 'fonbet', name: 'Фонбет' },
		{ id: 'winline', name: 'Winline' },
		{ id: '1xbet', name: '1xBet' },
		{ id: 'betboom', name: 'BetBoom' }
	],
	'by-sport': [
		{ id: 'all', name: 'Все виды спорта' },
		{ id: 'football', name: 'Футбол' },
		{ id: 'hockey', name: 'Хоккей' },
		{ id: 'basketball', name: 'Баскетбол' },
		{ id: 'tennis', name: 'Теннис' }
	],
	'by-bookmaker': [
		{ id: 'all', name: 'Все букмекеры' },
		{ id: 'fonbet', name: 'Фонбет' },
		{ id: 'winline', name: 'Winline' },
		{ id: '1xbet', name: '1xBet' },
		{ id: 'betboom', name: 'BetBoom' }
	],
	'by-period': [
		{ id: 'all', name: 'Весь период' },
		{ id: 'today', name: 'Сегодня' },
		{ id: 'week', name: 'Неделя' },
		{ id: 'month', name: 'Месяц' },
		{ id: 'year', name: 'Год' }
	],
	'by-weekdays': [
		{ id: 'all', name: 'Все дни' },
		{ id: 'weekdays', name: 'Будни' },
		{ id: 'weekend', name: 'Выходные' }
	]
});

export const mockData = writable({
	'no-aggregation': {
		columns: ['Дата', 'Букмекер', 'Спорт', 'Событие', 'Ставка', 'Коэффициент', 'Сумма', 'Результат'],
		data: [
			{
				id: '1',
				Дата: '2024-01-15',
				Букмекер: 'Фонбет',
				Спорт: 'Футбол',
				Событие: 'Спартак - ЦСКА',
				Ставка: 'П1',
				Коэффициент: '1.85',
				Сумма: '1000₽',
				Результат: 'Выигрыш'
			},
			{
				id: '2',
				Дата: '2024-01-16',
				Букмекер: 'Winline',
				Спорт: 'Хоккей',
				Событие: 'СКА - ЦСКА',
				Ставка: 'ТБ 4.5',
				Коэффициент: '2.1',
				Сумма: '2000₽',
				Результат: 'Проигрыш'
			}
		]
	},
	'by-accounts': {
		columns: ['Букмекер', 'Количество ставок', 'Общая сумма', 'Выигрыш', 'ROI'],
		data: [
			{
				id: '1',
				Букмекер: 'Фонбет',
				'Количество ставок': '150',
				'Общая сумма': '150000₽',
				Выигрыш: '+25000₽',
				ROI: '16.7%'
			},
			{
				id: '2',
				Букмекер: 'Winline',
				'Количество ставок': '120',
				'Общая сумма': '100000₽',
				Выигрыш: '-5000₽',
				ROI: '-5%'
			}
		]
	}
});
