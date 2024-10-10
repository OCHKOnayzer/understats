<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements'
import { cn } from '$utils/utils'

type $$Props = HTMLAttributes<HTMLTableCaptionElement>

let className: $$Props['class'] = undefined
export { className as class }
</script>

<caption class={cn('text-muted-white mt-4 text-[12px]', className)} {...$$restProps}>
  <slot />
</caption>
