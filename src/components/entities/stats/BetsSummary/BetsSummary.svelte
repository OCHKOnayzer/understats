<script lang="ts">
import { t } from 'svelte-i18n';

import TotalBet from '../TotalBet/TotalBet.svelte';
</script>

<div class="flex w-[80%] items-center justify-between gap-4">
	<TotalBet
		title="356 {$t('tariffs.limits_bets')}"
		sum="{$t('stats.in_summ')} 158 000 Р" />
	<TotalBet
		title="356 {$t('stats.wins')}"
		sum="{$t('stats.in_summ')} 158 000 Р" />
	<TotalBet
		title="356 {$t('stats.loses')}"
		sum="{$t('stats.in_summ')} 158 000 Р" />
	<TotalBet
		title="356 {$t('stats.loses')}"
		sum="{$t('stats.in_summ')} 158 000 Р" />
</div>
