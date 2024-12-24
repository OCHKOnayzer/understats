<script lang="ts">
import { cn } from '$utils/utils.ts';
import { Calendar as CalendarPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.HeadCellProps = $props();
</script>

<CalendarPrimitive.HeadCell
	bind:ref="{ref}"
	class="{cn('w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground', className)}"
	{...restProps} />
