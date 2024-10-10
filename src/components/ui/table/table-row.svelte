<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements'
import { cn } from '$utils/utils'

type $$Props = HTMLAttributes<HTMLTableRowElement> & {
  'data-state'?: unknown
}

let className: $$Props['class'] = undefined
export { className as class }
</script>

<tr
  class={cn('border-b text-white transition-colors data-[state=selected]:bg-muted', className)}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</tr>
