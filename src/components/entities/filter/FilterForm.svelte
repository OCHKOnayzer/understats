<!-- <script lang="ts">
import { derived } from 'svelte/store';

import FilterInput from '$components/shared/FilterInput/FilterInput.svelte';
import { FilterInputSelect } from '$stores/store';
import { hasOptions } from '$utils/utils';

import FilterButtons from './FilterButtons.svelte';

import type { FilterOption } from '$types/types';

const filterInputs = derived(FilterInputSelect, ($store) => Object.values($store));
</script>

<div class="wrapper">
	{#each $filterInputs as filter}
		<div class="item">
			<FilterInput
				placeholder="{filter.placeholder}"
				name="{filter.name}"
				selected="{filter.selected}"
				value="{hasOptions(filter) ? filter.options : undefined}"
				variant="{filter.variant}"
				check="{FilterInputSelect}" />
		</div>
	{/each}
	<FilterButtons filter="{FilterInputSelect}" />
</div>

<style lang="scss">
.wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	grid-template-rows: repeat(4, auto);

	.item {
		&:nth-child(-n + 4) {
			grid-column: 1;
		}

		&:nth-child(n + 5):nth-child(-n + 6) {
			grid-column: 2;
		}

		&:nth-child(5) {
			grid-row: 3/4;
		}
	}
}
</style> -->
