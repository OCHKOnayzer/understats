<script lang="ts">
import type { HTMLThAttributes } from 'svelte/elements'
import { cn } from '$utils/utils'

type $$Props = HTMLThAttributes

let className: $$Props['class'] = undefined
export { className as class }
</script>

<th
  class={cn(
    'text-muted-white h-12 px-4 text-left align-middle text-[10px] font-thin [&:has([role=checkbox])]:pr-0 border-[#363A45] border-2',
    className,
  )}
  {...$$restProps}
>
  <slot />
</th>
