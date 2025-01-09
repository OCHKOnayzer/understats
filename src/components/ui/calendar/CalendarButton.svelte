<script lang="ts">
import Icon from '@iconify/svelte';

import { cn } from '$src/utils/utils';

interface Props {
	selectedDateRange: string;
	showCalendar: boolean;
	onToggle: () => void;
}

let { selectedDateRange, showCalendar, onToggle }: Props = $props();

let isOpen = $state(false);

$effect(() => {
	isOpen = showCalendar;
});
</script>

<button
	class="{cn(
		'flex w-full cursor-pointer items-center justify-between rounded-lg border border-transparent bg-[#363a45] px-3 py-3 text-white transition-all duration-200 hover:bg-[#4a4f5c]',
		isOpen && 'border-[#6366f1] bg-[#4a4f5c]'
	)}"
	on:click="{onToggle}">
	<span class="flex items-center gap-2">
		<Icon
			icon="uil:calendar-alt"
			class="h-4 w-4" />
		<span>{selectedDateRange}</span>
	</span>
	<span class="{cn('text-xs transition-transform duration-200', isOpen ? 'rotate-0' : 'rotate-180')}">
		<Icon
			icon="solar:alt-arrow-up-line-duotone"
			class="text-2xl" />
	</span>
</button>
