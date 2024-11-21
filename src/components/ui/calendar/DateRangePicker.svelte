<script lang="ts">
  import { filterStore } from '$src/stores/filterStore';
  import { MONTHS } from '$src/utils/constants/constants';
  import { DateUtils } from '$src/utils/utils';
  import { createEventDispatcher } from 'svelte';
  import CalendarHeader from './CalendarHeader.svelte';
  import CalendarMonth from './CalendarMonth.svelte';
 

	const dispatch = createEventDispatcher<{
    select: { startDate: string; endDate: string };
  }>();

  let currentDate = new Date();
  let selectedDates: Date[] = [];
  let showCalendar = false;

  $: nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

  $: selectedDateRange = selectedDates.length === 2
    ? `${selectedDates[0].getDate()} ${MONTHS[selectedDates[0].getMonth()]} - ${
      selectedDates[1].getDate()} ${MONTHS[selectedDates[1].getMonth()]}`
    : 'Период';

		function handleDateSelection(date: Date) {
    if (selectedDates.length === 0) {
      selectedDates = [date];
      return;
    }

    if (selectedDates.length === 1) {
      const [firstDate] = selectedDates;
      selectedDates = date < firstDate 
        ? [date, firstDate] 
        : [firstDate, date];

      const startDate = DateUtils.formatDate(selectedDates[0]);
      const endDate = DateUtils.formatDate(selectedDates[1]);

      dispatch('select', { startDate, endDate });
      filterStore.setDateRange(startDate, endDate);
      showCalendar = false;
      return;
    }

    selectedDates = [date];
  }
</script>

<div class="calendar-wrapper">
  <button
    class="period-button"
    class:active={showCalendar}
    on:click={() => (showCalendar = !showCalendar)}
  >
    <span>{selectedDateRange}</span>
    <span class="arrow" class:open={showCalendar}>▼</span>
  </button>

  {#if showCalendar}
    <div class="calendar">
      <CalendarHeader
        {currentDate}
        {nextMonthDate}
        onPrevMonth={() => currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)}
        onNextMonth={() => currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)}
      />

      <div class="calendars-container">
        <CalendarMonth
          {currentDate}
          {selectedDates}
          onDateSelect={handleDateSelection}
        />
        <CalendarMonth
          currentDate={nextMonthDate}
          {selectedDates}
          onDateSelect={handleDateSelection}
        />
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
</style>