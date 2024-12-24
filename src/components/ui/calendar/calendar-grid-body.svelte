<script lang="ts">
import { cn } from '$utils/utils.ts';
import { Calendar as CalendarPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.GridBodyProps = $props();
</script>

<CalendarPrimitive.GridBody
	bind:ref="{ref}"
	class="{cn(className)}"
	{...restProps} />
