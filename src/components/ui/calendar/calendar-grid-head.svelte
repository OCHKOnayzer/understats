<script lang="ts">
import { Calendar as CalendarPrimitive } from 'bits-ui';

import { cn } from '$utils/utils.ts';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.GridHeadProps = $props();
</script>

<CalendarPrimitive.GridHead
	bind:ref="{ref}"
	class="{cn(className)}"
	{...restProps} />
