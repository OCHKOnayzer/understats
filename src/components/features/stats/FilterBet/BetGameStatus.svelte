<script>
import { t } from 'svelte-i18n';

import { filterStore } from '$src/stores/filterStore';
</script>

<div class="bet-status-row">
	<button
		class="bet-status"
		class:active="{$filterStore.betGameStatus.includes('live')}"
		on:click="{() => filterStore.toggleGameStatus('live')}">
		{$t('stats.live')}
	</button>
	<button
		class="bet-status"
		class:active="{$filterStore.betGameStatus.includes('prematch')}"
		on:click="{() => filterStore.toggleGameStatus('prematch')}">
		{$t('stats.prematch')}
	</button>
	<button
		class="bet-status"
		class:active="{$filterStore.betGameStatus.includes('nothing')}"
		on:click="{() => filterStore.toggleGameStatus('nothing')}">
		{$t('stats.not_recognized')}
	</button>
</div>

<style>
.bet-status-row {
	display: flex;
	flex: 1;
	justify-content: space-around;
	background-color: #363a45;
	padding: 4px 6px;
	border-radius: 12px;
	gap: 8px;
	margin-bottom: 12px;
}

.bet-status {
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

.bet-status:hover {
	background: rgba(255, 255, 255, 0.15);
}

.bet-status.active {
	background: #171b26;
}
</style>
