import { filterStore } from '$src/stores/filterStore';
import { DateUtils } from '$src/utils/utils';

type FilterStore = typeof filterStore;

interface DateSelectionResult {
	selectedDates: Date[];
	shouldCloseCalendar: boolean;
}

export function handleDateSelection(date: Date, currentSelectedDates: Date[], store: FilterStore): DateSelectionResult {
	const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	if (currentSelectedDates.length === 0) {
		return {
			selectedDates: [newDate],
			shouldCloseCalendar: false
		};
	}

	if (currentSelectedDates.length === 1) {
		const firstDate = currentSelectedDates[0];
		const [startDate, endDate] = newDate < firstDate ? [newDate, firstDate] : [firstDate, newDate];

		store.setDateRange(DateUtils.formatDate(startDate), DateUtils.formatDate(endDate));

		return {
			selectedDates: [startDate, endDate],
			shouldCloseCalendar: true
		};
	}

	return {
		selectedDates: [newDate],
		shouldCloseCalendar: false
	};
}
