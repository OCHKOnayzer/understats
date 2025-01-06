<script lang="ts">
import { Calendar as CalendarPrimitive } from 'bits-ui';

import { cn } from '$utils/utils.ts';

let { ref = $bindable(null), class: className, ...restProps }: CalendarPrimitive.GridBodyProps = $props();
</script>

<CalendarPrimitive.GridBody
	bind:ref="{ref}"
	class="{cn(className)}"
	{...restProps} />
