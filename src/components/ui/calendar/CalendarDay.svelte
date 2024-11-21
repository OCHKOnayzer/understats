<script lang="ts">
	import { type CalendarDay } from '$types/types';

  export let day: CalendarDay;
  export let selected: boolean;
  export let inRange: boolean;
  export let onSelect: (day: Date) => void;
</script>

{#if day}
  <button
    class="day"
    class:selected
    class:in-range={inRange}
    on:click={() => onSelect(day as Date)}
  >
    {day.getDate()}
  </button>
{:else}
  <div class="day empty" />
{/if}

<style>
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

  .day.selected,
  .day.in-range {
    background: #718096;
    color: #000000;
  }

  .day.empty {
    pointer-events: none;
  }
</style>