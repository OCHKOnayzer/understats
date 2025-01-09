<script lang="ts">
	import { cn } from '$utils/utils.ts';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLThAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
	bind:this={ref}
	class={cn(
		'h-10 border-2 text-left border-[#363A45] px-2 text-[10px] font-normal [&:has([role=checkbox])]:pr-0',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
