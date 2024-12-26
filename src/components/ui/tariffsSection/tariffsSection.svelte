<script>
import { t } from 'svelte-i18n';

import Tariffs from './tariffs.svelte';
const lite = `10 ${$t('tariffs.limits_acc')} 10 000 ${$t('tariffs.limits_bets')}`;
const standart = `50 ${$t('tariffs.limits_acc')} 100 000 ${$t('tariffs.limits_bets')}`;
</script>

<div class="tariffs-wrapper">
	<Tariffs
		name="{'Lite'}"
		desc="{'tariffs.lite'}"
		limitations="{'10 000'}"
		accounts="{'5 '}" />
	<Tariffs
		name="{'Standart'}"
		desc="{'tariffs.lite'}"
		limitations="{'100 000'}"
		accounts="{'50 '}" />
	<Tariffs
		name="{'Pro'}"
		desc="{'tariffs.lite'}"
		limitations="{$t('tariffs.no_limits')}" />
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
