<script lang="ts">
import Icon from '@iconify/svelte';

import { MONTHS } from '$src/utils/constants/constants';

interface Props {
	currentDate: Date;
	nextMonthDate: Date;
	onPrevMonth: () => void;
	onNextMonth: () => void;
}

let { currentDate, nextMonthDate, onPrevMonth, onNextMonth }: Props = $props();
</script>

<div class="mb-4 flex items-center justify-between">
	<button
		class="flex h-6 w-6 items-center justify-center rounded text-white transition-colors hover:bg-white/10"
		on:click="{onPrevMonth}"><Icon icon="oui:arrow-left" /></button>
	<div class="grid flex-1 grid-cols-2 gap-2 px-4">
		<div class="flex justify-end pr-[15px]">
			<span class="font-medium text-white">{MONTHS[currentDate.getMonth()]}, {currentDate.getFullYear()}</span>
		</div>
		<div class="flex justify-start pl-[15px]">
			<span class="font-medium text-white">{MONTHS[nextMonthDate.getMonth()]}, {nextMonthDate.getFullYear()}</span>
		</div>
	</div>
	<button
		class="flex h-6 w-6 items-center justify-center rounded text-white transition-colors hover:bg-white/10"
		on:click="{onNextMonth}"><Icon icon="oui:arrow-right" /></button>
</div>
