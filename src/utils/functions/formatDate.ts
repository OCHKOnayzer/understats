import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

export function formatDate(date: string | Date): string {
	const now = new Date();
	const targetDate = new Date(date);

	// Проверяем корректность даты
	if (isNaN(targetDate.getTime())) {
		return '';
	}

	const isToday = targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear();

	const isYesterday = targetDate.getDate() === now.getDate() - 1 && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear();

	const timeStr = targetDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

	if (isToday) {
		return get(t)('time.today_at', { values: { time: timeStr } });
	}
	if (isYesterday) {
		return get(t)('time.yesterday_at', { values: { time: timeStr } });
	}

	// Проверяем, прошел ли год
	const yearDiff = now.getFullYear() - targetDate.getFullYear();
	if (yearDiff > 0) {
		return get(t)('time.year_ago', { values: { count: yearDiff } });
	}

	// Для остальных дат показываем дату в формате "21 февраля"
	return targetDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long' });
}

export function formatDateWithRecent(date: string | Date, isAccount = false): string {
	const now = new Date();
	const targetDate = new Date(date);

	// Проверяем корректность даты
	if (isNaN(targetDate.getTime())) {
		return '';
	}

	const diffInMinutes = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60));
	const isToday = targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear();
	const isYesterday = targetDate.getDate() === now.getDate() - 1 && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear();

	const timeStr = targetDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

	if (isAccount) {
		if (diffInMinutes < 1) return get(t)('time.just_now');
		if (diffInMinutes === 1) return get(t)('time.minute_ago');
		if (diffInMinutes < 40) {
			const minuteForm = getMinutesForm(diffInMinutes);
			return get(t)('time.minutes_ago', {
				values: {
					count: diffInMinutes,
					minutes: get(t)(`time.minute.${minuteForm}`)
				}
			});
		}
	} else {
		if (diffInMinutes < 1) return get(t)('time.just_now');
		if (diffInMinutes === 1) return get(t)('time.minute_ago');
		if (diffInMinutes < 5) {
			const minuteForm = getMinutesForm(diffInMinutes);
			return get(t)('time.minutes_ago', {
				values: {
					count: diffInMinutes,
					minutes: get(t)(`time.minute.${minuteForm}`)
				}
			});
		}
	}

	if (isToday) {
		return get(t)('time.today_at', { values: { time: timeStr } });
	}
	if (isYesterday) {
		return get(t)('time.yesterday_at', { values: { time: timeStr } });
	}

	// Проверяем, прошел ли год
	const yearDiff = now.getFullYear() - targetDate.getFullYear();
	if (yearDiff > 0) {
		return get(t)('time.year_ago', { values: { count: yearDiff } });
	}

	// Для остальных дат показываем дату в формате "21 февраля"
	return targetDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long' });
}

function getMinutesForm(minutes: number): 'one' | 'few' | 'many' {
	if (minutes >= 11 && minutes <= 14) return 'many';

	const lastDigit = minutes % 10;
	if (lastDigit === 1) return 'one';
	if (lastDigit >= 2 && lastDigit <= 4) return 'few';
	return 'many';
}
