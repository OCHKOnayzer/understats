<script>
	import Button from '$src/components/ui/button/button.svelte';
	import { filterStore } from '$src/stores/filterStore';

	const items = ['Не распознано', 'Не рассчитана', 'Победа', 'Проигрыш', 'Возврат', 'Отмена', 'Выигрыш/Возврат', 'Проигрыш/Возврат'];
</script>

<div class="mt-5">
	{#each items as item}
		<Button 
			on:click={() => filterStore.toggleBetResult(item)} 
			variant="filterButton" 
			class="mb-2 mr-2 { $filterStore.betResult.includes(item) ? 'active' : '' }"
		>
			{item}
		</Button>
	{/each}
</div>

<style>
	.active {
		background-color: #0D111D !important;
	}
</style>
