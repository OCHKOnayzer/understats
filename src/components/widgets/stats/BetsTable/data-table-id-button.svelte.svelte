<script lang="ts">
import Button from '$src/components/ui/button/button.svelte';
import type { ComponentProps } from 'svelte';

type Props = ComponentProps<typeof Button> & {
	column: {
		toggleSorting: (desc?: boolean) => void;
		getIsSorted: () => 'asc' | 'desc' | false;
	};
};

let { variant = 'ghost', column, ...restProps }: Props = $props();
let sortOrder = $derived(column.getIsSorted());

function handleClick() {
	column.toggleSorting(sortOrder === 'asc');
}
</script>

<button
	class="cursor-pointer hover:underline {column.getIsSorted() ? 'font-bold' : ''}"
	onclick="{handleClick}"
	{...restProps}>
	<div class="flex items-center gap-2">
		<span>Id</span>
	</div>
</button>

<style>
button {
	@apply transition-all duration-200;
}
</style>
