<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

const betResults = ['Выигрыш', 'Проигрыш', 'Возврат'];
let showBetResults = false;
</script>

<section class="bets-section">
	<h2 class="section-title">Ставки</h2>

	<div class="bet-type-result-row">
		<div class="bet-type-container">
			<button
				class="bet-type"
				class:active={$filterStore.betType.includes('ordinary')}
				on:click={() => filterStore.toggleBetType('ordinary')}>
				Ординар
			</button>
			<button
				class="bet-type"
				class:active={$filterStore.betType.includes('express')}
				on:click={() => filterStore.toggleBetType('express')}>
				Экспресс
			</button>
		</div>

		<div class="dropdown bet-result" class:active={showBetResults}>
			<button class="dropdown-button" on:click={() => (showBetResults = !showBetResults)}>
					{#if $filterStore.betResult.length > 0}
							{$filterStore.betResult.join(', ')}
					{:else}
							Результат ставки
					{/if}
					<span class="arrow" class:open={showBetResults}>▼</span>
			</button>
			{#if showBetResults}
					<div class="dropdown-content">
							{#each betResults as result}
									<button
											class="dropdown-item"
											class:active={$filterStore.betResult.includes(result)}
											on:click={() => filterStore.toggleBetResult(result)}>
											{result}
									</button>
							{/each}
					</div>
			{/if}
	</div>
	</div>

	<div class="flex items-center justify-between gap-3">
		<div class="bet-status-row">
			<button
				class="bet-status"
				class:active={$filterStore.betStatus.includes('calculated')}
				on:click={() => filterStore.toggleBetStatus('calculated')}>
				Рассчитана
			</button>
			<button
				class="bet-status"
				class:active={$filterStore.betStatus.includes('notCalculated')}
				on:click={() => filterStore.toggleBetStatus('notCalculated')}>
				Не рассчитана
			</button>
		</div>

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
	</div>

	<div class="input-row">
		<div class="input-wrapper">
			<input
				type="text"
				placeholder="Сумма ставки, от"
				class="amount-input"
				value={$filterStore.betAmount.from}
				on:input={(e) => filterStore.setBetAmount(e.currentTarget.value, $filterStore.betAmount.to)} />
		</div>
		<div class="input-wrapper">
			<input
				type="text"
				placeholder="Сумма ставки, до"
				class="amount-input"
				value={$filterStore.betAmount.to}
				on:input={(e) => filterStore.setBetAmount($filterStore.betAmount.from, e.currentTarget.value)} />
		</div>
	</div>

	<div class="input-row">
		<div class="input-wrapper">
			<input
				type="text"
				placeholder="Коэффициент, от"
				class="amount-input"
				value={$filterStore.coefficient.from}
				on:input={(e) => filterStore.setCoefficient(e.currentTarget.value, $filterStore.coefficient.to)} />
		</div>
		<div class="input-wrapper">
			<input
				type="text"
				placeholder="Коэффициент, до"
				class="amount-input"
				value={$filterStore.coefficient.to}
				on:input={(e) => filterStore.setCoefficient($filterStore.coefficient.from, e.currentTarget.value)} />
		</div>
	</div>
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

.bet-type-container {
	display: flex;
	flex: 1;
	justify-content: space-around;
	background-color: #363a45;
	padding: 4px 6px;
	border-radius: 12px;
	gap: 8px;
}

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

.bet-type,
.bet-status,
.dropdown-button {
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

.bet-type:hover,
.bet-status:hover,
.dropdown-button:hover {
	background: rgba(255, 255, 255, 0.15);
}

.bet-type.active,
.bet-status.active {
	background: rgba(255, 255, 255, 0.2);
}

.dropdown {
	position: relative;
	flex: 1;
}

.dropdown-button {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.arrow {
	font-size: 12px;
	transition: transform 0.2s ease;
}

.arrow.open {
	transform: rotate(180deg);
}

.dropdown-content {
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	right: 0;
	background: #2c2c2e;
	border-radius: 12px;
	overflow: hidden;
	z-index: 10;
}

.dropdown-item {
	width: 100%;
	padding: 12px;
	border: none;
	background: transparent;
	color: white;
	text-align: left;
	cursor: pointer;
	font-size: 16px;
}

.dropdown-item:hover {
	background: rgba(255, 255, 255, 0.1);
}

.input-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
	margin-bottom: 16px;
}

.input-wrapper {
	position: relative;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 12px;
}

.amount-input {
	width: 100%;
	padding: 12px;
	background: transparent;
	border: none;
	color: white;
	font-size: 16px;
}

.amount-input::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.amount-input:focus {
	outline: none;
}

.input-wrapper:focus-within {
	background: rgba(255, 255, 255, 0.15);
}
</style>
