<script>
import Button from '$src/components/ui/button/button.svelte';
import { filterStore } from '$src/stores/filterStore';

const items = ['Не распознано', 'Не рассчитана', 'Победа', 'Проигрыш', 'Возврат', 'Отмена', 'Выигрыш/Возврат', 'Проигрыш/Возврат'];

$: console.log($filterStore.betResult);
</script>

<div class="mt-5">
	{#each items as item}
		<button on:click="{() => filterStore.toggleBetResult(item)}">
			<Button
				variant="{$filterStore.betResult.includes(item) ? 'filterButtonActive' : 'filterButton'}"
				class="mb-2 mr-2">{item}</Button>
		</button>
	{/each}
</div>
