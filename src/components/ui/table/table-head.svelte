<script lang="ts">
import { cn } from '$utils/utils';

import type { HTMLThAttributes } from 'svelte/elements';

type $$Props = HTMLThAttributes;

let className: $$Props['class'] = undefined;
export { className as class };
</script>

<th
	class="{cn('text-muted-white h-12 border-2 border-[#363A45] px-4 text-left align-middle text-[10px] font-thin [&:has([role=checkbox])]:pr-0', className)}"
	{...$$restProps}>
	<slot />
</th>
