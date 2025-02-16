<script lang="ts">
	import { cn } from '$utils/utils.ts';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTableAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLTableAttributes> = $props();
</script>


	<table bind:this={ref} class={cn('relative w-full caption-bottom text-sm', className)} {...restProps}>
		{@render children?.()}
	</table>

