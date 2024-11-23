<script lang="ts">
    import { getNextMonthDate, getPrevMonthDate } from '$src/utils/date/dateUtils';
    import CalendarHeader from './CalendarHeader.svelte';
    import CalendarMonth from './CalendarMonth.svelte';

    export let currentDate: Date;
    export let selectedDates: Date[];
    export let onDateSelect: (date: Date) => void;

    $: nextMonthDate = getNextMonthDate(currentDate);

    function handlePrevMonth() {
        currentDate = getPrevMonthDate(currentDate);
    }

    function handleNextMonth() {
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
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 100%;
        background: #363a45;
        border-radius: 8px;
        padding: 16px;
        z-index: 10;
    }

    .calendars-container {
        display: flex;
        gap: 24px;
    }
</style>
