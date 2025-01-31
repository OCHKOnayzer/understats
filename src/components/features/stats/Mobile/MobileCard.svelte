<script lang="ts">
import { t } from 'svelte-i18n';

import MobileDrawer from './MobileDrawer.svelte';

import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';

const { data = {} as Bet } = $props<{ data: Bet }>();

let processedData = $state<Bet | null>(null);

$effect(() => {
	processedData = data || null;
});
</script>

{#if processedData}
	<div class="rounded-[20px] bg-[#363A45] p-4 text-white">
		<div class="mb-4 flex items-center justify-between text-[20px]">
			<!-- ...existing code... -->
		</div>

		<div class="mb-4 flex flex-col">
			<h2 class="text-[18px] font-bold text-[#be4040]">
				{processedData.siteName || ''}
			</h2>

			<div class="flex justify-between border-b-2 border-dashed border-[#20242F]">
				<div class="w-full pb-4">
					<h2 class="mb-2 text-[20px] font-bold">
						{processedData.event?.name1?.default || ''} - {processedData.event?.name2?.default || ''}
					</h2>
					<h3 class="text-[14px] font-medium">
						{processedData.outcome?.default || ''}
					</h3>
				</div>

				<div>
					<h2 class="text-[24px] font-medium text-[#5EC654]">
						{processedData.rate || ''}
					</h2>
				</div>
			</div>

			<div class="flex items-center justify-between pt-4">
				<div>
					<h2 class="text-[12px] font-normal">{$t('columns.bet.ammount')}</h2>
					<h3 class="text-[16px] font-bold">{Number(processedData.amounts?.stake) || 0}</h3>
				</div>
				<div>
					<h2 class="text-[12px] font-normal">{$t('columns.bet.result')}</h2>
					<h3 class="text-[16px] font-bold text-[#5EC654]">{processedData.amounts?.win || 0}</h3>
				</div>
			</div>
		</div>
		<MobileDrawer data="{processedData}" />
	</div>
{/if}

<!-- Не удалять, для агрегации по аккаунтам -->

<!-- <div class="flex flex-col items-center justify-between gap-1">
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
</div> -->
