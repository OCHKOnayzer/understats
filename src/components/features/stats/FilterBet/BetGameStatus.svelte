<script>
import { filterStore } from '$src/stores/filterStore';
</script>

<div class="bet-status-row">
	<button
		class="bet-status"
		class:active={$filterStore.betGameStatus === 'live'}
		on:click={() => filterStore.setBetGameStatus('live')}>
		Лайв
	</button>
	<button
		class="bet-status"
		class:active={$filterStore.betGameStatus === 'prematch'}
		on:click={() => filterStore.setBetGameStatus('prematch')}>
		Прематч
	</button>
</div>

<style>
.bet-status-row {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px;
	margin-bottom: 16px;
	width: 50%;
	background-color: #363a45;
	padding: 4px 6px;
	border-radius: 12px;
}

.bet-status {
	padding: 8px 14px;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	border-radius: 12px;
	color: white;
	cursor: pointer;
	width: 100%;
	font-size: 15px;
	transition: all 0.2s ease-in-out;
}

.bet-status.active {
	background: rgba(255, 255, 255, 0.2);
}
</style>
