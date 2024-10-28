<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements'
import { cn } from '$utils/utils'

type $$Props = HTMLAttributes<HTMLTableSectionElement>

let className: $$Props['class'] = undefined
export { className as class }
</script>

<tfoot class={cn('bg-primary font-medium text-white', className)} {...$$restProps}>
  <slot />
</tfoot>
