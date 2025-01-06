<script lang="ts">
import { t } from 'svelte-i18n';

import { filterStore } from '$src/stores/filterStore';

let amountFrom = $filterStore.betAmount.from;
let amountTo = $filterStore.betAmount.to;

let coefficientFrom = $filterStore.coefficient.from;
let coefficientTo = $filterStore.coefficient.to;

function handleAmountChange() {
	filterStore.setBetAmount(amountFrom, amountTo);
}

function handleCoefficientChange() {
	filterStore.setCoefficient(coefficientFrom, coefficientTo);
}
</script>

<div class="bet-filter-inputs">
	<div class="input-group">
		<div class="inputs">
			<div class="input-field">
				<input
					type="text"
					class="amount-input"
					bind:value="{coefficientFrom}"
					on:input="{handleCoefficientChange}"
					autocomplete="off"
					id="amountFrom" />
				<label
					for="amountFrom"
					class="placeholder"
					class:filled="{amountFrom}">
					{$t('stats.ratio')}, {$t('other.from')}
				</label>
			</div>
			<div class="input-field">
				<input
					type="text"
					class="amount-input"
					bind:value="{coefficientTo}"
					on:input="{handleCoefficientChange}"
					autocomplete="off"
					id="amountTo" />
				<label
					for="amountTo"
					class="placeholder"
					class:filled="{amountTo}">
					{$t('stats.ratio')}, {$t('stats.before')}
				</label>
			</div>
		</div>
	</div>

	<div class="input-group">
		<div class="inputs">
			<div class="input-field">
				<input
					type="text"
					class="amount-input"
					bind:value="{amountFrom}"
					on:input="{handleAmountChange}"
					id="coefficientFrom" />
				<label
					for="coefficientFrom"
					class="placeholder"
					class:filled="{coefficientFrom}">
					{$t('stats.bets_sum')}, {$t('other.from')}
				</label>
			</div>
			<div class="input-field">
				<input
					type="text"
					class="amount-input"
					bind:value="{amountTo}"
					on:input="{handleAmountChange}"
					id="coefficientTo" />
				<label
					for="coefficientTo"
					class="placeholder"
					class:filled="{coefficientTo}">
					{$t('stats.bets_sum')}, {$t('stats.before')}
				</label>
			</div>
		</div>
	</div>
</div>

<style>
.bet-filter-inputs {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.input-group {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.inputs {
	display: flex;
	gap: 8px;
}

.input-field {
	position: relative;
	flex: 1;
}

.amount-input {
	width: 100%;
	padding: 24px 14px 8px;
	background: #363a45;
	border: solid 1px transparent;
	border-radius: 12px;
	color: white;
	font-size: 15px;
	line-height: 20px;
	transition: border-color 0.2s ease-out;
}

.amount-input:focus {
	outline: none;
	border-color: #6660ff;
	border-width: 2px;
}

.amount-input:focus + .placeholder,
.placeholder.filled {
	transform: translateY(-20px) scale(0.7);
	color: rgba(255, 255, 255, 0.9);
}

.placeholder {
	position: absolute;
	left: 14px;
	top: 50%;
	transform: translateY(-60%);
	font-size: 15px;
	color: #718096;
	pointer-events: none;
	transition: all 0.2s ease-out;
	transform-origin: left top;
}
</style>
