<script>
import { filterStore } from '$src/stores/filterStore';

let focusedInput = '';
</script>

<div class="input-row">
	<div class="input-wrapper">
		<input
			type="text"
			class="amount-input"
			value="{$filterStore.betAmount.from}"
			on:focus="{() => (focusedInput = 'betFrom')}"
			on:blur="{() => (focusedInput = '')}"
			on:input="{(e) => filterStore.setBetAmount(e.currentTarget.value, $filterStore.betAmount.to)}" />
		<label
			class="placeholder"
			class:active="{focusedInput === 'betFrom' || $filterStore.betAmount.from}">
			Сумма ставки, от
		</label>
	</div>
	<div class="input-wrapper">
		<input
			type="text"
			class="amount-input"
			value="{$filterStore.betAmount.to}"
			on:focus="{() => (focusedInput = 'betTo')}"
			on:blur="{() => (focusedInput = '')}"
			on:input="{(e) => filterStore.setBetAmount($filterStore.betAmount.from, e.currentTarget.value)}" />
		<label
			class="placeholder"
			class:active="{focusedInput === 'betTo' || $filterStore.betAmount.to}">
			Сумма ставки, до
		</label>
	</div>
</div>

<div class="input-row">
	<div class="input-wrapper">
		<input
			type="text"
			class="amount-input"
			value="{$filterStore.coefficient.from}"
			on:focus="{() => (focusedInput = 'coeffFrom')}"
			on:blur="{() => (focusedInput = '')}"
			on:input="{(e) => filterStore.setCoefficient(e.currentTarget.value, $filterStore.coefficient.to)}" />
		<label
			class="placeholder"
			class:active="{focusedInput === 'coeffFrom' || $filterStore.coefficient.from}">
			Коэффициент, от
		</label>
	</div>
	<div class="input-wrapper">
		<input
			type="text"
			class="amount-input"
			value="{$filterStore.coefficient.to}"
			on:focus="{() => (focusedInput = 'coeffTo')}"
			on:blur="{() => (focusedInput = '')}"
			on:input="{(e) => filterStore.setCoefficient($filterStore.coefficient.from, e.currentTarget.value)}" />
		<label
			class="placeholder"
			class:active="{focusedInput === 'coeffTo' || $filterStore.coefficient.to}">
			Коэффициент, до
		</label>
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
	padding-top: 4px;
}

.amount-input {
	width: 100%;
	padding: 12px;
	background: transparent;
	border: none;
	color: white;
	font-size: 16px;
}

.amount-input:focus {
	outline: none;
}

.input-wrapper:focus-within {
	background: rgba(255, 255, 255, 0.15);
}

.placeholder {
	position: absolute;
	top: 50%;
	left: 12px;
	transform: translateY(-50%);
	font-size: 14px;
	color: #718096;
	pointer-events: none;
	transition: all 0.2s ease-out;
	transform-origin: left top;
	line-height: 1;
}

.placeholder.active,
.input-wrapper:focus-within .placeholder {
	top: 8px;
	transform: translateY(0) scale(0.75);
	color: #ababb2;
}

.input-wrapper:focus-within .placeholder {
	color: rgba(255, 255, 255, 0.9);
}
</style>
