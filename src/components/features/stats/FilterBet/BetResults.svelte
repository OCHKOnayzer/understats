<script>
import { t } from 'svelte-i18n';

import { filterStore } from '$src/stores/filterStore';

const betResults = [$t('stats.win'), $t('stats.lose'), $t('stats.return')];
let showBetResults = false;
</script>

<div
	class="dropdown bet-result"
	class:active="{showBetResults}">
	<button
		class="dropdown-button"
		on:click="{() => (showBetResults = !showBetResults)}">
		{#if $filterStore.betResult.length > 0}
			{$filterStore.betResult.join(', ')}
		{:else}
			{$t('stats.bet_result')}
		{/if}
		<span
			class="arrow"
			class:open="{showBetResults}">▼</span>
	</button>
	{#if showBetResults}
		<div class="dropdown-content">
			{#each betResults as result}
				<button
					class="dropdown-item"
					class:active="{$filterStore.betResult.includes(result)}"
					on:click="{() => filterStore.toggleBetResult(result)}">
					{result}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
.dropdown-button {
	padding: 8px 14px;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	border-radius: 12px;
	color: white;
	cursor: pointer;
	width: 100%;
	font-size: 15px;
	transition: all 0.2s ease-in-out;
}

.dropdown-button:hover {
	background: rgba(255, 255, 255, 0.15);
}

.dropdown {
	position: relative;
	flex: 1;
}

.dropdown-button {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.arrow {
	font-size: 12px;
	transition: transform 0.2s ease;
}

.arrow.open {
	transform: rotate(180deg);
}

.dropdown-content {
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	right: 0;
	background: #2c2c2e;
	border-radius: 12px;
	overflow: hidden;
	z-index: 10;
}

.dropdown-item {
	width: 100%;
	padding: 12px;
	border: none;
	background: transparent;
	color: white;
	text-align: left;
	cursor: pointer;
	font-size: 16px;
}

.dropdown-item:hover {
	background: rgba(255, 255, 255, 0.1);
}
</style>
