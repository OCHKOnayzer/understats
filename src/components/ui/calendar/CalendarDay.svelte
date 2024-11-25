<script lang="ts">
import type { CalendarDay } from '$src/types/types';


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
		class="aspect-square flex items-center justify-center bg-transparent border-none text-white cursor-pointer rounded-lg text-sm p-1 transition-all hover:bg-white/10 hover:scale-110 {selected ? 'bg-[#718096] text-white font-medium scale-110' : ''} {inRange ? 'bg-[#718096]/30 text-white' : ''}"
		on:click="{() => onSelect(day)}">
		{day.getDate()}
	</button>
{:else}
	<div class="aspect-square pointer-events-none bg-transparent"></div>
{/if}