import { MONTHS } from '$src/utils/constants/constants';

export function createDate(dateStr: string): Date {
	const date = new Date(dateStr + 'T00:00:00');
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function formatSelectedDate(date: Date): string {
	return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

export function formatDateRange(startDate: Date, endDate: Date): string {
	return startDate.getTime() === endDate.getTime() ? formatSelectedDate(startDate) : `${formatSelectedDate(startDate)} - ${formatSelectedDate(endDate)}`;
}

export function getNextMonthDate(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth() + 1);
}

export function getPrevMonthDate(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth() - 1);
}
