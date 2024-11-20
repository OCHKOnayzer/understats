<script>
import { filterStore } from '$src/stores/filterStore';
</script>

<div class="bet-type-container">
	<button
		class="bet-type"
		class:active="{$filterStore.betType.includes('ordinary')}"
		on:click="{() => filterStore.toggleBetType('ordinary')}">
		Ординар
	</button>
	<button
		class="bet-type"
		class:active="{$filterStore.betType.includes('express')}"
		on:click="{() => filterStore.toggleBetType('express')}">
		Экспресс
	</button>
</div>

<style>
.bet-type-container {
	display: flex;
	flex: 1;
	justify-content: space-around;
	background-color: #363a45;
	padding: 4px 6px;
	border-radius: 12px;
	gap: 8px;
}

.bet-type {
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

.bet-type:hover {
	background: rgba(255, 255, 255, 0.15);
}

.bet-type.active {
	background: rgba(255, 255, 255, 0.2);
}
</style>
