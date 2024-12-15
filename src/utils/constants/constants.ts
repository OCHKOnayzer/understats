export const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] as const;

export const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

export const TIME_RANGES = [
	{ value: 'halfYear', label: 'Полгода' },
	{ value: '3months', label: '3 мес' },
	{ value: 'month', label: 'Месяц' },
	{ value: 'week', label: 'Неделя' },
	{ value: '3days', label: '3 дня' }
] as const;

export const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30, 50];
