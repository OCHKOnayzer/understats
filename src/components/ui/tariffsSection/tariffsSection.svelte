<script lang="ts">
import { t } from 'svelte-i18n';

import Tariffs from './tariffs.svelte';

export let tariffs;

const liteTariffs = tariffs.tariffs[1];
const standartTariffs = tariffs.tariffs[2];
const proTariffs = tariffs.tariffs[3];

function formatNumber(value: number) {
	return Number(value).toLocaleString('de-DE');
}
</script>

<div class="tariffs-wrapper">
	<Tariffs
		name="{liteTariffs.name}"
		desc="{'tariffs.lite'}"
		limitations="{formatNumber(liteTariffs.betsPerMonth)}"
		accounts="{liteTariffs.accounts}"
		price="{liteTariffs.pricePerMonth}"
		price_year="{liteTariffs.pricePerYear}" />
	<Tariffs
		name="{standartTariffs.name}"
		desc="{'tariffs.standart'}"
		limitations="{formatNumber(standartTariffs.betsPerMonth)}"
		accounts="{standartTariffs.accounts}"
		price="{standartTariffs.pricePerMonth}"
		price_year="{standartTariffs.pricePerYear}" />
	<Tariffs
		name="{proTariffs.name}"
		desc="{'tariffs.pro'}"
		limitations="{'tariffs.no_limits'}"
		price="{proTariffs.pricePerMonth}"
		price_year="{formatNumber(proTariffs.pricePerYear)}" />
</div>

<style>
.tariffs-wrapper {
	height: fit-content;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
@media screen and (max-width: 1200px) {
	.tariffs-wrapper {
		flex-direction: column;
	}
}
@media screen and (max-width: 768px) {
	.tariffs-wrapper {
		margin-top: 10px;
		flex-direction: column;
	}
}
</style>
