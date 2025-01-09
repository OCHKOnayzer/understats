<script>
import { t } from 'svelte-i18n';

import Button from '$src/components/ui/button/button.svelte';
import { filterStore } from '$src/stores/filterStore';

const items = [
	'filter.results.notRecognized',
	'filter.results.notСalculated',
	'filter.results.won',
	'filter.results.lost',
	'filter.results.return',
	'filter.results.cancel',
	'filter.results.wonReturn',
	'filter.results.lostReturn'
];
</script>

<div class="flex flex-wrap">
	{#each items as item}
		<button on:click="{() => filterStore.toggleBetResult(item)}">
			<Button
				variant="{$filterStore.betResult.includes(item) ? 'filterButtonActive' : 'filterButton'}"
				class="mb-2 mr-2">{$t(item)}</Button>
		</button>
	{/each}
</div>
