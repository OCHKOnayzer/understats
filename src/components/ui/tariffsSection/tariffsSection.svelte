<script>
import Tariffs from './tariffs.svelte';
</script>

<div class="tariffs-wrapper">
	<Tariffs
		name="{'Lite'}"
		desc="{'tariffs.lite'}"
		limitations="{'tariffs.limits'}"
		accounts="{5}"
		bets="{10000}" />
	<Tariffs
		name="{'Standart'}"
		desc="{'tariffs.lite'}"
		limitations="{'tariffs.limits'}"
		accounts="{50}"
		bets="{100000}" />
	<Tariffs
		name="{'Pro'}"
		desc="{'tariffs.lite'}"
		limitations="{'tariffs.no_limits'}" />
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
