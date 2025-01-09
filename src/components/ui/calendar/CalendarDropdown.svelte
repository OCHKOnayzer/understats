<script lang="ts">
import { getNextMonthDate, getPrevMonthDate } from '$src/utils/date/dateUtils';

import CalendarHeader from './CalendarHeader.svelte';
import CalendarMonth from './CalendarMonth.svelte';

interface Props {
	currentDate: Date;
	selectedDates: Date[];
	onDateSelect: (date: Date) => void;
}

let { currentDate, selectedDates, onDateSelect }: Props = $props();

const nextMonthDate = $derived(getNextMonthDate(currentDate));

const handlePrevMonth = () => {
	currentDate = getPrevMonthDate(currentDate);
};

const handleNextMonth = () => {
	currentDate = getNextMonthDate(currentDate);
};
</script>

<div class="relative">
	<div class="w-full rounded-lg bg-[#363a45] p-4 shadow-lg shadow-black/10">
		<CalendarHeader
			currentDate="{currentDate}"
			nextMonthDate="{nextMonthDate}"
			onPrevMonth="{handlePrevMonth}"
			onNextMonth="{handleNextMonth}" />

		<div class="flex gap-6">
			<CalendarMonth
				currentDate="{currentDate}"
				selectedDates="{selectedDates}"
				onDateSelect="{onDateSelect}" />
			<CalendarMonth
				currentDate="{nextMonthDate}"
				selectedDates="{selectedDates}"
				onDateSelect="{onDateSelect}" />
		</div>
	</div>
</div>
