<script lang="ts">
	import { cn } from '$utils/utils.ts';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTdAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLTdAttributes> = $props();
</script>

<td
	bind:this={ref}
	class={cn('active: border-spacing-10 border border-[#363A45] px-2 py-2 text-left align-middle [&:has([role=checkbox])]:pr-0', className)}
	{...restProps}
>
	{@render children?.()}
</td>
