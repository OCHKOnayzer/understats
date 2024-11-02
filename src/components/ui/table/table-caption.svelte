<script lang="ts">
import { cn } from '$utils/utils';

import type { HTMLAttributes } from 'svelte/elements';

type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

let className: $$Props['class'] = undefined;
export { className as class };
</script>

<caption
	class={cn('text-muted-white mt-4 text-[12px]', className)}
	{...$$restProps}>
	<slot />
</caption>
