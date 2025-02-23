<script lang="ts">
import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';

import { betService } from '$src/services/bet.service';
import { betsTableStore } from '$src/stores/betsTableStore';

import TotalBet from '../TotalBet/TotalBet.svelte';


const data = createQuery({
	queryKey: ['bets count'],
	queryFn: () => betService.getMyBetsCount(),
	refetchOnWindowFocus: false,
	staleTime: 300000
});

let wins = $state([]);
let winsSum = $state(0);
let loses = $state([]);
let losesSum = $state(0);
let totalStakes = $state(0);
let roi = $state('0');

$effect(() => {
	if (!Array.isArray($betsTableStore?.data?.bets)) return;

	const winningBets = $betsTableStore.data.bets.filter((bet) => bet.status.toLowerCase().includes('win'));
	const losingBets = $betsTableStore.data.bets.filter((bet) => bet.status.toLowerCase().includes('lose'));

	const winningsTotal = winningBets.reduce((acc, bet) => acc + Number(bet.amounts?.win ?? 0), 0);
	const losingsTotal = losingBets.reduce((acc, bet) => acc + Number(bet.amounts?.stake ?? 0), 0);
	const stakesTotal = $betsTableStore.data.bets.reduce((acc, bet) => acc + Number(bet.amounts?.stake ?? 0), 0);

	wins = winningBets;
	winsSum = winningsTotal;
	loses = losingBets;
	losesSum = losingsTotal;
	totalStakes = stakesTotal;
	roi = stakesTotal > 0 ? (((winningsTotal - stakesTotal) / stakesTotal) * 100).toFixed(2) : '0';
});
</script>

<div class="item flex w-[80%] items-center justify-between gap-4">
	<TotalBet
		title="{$data.data ? String($data.data) : 0} {$t('tariffs.limits_bets')}"
		sum="{$t('stats.in_summ')} ${totalStakes.toFixed(2)}" />
	<TotalBet
		title="{wins ? String(wins.length) : 0} {$t('stats.wins')}"
		sum="{$t('stats.in_summ') + ' $' + winsSum.toFixed(2)}" />
	<TotalBet
		title="{loses ? String(loses.length) : 0} {$t('stats.loses')}"
		sum="{$t('stats.in_summ') + ' $' + losesSum.toFixed(2)}" />
	<TotalBet
		title="ROI"
		sum="{roi}%" />
</div>

<style>
.item {
	@media (max-width: 740px) {
		width: 100%;
	}
}
</style>
