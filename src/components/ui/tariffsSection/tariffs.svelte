<script lang="ts">
import { t } from 'svelte-i18n';
let { name, desc, limitations } = $$props;

let activePeriod = 'month';

function changePeriod(period: string) {
	activePeriod = period;
}
</script>

<div class="tariffs-container">
	<div class="tariffs-content">
		<p class="tariffs-title">{name}</p>
		<span class="tariffs-desc">{$t(desc)}</span>
		<div class="limits container">
			{$t(limitations)}
		</div>
		<div class="choose-period container">
			<div
				class="choose-button"
				style="left: {activePeriod === 'month' ? '5px' : 'calc(50% + 5px)'}"></div>
			<button on:click="{() => changePeriod('month')}">
				{$t('tariffs.month')}
			</button>
			<button on:click="{() => changePeriod('year')}">
				{$t('tariffs.year')}
			</button>
		</div>
	</div>
</div>

<style>
.tariffs-container {
	width: 33%;
	height: 40vh;
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
}

.choose-period {
	height: 6vh;
	position: relative;
	align-items: center;
	border-radius: 16px;
	padding: 5px;
	margin: 10px;
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
</style>
