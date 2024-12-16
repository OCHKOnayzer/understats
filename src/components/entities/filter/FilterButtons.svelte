<!-- <script lang="ts">
import Button from '$components/ui/button/button.svelte';

import type { Writable } from 'svelte/store';
import type { FilterInputSelectStore, SelectedOption } from '$types/types';

import * as m from '$m';

export let filter: Writable<FilterInputSelectStore>;

function clearFilters() {
	filter.update((items: FilterInputSelectStore) => {
		(Object.keys(items) as (keyof FilterInputSelectStore)[]).forEach((key) => {
			if (items[key]) {
				items[key].selected = { value: '', label: '' } as SelectedOption;
			}
		});
		return items;
	});
}
</script>

<div class="mt-5 flex items-center gap-3">
	<Button variant="outlineRounded">{m.show()}</Button>
	<Button
		variant="outlineRoundedWhite"
		on:click="{clearFilters}">{m.reset()}</Button>
</div> -->
