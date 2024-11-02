<script lang="ts">
import Icon from '@iconify/svelte';
import { get } from 'svelte/store';

import Button from '$components/ui/button/button.svelte';
import * as m from '$m';
import { filter } from '$stores/store';

let filterAccount = () => {
	filter.set(!get(filter));
};

$: filterValue = $filter;
</script>

<Button variant="outlineYellow" class={'items-center ' + (filterValue ? 'bg-yellow-500/90' : '')} on:click={filterAccount}>
	<Icon class="mr-2" icon="mingcute:settings-2-line" font-size="28" />

	<h2 class="text-[16px]">
		{m.filter()}
		{#if filterValue}
			ON
		{:else}
			OFF
		{/if}
	</h2>
</Button>
