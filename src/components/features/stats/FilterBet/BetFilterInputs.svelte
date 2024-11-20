<script>
import { filterStore } from '$src/stores/filterStore';
</script>

<div class="input-row">
	<div class="input-wrapper">
		<input
			type="text"
			placeholder="Сумма ставки, от"
			class="amount-input"
			value="{$filterStore.betAmount.from}"
			on:input="{(e) => filterStore.setBetAmount(e.currentTarget.value, $filterStore.betAmount.to)}" />
	</div>
	<div class="input-wrapper">
		<input
			type="text"
			placeholder="Сумма ставки, до"
			class="amount-input"
			value="{$filterStore.betAmount.to}"
			on:input="{(e) => filterStore.setBetAmount($filterStore.betAmount.from, e.currentTarget.value)}" />
	</div>
</div>

<div class="input-row">
	<div class="input-wrapper">
		<input
			type="text"
			placeholder="Коэффициент, от"
			class="amount-input"
			value="{$filterStore.coefficient.from}"
			on:input="{(e) => filterStore.setCoefficient(e.currentTarget.value, $filterStore.coefficient.to)}" />
	</div>
	<div class="input-wrapper">
		<input
			type="text"
			placeholder="Коэффициент, до"
			class="amount-input"
			value="{$filterStore.coefficient.to}"
			on:input="{(e) => filterStore.setCoefficient($filterStore.coefficient.from, e.currentTarget.value)}" />
	</div>
</div>

<style>
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
