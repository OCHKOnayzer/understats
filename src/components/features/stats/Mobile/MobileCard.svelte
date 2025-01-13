<script lang="ts">
import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';
import { t } from 'svelte-i18n';
import MobileDrawer from './MobileDrawer.svelte';

export let data: Bet;
</script>

<div class="rounded-[20px] bg-[#363A45] p-4 text-white">
	<div class="flex items-center justify-between text-[20px]">
		<div class="">
			<img
				class="mb-3 w-[73px]"
				src="/icons/bk/winline-big.svg"
				alt="" />
			<h2>{data.siteName || 'N/A'}</h2>
		</div>

		<div>
			<h3>{1234 }</h3>
		</div>
	</div>

	<div class="mb-4 mt-4 grid flex-1 grid-cols-2 gap-1">
		<div class="flex flex-col items-center justify-between gap-1">
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>{$t('stats.balance')}</h4>
				<p>{data.amounts.stake || '0'}</p>
			</div>
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>{$t('stats.sum')}</h4>
				<p>{data.amounts.stake || '0'}</p>
			</div>
		</div>
		<div class="flex flex-col items-center justify-between">
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>{$t('stats.wins')}</h4>
				<p>{data.amounts.win || '0'}</p>
			</div>
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>{$t('stats.bets')}</h4>
				<p>{1 || '0'}</p>
			</div>
		</div>
	</div>
	<MobileDrawer data="{data}" />
</div>
