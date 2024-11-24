<script lang="ts">
	import { getNextMonthDate, getPrevMonthDate } from '$src/utils/date/dateUtils';
	import CalendarHeader from './CalendarHeader.svelte';
	import CalendarMonth from './CalendarMonth.svelte';

    interface Props {
        currentDate: Date;
        selectedDates: Date[];
        onDateSelect: (date: Date) => void;
    }

    let {currentDate, selectedDates, onDateSelect}: Props = $props();

    const nextMonthDate = $derived(getNextMonthDate(currentDate));

    const handlePrevMonth = () => {
        currentDate = getPrevMonthDate(currentDate);
    }

    const handleNextMonth = () => {
        currentDate = getNextMonthDate(currentDate);
    }
</script>

<div class="calendar">
    <CalendarHeader
        {currentDate}
        {nextMonthDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth} />

    <div class="calendars-container">
        <CalendarMonth
            {currentDate}
            {selectedDates}
            onDateSelect={onDateSelect} />
        <CalendarMonth
            currentDate={nextMonthDate}
            {selectedDates}
            onDateSelect={onDateSelect} />
    </div>
</div>

<style>
    .calendar {
        width: 100%;
        background: #363a45;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .calendars-container {
        display: flex;
        gap: 24px;
    }
</style>
