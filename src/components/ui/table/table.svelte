<script lang="ts">
import { cn } from '$utils/utils';

import type { HTMLTableAttributes } from 'svelte/elements';

type $$Props = HTMLTableAttributes;

let className: $$Props['class'] = undefined;
export { className as class };
</script>

<table
	class="{cn('w-full caption-bottom text-[12px]', className)}"
	{...$$restProps}>
	<slot />
</table>
