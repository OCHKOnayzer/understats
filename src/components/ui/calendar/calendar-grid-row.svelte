<script lang="ts">
import { cn } from '$utils/utils.ts';
import { Calendar as CalendarPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.GridRowProps = $props();
</script>

<CalendarPrimitive.GridRow
	bind:ref="{ref}"
	class="{cn('flex', className)}"
	{...restProps} />
