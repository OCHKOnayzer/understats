<script lang="ts">
import { DateUtils } from '$src/utils/utils';
import { createEventDispatcher } from 'svelte';

import { filterStore } from '$src/stores/filterStore';
import { MONTHS } from '$src/utils/constants/constants';

import CalendarHeader from './CalendarHeader.svelte';
import CalendarMonth from './CalendarMonth.svelte';

const dispatch = createEventDispatcher<{
	select: { startDate: string; endDate: string };
}>();

let currentDate = new Date();
let selectedDates: Date[] = [];
let showCalendar = false;

$: if ($filterStore.dateRange.startDate && $filterStore.dateRange.endDate) {
	selectedDates = [
		new Date($filterStore.dateRange.startDate + 'T00:00:00'),
		new Date($filterStore.dateRange.endDate + 'T00:00:00')
	];
}

$: nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

$: selectedDateRange = selectedDates.length === 2
	? selectedDates[0].getTime() === selectedDates[1].getTime()
		? `${selectedDates[0].getDate()} ${MONTHS[selectedDates[0].getMonth()]}`
		: `${selectedDates[0].getDate()} ${MONTHS[selectedDates[0].getMonth()]} - ${selectedDates[1].getDate()} ${MONTHS[selectedDates[1].getMonth()]}`
	: 'Период';

function handleDateSelection(date: Date) {
	const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	if (selectedDates.length === 0) {
		selectedDates = [newDate];
		return;
	}

	if (selectedDates.length === 1) {
		const firstDate = new Date(selectedDates[0].getFullYear(), selectedDates[0].getMonth(), selectedDates[0].getDate());
		selectedDates = newDate < firstDate ? [newDate, firstDate] : [firstDate, newDate];

		const startDate = DateUtils.formatDate(selectedDates[0]);
		const endDate = DateUtils.formatDate(selectedDates[1]);

		dispatch('select', { startDate, endDate });
		filterStore.setDateRange(startDate, endDate);
		showCalendar = false;
		return;
	}

	selectedDates = [newDate];
}
</script>

<div class="calendar-wrapper">
	<button
		class="period-button"
		class:active="{showCalendar}"
		on:click="{() => (showCalendar = !showCalendar)}">
		<span>{selectedDateRange}</span>
		<span
			class="arrow"
			class:open="{showCalendar}">▼</span>
	</button>

	{#if showCalendar}
		<div class="calendar">
			<CalendarHeader
				currentDate="{currentDate}"
				nextMonthDate="{nextMonthDate}"
				onPrevMonth="{() => (currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}"
				onNextMonth="{() => (currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}" />

			<div class="calendars-container">
				<CalendarMonth
					currentDate="{currentDate}"
					selectedDates="{selectedDates}"
					onDateSelect="{handleDateSelection}" />
				<CalendarMonth
					currentDate="{nextMonthDate}"
					selectedDates="{selectedDates}"
					onDateSelect="{handleDateSelection}" />
			</div>
		</div>
	{/if}
</div>

<style>
.calendar-wrapper {
	position: relative;
	width: 100%;
	margin-bottom: 16px;
}

.period-button {
	width: 100%;
	padding: 12px;
	background: #363a45;
	border: none;
	border-radius: 12px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	font-size: 16px;
	transition: background 0.2s ease-in-out;
}

.period-button.active {
	border-radius: 12px 12px 0 0;
}

.arrow {
	font-size: 12px;
	transition: transform 0.2s ease;
}

.arrow.open {
	transform: rotate(180deg);
}

.calendar {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: #363a45;
	border-radius: 0 0 12px 12px;
	padding: 16px;
	z-index: 10;
}

.calendars-container {
	display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
