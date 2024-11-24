<script lang="ts">
import { filterStore } from '$src/stores/filterStore';
import { createDate, formatDateRange } from '$src/utils/date/dateUtils';
import { handleDateSelection } from '$src/utils/functions/handleDateSelection';

import CalendarButton from './CalendarButton.svelte';
import CalendarDropdown from './CalendarDropdown.svelte';

let currentDate = new Date();
let selectedDates: Date[] = [];
let showCalendar = false;

$: selectedDates = $filterStore.dateRange.startDate && $filterStore.dateRange.endDate
    ? [
        createDate($filterStore.dateRange.startDate),
        createDate($filterStore.dateRange.endDate)
    ]
    : [];

$: selectedDateRange = selectedDates.length === 2
    ? formatDateRange(selectedDates[0], selectedDates[1])
    : 'Период';

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
        {selectedDateRange}
        {showCalendar}
        onToggle={toggleCalendar} />

    {#if showCalendar}
        <CalendarDropdown
            {currentDate}
            {selectedDates}
            onDateSelect={onDateSelect} />
    {/if}
</div>

<style>
.calendar-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
}
</style>
