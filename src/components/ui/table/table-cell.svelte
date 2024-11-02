<script lang="ts">
import { cn } from '$utils/utils';

import type { HTMLTdAttributes } from 'svelte/elements';

type $$Props = HTMLTdAttributes;

let className: $$Props['class'] = undefined;
export { className as class };
</script>

<td
	class={cn('border-spacing-10 border border-[#363A45] px-4 py-2 text-left align-middle [&:has([role=checkbox])]:pr-0 ', className)}
	{...$$restProps}
	on:click
	on:keydown>
	<slot />
</td>
