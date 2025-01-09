<script lang="ts">
import { type CalendarDay } from '$types/types';
interface Props {
	day: CalendarDay;
	selected: boolean;
	inRange: boolean;
	onSelect: (day: Date) => void;
}

let { day, selected, inRange, onSelect }: Props = $props();
</script>

{#if day}
	<button
		class="day"
		class:selected="{selected}"
		class:in-range="{inRange}"
		onclick="{() => onSelect(day)}">
		{day.getDate()}
	</button>
{:else}
	<div class="day empty"></div>
{/if}

<style>
.day {
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 8px;
	font-size: 14px;
	padding: 4px;
	transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.day:hover:not(.empty):not(.selected) {
	background-color: rgba(255, 255, 255, 0.1);
	transform: scale(1.1);
}

.day.selected {
	background-color: #718096;
	color: white;
	font-weight: 500;
	transform: scale(1.1);
}

.day.in-range {
	background-color: rgba(113, 128, 150, 0.3);
	color: white;
}

.day.empty {
	pointer-events: none;
	background: none;
}
</style>
