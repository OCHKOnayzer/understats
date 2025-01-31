<script>
import { t } from 'svelte-i18n';

import Tariffs from './tariffs.svelte';
</script>

<div class="tariffs-wrapper">
	<Tariffs
		name="{'Lite'}"
		desc="{'tariffs.lite'}"
		limitations="{'1.000'}"
		accounts="{'5'}"
		price="{'10'}"
		price_year="{'100'}" />
	<Tariffs
		name="{'Standart'}"
		desc="{'tariffs.standart'}"
		limitations="{'20.000'}"
		accounts="{'100'}"
		price="{'30'}"
		price_year="{'300'}" />
	<Tariffs
		name="{'Pro'}"
		desc="{'tariffs.pro'}"
		limitations="{'tariffs.no_limits'}"
		price="{'100'}"
		price_year="{'1000'}" />
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
