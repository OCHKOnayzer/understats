<script lang="ts">
import { createEventDispatcher } from 'svelte';

import { filterStore } from '$src/stores/filterStore';

const dispatch = createEventDispatcher<{
	select: { startDate: string; endDate: string };
}>();

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

let currentDate = new Date();
let selectedDates: Date[] = [];
let showCalendar = false;

function formatDate(date: Date): string {
	return date.toISOString().split('T')[0];
}

function getDaysInMonth(year: number, month: number): number {
	return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
	const day = new Date(year, month, 1).getDay();
	return day === 0 ? 6 : day - 1;
}

function generateCalendarDays(year: number, month: number) {
	const daysInMonth = getDaysInMonth(year, month);
	const firstDay = getFirstDayOfMonth(year, month);
	const days = [];

	for (let i = 0; i < firstDay; i++) {
		days.push(null);
	}

	for (let i = 1; i <= daysInMonth; i++) {
		days.push(new Date(year, month, i));
	}

	return days;
}

function prevMonth() {
	currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
}

function nextMonth() {
	currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
}

function toggleDate(date: Date) {
	if (!date) return;

	const clickedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	if (selectedDates.length === 0) {
		selectedDates = [clickedDate];
	} else if (selectedDates.length === 1) {
		const firstDate = selectedDates[0];
		if (clickedDate < firstDate) {
			selectedDates = [clickedDate, firstDate];
		} else {
			selectedDates = [firstDate, clickedDate];
		}

		filterStore.setDateRange(formatDate(selectedDates[0]), formatDate(selectedDates[1]));

		showCalendar = false;
	} else {
		selectedDates = [clickedDate];
	}
}

function isDateSelected(date: Date): boolean {
	if (!date || selectedDates.length === 0) return false;

	const time = date.getTime();
	if (selectedDates.length === 1) {
		return time === selectedDates[0].getTime();
	}

	return time >= selectedDates[0].getTime() && time <= selectedDates[1].getTime();
}

function isDateInRange(date: Date): boolean {
	if (!date || selectedDates.length !== 2) return false;

	const time = date.getTime();
	return time > selectedDates[0].getTime() && time < selectedDates[1].getTime();
}

$: calendarDays = generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth());

$: nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

$: displayMonths = `${months[currentDate.getMonth()]}, ${currentDate.getFullYear()}    ${months[nextMonthDate.getMonth()]}, ${nextMonthDate.getFullYear()}`;

$: nextMonthDays = generateCalendarDays(nextMonthDate.getFullYear(), nextMonthDate.getMonth());

$: selectedDateRange =
	selectedDates.length === 2
		? `${selectedDates[0].getDate()} ${months[selectedDates[0].getMonth()]} - ${selectedDates[1].getDate()} ${months[selectedDates[1].getMonth()]}`
		: 'Период';
</script>

<div class="calendar-wrapper">
	<button
		class="period-button"
		class:active={showCalendar}
		on:click={() => (showCalendar = !showCalendar)}>
		<span>{selectedDateRange}</span>
		<span
			class="arrow"
			class:open={showCalendar}>▼</span>
	</button>

	{#if showCalendar}
		<div class="calendar">
			<div class="calendar-header">
				<button
					class="nav-button"
					on:click={prevMonth}>←</button>
				<span class="current-month">{displayMonths}</span>
				<button
					class="nav-button"
					on:click={nextMonth}>→</button>
			</div>

			<div class="calendars-container">
				<div class="month-calendar">
					<div class="weekdays">
						{#each weekDays as day}
							<div class="weekday">{day}</div>
						{/each}
					</div>

					<div class="days">
						{#each calendarDays as day}
							{#if day}
								<button
									class="day"
									class:selected={isDateSelected(day)}
									class:in-range={isDateInRange(day)}
									on:click={() => toggleDate(day)}>
									{day.getDate()}
								</button>
							{:else}
								<div class="day empty" />
							{/if}
						{/each}
					</div>
				</div>

				<div class="month-calendar">
					<div class="weekdays">
						{#each weekDays as day}
							<div class="weekday">{day}</div>
						{/each}
					</div>

					<div class="days">
						{#each nextMonthDays as day}
							{#if day}
								<button
									class="day"
									class:selected={isDateSelected(day)}
									class:in-range={isDateInRange(day)}
									on:click={() => toggleDate(day)}>
									{day.getDate()}
								</button>
							{:else}
								<div class="day empty" />
							{/if}
						{/each}
					</div>
				</div>
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
	transition: all 0.2s ease-in-out;
}

.period-button.active {
	background: #363a45;
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

.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
	padding: 0 16px;
}

.nav-button {
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	padding: 8px;
	font-size: 20px;
}

.current-month {
	font-size: 16px;
	font-weight: 500;
	color: white;
}

.calendars-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
}

.month-calendar {
	width: 100%;
}

.weekdays {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 4px;
	margin-bottom: 8px;
}

.weekday {
	text-align: center;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.5);
	padding: 4px;
}

.days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 4px;
}

.day {
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 8px;
	font-size: 14px;
	padding: 8px;
}

.day:hover:not(.empty):not(.selected) {
	background: rgba(255, 255, 255, 0.1);
}

.day.selected {
	background: #718096;
	color: #000000;
}

.day.in-range {
	background: #718096;
	color: #000000;
}

.day.empty {
	pointer-events: none;
}
</style>
