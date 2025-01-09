<script>
import { t } from 'svelte-i18n';

import { filterStore } from '$src/stores/filterStore';
</script>

<div class="bet-type-container">
	<button
		class="bet-type"
		class:active="{$filterStore.betType.includes('ordinary')}"
		on:click="{() => filterStore.toggleBetType('ordinary')}">
		{$t('stats.ordinar')}
	</button>
	<button
		class="bet-type"
		class:active="{$filterStore.betType.includes('express')}"
		on:click="{() => filterStore.toggleBetType('express')}">
		{$t('stats.express')}
	</button>
	<button
		class="bet-type"
		class:active="{$filterStore.betType.includes('nothing')}"
		on:click="{() => filterStore.toggleBetType('nothing')}">
		{$t('stats.not_recognized')}
	</button>
</div>

<style>
.bet-type-container {
	display: flex;
	flex: 1;
	justify-content: space-around;
	background-color: #363a45;
	padding: 4px 6px;
	border-radius: 12px;
	gap: 8px;
}

.bet-type {
	padding: 8px 14px;
	background: #363a45;
	border: none;
	border-radius: 12px;
	color: white;
	cursor: pointer;
	width: 100%;
	font-size: 15px;
	transition: all 0.2s ease-in-out;
}

.bet-type:hover {
	background: rgba(255, 255, 255, 0.15);
}

.bet-type.active {
	background: #171b26;
}
</style>
