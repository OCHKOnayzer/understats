import { type ClassValue, clsx } from 'clsx';
import { cubicOut } from 'svelte/easing';
import { twMerge } from 'tailwind-merge';

import type { CalendarDay, FilterOption, OptionWithChoices } from '$types/types';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = {
		y: -8,
		x: 0,
		start: 0.95,
		duration: 150
	}
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style2: Record<string, number | string | undefined>): string => {
		return Object.keys(style2).reduce((str, key) => {
			if (style2[key] === undefined) return str;
			return str + `${key}:${style2[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export function hasOptions(filter: FilterOption): filter is OptionWithChoices {
	return 'options' in filter && Array.isArray(filter.options) && filter.options.length > 0;
}

export const formatDate = (date: Date): string => {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
};

export class DateUtils {
	static formatDate(date: Date): string {
		return date.toISOString().split('T')[0];
	}

	static getDaysInMonth(year: number, month: number): number {
		return new Date(year, month + 1, 0).getDate();
	}

	static getFirstDayOfMonth(year: number, month: number): number {
		const day = new Date(year, month, 1).getDay();
		return day === 0 ? 6 : day - 1;
	}

	static generateCalendarDays(year: number, month: number): CalendarDay[] {
		const daysInMonth = this.getDaysInMonth(year, month);
		const firstDay = this.getFirstDayOfMonth(year, month);

		return [
			...Array(firstDay).fill(null),
			...Array(daysInMonth)
				.fill(0)
				.map((_, i) => new Date(year, month, i + 1))
		];
	}

	static isDateSelected(date: CalendarDay, selectedDates: Date[]): boolean {
		if (!date || !selectedDates.length) return false;

		const time = date.getTime();
		return selectedDates.length === 1 ? time === selectedDates[0].getTime() : time >= selectedDates[0].getTime() && time <= selectedDates[1].getTime();
	}

	static isDateInRange(date: CalendarDay, selectedDates: Date[]): boolean {
		if (!date || selectedDates.length !== 2) return false;

		const time = date.getTime();
		return time > selectedDates[0].getTime() && time < selectedDates[1].getTime();
	}
}
