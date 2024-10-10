<script lang="ts">
import { Select as SelectPrimitive } from 'bits-ui'
import ChevronDown from 'lucide-svelte/icons/chevron-down'
import { cn } from '$utils/utils'

type $$Props = SelectPrimitive.TriggerProps
type $$Events = SelectPrimitive.TriggerEvents

let className: $$Props['class'] = undefined
export { className as class }
</script>

<SelectPrimitive.Trigger
  class={cn(
    'data-[placeholder]:[&>span]:text-muted-white flex h-12 w-full items-center justify-between rounded-[3px] bg-background px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-destructive [&>span]:line-clamp-1',
    className,
  )}
  {...$$restProps}
  let:builder
  on:click
  on:keydown
>
  <slot {builder} />
  <div>
    <ChevronDown class="h-4 w-4 opacity-50" color="white" />
  </div>
</SelectPrimitive.Trigger>
