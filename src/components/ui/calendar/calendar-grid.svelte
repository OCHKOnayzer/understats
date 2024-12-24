<script lang="ts">
import { cn } from '$utils/utils.ts';
import { Calendar as CalendarPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.GridProps = $props();
</script>

<CalendarPrimitive.Grid
	bind:ref="{ref}"
	class="{cn('w-full border-collapse space-y-1', className)}"
	{...restProps} />
