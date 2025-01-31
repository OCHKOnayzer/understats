<script lang="ts">
import { t } from 'svelte-i18n';

import { tariffsPeriod } from '$src/stores/tariffsStore';
import { openModal, setCurrentTariffs, setCurrentLimits, type currentTariffsType } from '$src/stores/modalStore';
let { name, desc, limitations, accounts, price, price_year } = $$props;
const openPay = (tarrifs: currentTariffsType, limits: any) => {
	openModal('PaySupport');
	setCurrentTariffs(tarrifs);
	if (accounts !== undefined) {
		setCurrentLimits(limits, accounts);
	} else {
		setCurrentLimits(null, null);
	}
};

let activePeriod = 'month';

const year = 'tariffs.proccents';
const month = 'tariffs.year_proccents';

function changePeriod(period: string) {
	activePeriod = period;
	tariffsPeriod.set(activePeriod);
}
console.log(limitations);
console.log(accounts);
</script>

<div class="tariffs-container">
	<div class="tariffs-content">
		<p class="tariffs-title">{name}</p>
		<span class="tariffs-desc">{$t(desc)}</span>
		<div class="limits container">
			{#if accounts !== undefined}
				{accounts}
				{$t('tariffs.limits_acc')}
				{limitations}
				{$t('tariffs.limits_bets')}
			{:else}
				{$t(limitations)}
			{/if}
		</div>
		<div class="choose-period container">
			<div
				class="choose-button"
				style="left: {$tariffsPeriod === 'month' ? '5px' : 'calc(50% + 5px)'}"></div>
			<button on:click="{() => changePeriod('month')}">
				{$t('tariffs.month')}
			</button>
			<button on:click="{() => changePeriod('year')}">
				{$t('tariffs.year')}
			</button>
		</div>
		<button
			on:click="{() => openPay(name, limitations)}"
			class="buy">{$t('tariffs.buy_in')} {$tariffsPeriod === 'month' ? price : price_year}$</button>
		<span class="porccents">
			{$tariffsPeriod === 'month' ? $t(month) : $t(year)}
		</span>
	</div>
</div>

<style>
.tariffs-container {
	width: 33%;
	height: 400px;
	border-radius: 16px;
	background-color: #171b26;
	display: flex;
	justify-content: center;
	align-items: center;
}

.tariffs-content {
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
}

.tariffs-title {
	font-weight: 600;
	font-size: 24px;
}

.tariffs-desc {
	display: block;
	width: 65%;
	text-align: center;
	font-size: 14px;
}

.container {
	background-color: #363a45;
	width: 80%;
	margin-top: 10px;
	display: flex;
	position: relative;
}

.limits {
	padding: 5px;
	justify-content: center;
	border-radius: 8px;
	text-align: center;
}

.choose-period {
	min-height: 50px;
	position: relative;
	align-items: center;
	border-radius: 16px;
	padding: 5px;
	margin: 10px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

.choose-button {
	position: absolute;
	background-color: #171b26;
	width: calc(50% - 10px);
	height: calc(100% - 10px);
	border-radius: 8px;
	transition: all 0.3s ease;
}

.choose-period button {
	width: calc(50% - 10px);
	background: transparent;
	border: none;
	color: white;
	font-size: 16px;
	cursor: pointer;
	z-index: 3;
}
.buy {
	min-height: 48px;
	border-radius: 16px;
	background-color: var(--accent-color);
	width: 80%;
	font-weight: 500;
	margin-bottom: 10px;
}
.porccents {
	color: var(--accent-color);
	font-size: 14px;
}
@media screen and (max-width: 1200px) {
	.choose-period {
		height: 50px;
	}
	.buy {
		height: 50px;
	}
	.tariffs-container {
		width: 100%;
		margin-bottom: 10px;
		height: 300px;
	}
	.tariffs-content {
		width: 60%;
	}
}

@media screen and (max-width: 768px) {
	.tariffs-container {
		width: 100%;
		margin-bottom: 10px;
		min-height: 300px;
		height: fit-content;
	}
	.tariffs-content {
		width: 100%;
	}
	.tariffs-desc {
		width: 90%;
	}
	.limits {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		font-size: 14px;
	}
	.choose-period {
		height: 40px;
	}
	.porccents {
		padding-bottom: 10px;
	}
}
</style>
