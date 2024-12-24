<script lang="ts">
import { cn } from '$utils/utils.ts';
import { Calendar as CalendarPrimitive } from 'bits-ui';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.HeadingProps = $props();
</script>

<CalendarPrimitive.Heading
	bind:ref="{ref}"
	class="{cn('text-sm font-medium', className)}"
	{...restProps} />
