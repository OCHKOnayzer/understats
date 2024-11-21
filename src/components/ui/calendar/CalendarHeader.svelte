<script lang="ts">
import { MONTHS } from '$src/utils/constants/constants';
  export let currentDate: Date;
  export let nextMonthDate: Date;
  export let onPrevMonth: () => void;
  export let onNextMonth: () => void;

  $: displayMonths = `${MONTHS[currentDate.getMonth()]}, ${currentDate.getFullYear()}    ${
    MONTHS[nextMonthDate.getMonth()]}, ${nextMonthDate.getFullYear()}`;
</script>

<div class="calendar-header">
  <button class="nav-button" on:click={onPrevMonth}>←</button>
  <span class="current-month">{displayMonths}</span>
  <button class="nav-button" on:click={onNextMonth}>→</button>
</div>

<style>
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
</style>