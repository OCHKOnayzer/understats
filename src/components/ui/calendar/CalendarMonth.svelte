<script lang="ts">
import { DateUtils } from '$src/utils/utils';
import { WEEK_DAYS } from '$src/utils/constants/constants';

import CalendarDay from './CalendarDay.svelte';

interface Props {
	currentDate: Date;
	selectedDates: Date[];
	onDateSelect: (date: Date) => void;
}

let { currentDate, selectedDates, onDateSelect }: Props = $props();

const days = $derived(DateUtils.generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth()));
</script>

<div class="month-calendar">
	<div class="weekdays">
		{#each WEEK_DAYS as day}
			<div class="weekday">{day}</div>
		{/each}
	</div>

	<div class="days">
		{#each days as day}
			<CalendarDay
				day="{day}"
				selected="{DateUtils.isDateSelected(day, selectedDates)}"
				inRange="{DateUtils.isDateInRange(day, selectedDates)}"
				onSelect="{onDateSelect}" />
		{/each}
	</div>
</div>

<style>
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
</style>
