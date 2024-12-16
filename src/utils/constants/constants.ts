export const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] as const;

export const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

export const TIME_RANGES = [
	{ value: 'halfYear', label: 'filter.pagination.halfYear' },
	{ value: '3months', label: 'filter.pagination.3month' },
	{ value: 'month', label: 'filter.pagination.month' },
	{ value: 'week', label: 'filter.pagination.week' },
	{ value: '3days', label: 'filter.pagination.3days' }
] as const;

export const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30, 50];
