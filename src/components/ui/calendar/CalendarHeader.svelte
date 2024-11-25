<script lang="ts">
import { MONTHS } from '$src/utils/constants/constants';


import Icon from '@iconify/svelte';
interface Props {
	currentDate: Date;
	nextMonthDate: Date;
	onPrevMonth: () => void;
	onNextMonth: () => void;
}

let { currentDate, nextMonthDate, onPrevMonth, onNextMonth }: Props = $props();
</script>

<div class="flex justify-between items-center mb-4">
	<button
		class="flex items-center justify-center w-6 h-6 rounded text-white transition-colors hover:bg-white/10"
		on:click="{onPrevMonth}"><Icon icon="oui:arrow-left" /></button>
	<div class="flex-1 grid grid-cols-2 gap-2 px-4">
		<div class="flex justify-end pr-[15px]">
			<span class="font-medium text-white">{MONTHS[currentDate.getMonth()]}, {currentDate.getFullYear()}</span>
		</div>
		<div class="flex justify-start pl-[15px]">
			<span class="font-medium text-white">{MONTHS[nextMonthDate.getMonth()]}, {nextMonthDate.getFullYear()}</span>
		</div>
	</div>
	<button
		class="flex items-center justify-center w-6 h-6 rounded text-white transition-colors hover:bg-white/10"
		on:click="{onNextMonth}"><Icon icon="oui:arrow-right" /></button>
</div>

