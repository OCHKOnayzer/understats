<script lang="ts">
import BetFilterInputs from '$src/components/features/stats/FilterBet/BetFilterInputs.svelte';
import BetGameStatus from '$src/components/features/stats/FilterBet/BetGameStatus.svelte';
import BetResults from '$src/components/features/stats/FilterBet/BetResults.svelte';
import BetStatus from '$src/components/features/stats/FilterBet/BetStatus.svelte';
import BetType from '$src/components/features/stats/FilterBet/BetType.svelte';
</script>

<section class="bets-section">
	<h2 class="section-title">Ставки</h2>

	<div class="bet-type-result-row">
		<BetType />

		<BetResults />
	</div>

	<div class="flex items-center justify-between gap-3">
		<BetStatus />

		<BetGameStatus />
	</div>

	<BetFilterInputs />
</section>

<style>
.bets-section {
	margin: 32px 0;
}

.section-title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 16px;
	color: white;
}

.bet-type-result-row {
	display: flex;
	justify-content: space-between;
	gap: 8px;
	margin-bottom: 16px;
}
</style>
