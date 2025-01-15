<script lang="ts">
import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';

import { betService } from '$src/services/bet.service';

import TotalBet from '../TotalBet/TotalBet.svelte';
const params = { express: 'true', ordinar: 'true' };
// const params2 = { express: 'false', ordinar: 'false', page: 1, perPage: 10 };

const data = createQuery({
	queryKey: ['bets count', params],
	queryFn: () => betService.getMyBetsCount(params)
});

// const data2 = createQuery({
// 	queryKey: ['bets count', params],
// 	queryFn: () => betService.getMyBets(params2)
// });
</script>

<div class="flex w-[80%] items-center justify-between gap-4">
	<TotalBet
		title="{$data.data ? String($data.data) : 0} {$t('tariffs.limits_bets')}"
		sum="{$t('stats.in_summ')} $0" />
	<TotalBet
		title="0 {$t('stats.wins')}"
		sum="{$t('stats.in_summ')} $0" />
	<TotalBet
		title="0 {$t('stats.loses')}"
		sum="{$t('stats.in_summ')} $0" />
	<TotalBet
		title="0 {$t('stats.loses')}"
		sum="{$t('stats.in_summ')} $0" />
</div>
