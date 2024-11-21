<script lang="ts">
import BetFilterInputs from '$src/components/features/stats/FilterBet/BetFilterInputs.svelte';
import BetGameStatus from '$src/components/features/stats/FilterBet/BetGameStatus.svelte';
import BetType from '$src/components/features/stats/FilterBet/BetType.svelte';
</script>

<section class="bets-section">
	<div class="bet-type-result-row">
		<BetType />
	</div>

	<div class="flex w-[100%] items-center">
		<BetGameStatus />
	</div>

	<BetFilterInputs />
</section>

<style>
.bet-type-result-row {
	display: flex;
	justify-content: space-between;
	gap: 8px;
	margin-bottom: 16px;
}
</style>
