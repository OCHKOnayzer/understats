<script lang="ts">
import { WEEK_DAYS } from '$src/utils/constants/constants';
import { DateUtils } from '$src/utils/utils';

import CalendarDay from './CalendarDay.svelte';

interface Props {
	currentDate: Date;
	selectedDates: Date[];
	onDateSelect: (date: Date) => void;
}

let { currentDate, selectedDates, onDateSelect }: Props = $props();

const days = $derived(DateUtils.generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth()));
</script>

<div class="w-full">
	<div class="grid grid-cols-7 gap-1 items-left mb-2">
		{#each WEEK_DAYS as day}
			<div class="text-center text-sm text-white/50 p-1">{day}</div>
		{/each}
	</div>

	<div class="grid grid-cols-7 gap-1 text-left">
		{#each days as day}
			<CalendarDay
				day="{day}"
				selected="{DateUtils.isDateSelected(day, selectedDates)}"
				inRange="{DateUtils.isDateInRange(day, selectedDates)}"
				onSelect="{onDateSelect}" />
		{/each}
	</div>
</div>