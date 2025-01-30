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
		'border-2 border-[#363A45] py-1 text-left text-[10px] font-normal align-top [&:has([role=checkbox])]:pr-0',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
