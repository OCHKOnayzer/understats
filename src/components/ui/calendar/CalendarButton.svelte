<script lang="ts">
import { cn } from '$src/utils/utils';
import Icon from '@iconify/svelte';

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
	class={cn(
		"w-full py-3 px-3 bg-[#363a45] border border-transparent rounded-lg text-white flex items-center justify-between cursor-pointer transition-all duration-200 hover:bg-[#4a4f5c]",
		isOpen && "bg-[#4a4f5c] border-[#6366f1]"
	)}
	on:click={onToggle}>
	<span class="flex items-center gap-2">
		<Icon icon="uil:calendar-alt" class="w-4 h-4" />
		<span>{selectedDateRange}</span>
	</span>
	<span 
		class={cn(
			"text-xs transition-transform duration-200",
			isOpen ? "rotate-0" : "rotate-180"
		)}>
		<Icon icon="solar:alt-arrow-up-line-duotone" class="text-2xl" />
	</span>
</button>