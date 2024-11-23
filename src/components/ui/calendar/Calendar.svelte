<script lang="ts">
import { createEventDispatcher } from 'svelte';

import DateRangePicker from './DateRangePicker.svelte';

const dispatch = createEventDispatcher<{
	select: { startDate: string; endDate: string };
}>();
</script>

<DateRangePicker on:select="{(event) => dispatch('select', event.detail)}" />
