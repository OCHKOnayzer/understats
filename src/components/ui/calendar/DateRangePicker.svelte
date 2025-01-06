<script lang="ts">
import { scale } from 'svelte/transition';
import { t } from 'svelte-i18n';

import { createDate, formatDateRange } from '$src/utils/date/dateUtils';
import { handleDateSelection } from '$src/utils/functions/handleDateSelection';
import { filterStore } from '$stores/filterStore';

import CalendarButton from './CalendarButton.svelte';
import CalendarDropdown from './CalendarDropdown.svelte';

let currentDate = new Date();
let showCalendar = $state(false);
let selectedDates = $state<Date[]>([]);
let selectedDateRange = $state($t('calendar.period'));

$effect(() => {
	if ($filterStore.dateRange.startDate && $filterStore.dateRange.endDate) {
		selectedDates = [createDate($filterStore.dateRange.startDate), createDate($filterStore.dateRange.endDate)];
	} else {
		selectedDates = [];
	}
});

$effect(() => {
	selectedDateRange = selectedDates.length === 2 ? formatDateRange(selectedDates[0], selectedDates[1]) : $t('calendar.period');
});

function onDateSelect(date: Date) {
	const result = handleDateSelection(date, selectedDates, filterStore);
	selectedDates = result.selectedDates;
	showCalendar = !result.shouldCloseCalendar;
}

function toggleCalendar() {
	showCalendar = !showCalendar;
}
</script>

<div class="calendar-wrapper">
	<CalendarButton
		selectedDateRange="{selectedDateRange}"
		showCalendar="{showCalendar}"
		onToggle="{toggleCalendar}" />

	{#if showCalendar}
		<div
			class="dropdown-container"
			transition:scale="{{
				duration: 200,
				start: 0.95,
				opacity: 0
			}}">
			<CalendarDropdown
				currentDate="{currentDate}"
				selectedDates="{selectedDates}"
				onDateSelect="{onDateSelect}" />
		</div>
	{/if}
</div>

<style>
.calendar-wrapper {
	position: relative;
	width: 100%;
	margin-bottom: 16px;
}

.dropdown-container {
	position: absolute;
	top: calc(100% + 8px);
	left: 0;
	width: 100%;
	z-index: 10;
}
</style>
