<script lang="ts">
import { t } from 'svelte-i18n';

import * as Drawer from '$components/ui/drawer/index.ts';
import Button from '$src/components/ui/button/button.svelte';
import type { Bet } from '$src/types/bet';


const { data = {} as Bet } = $props<{ data: Bet }>();

let processedData = $state<Bet | null>(null);

$effect(() => {
	processedData = data || null;
});

function getLegsCount(bet: Bet): number {
	return bet.legs?.length || 0;
}
</script>

{#if processedData}
	<div class="rounded-[20px] bg-[#363A45] p-4 text-white">
		<div class="mb-4 flex items-center justify-between text-[20px]">
			<div class="flex items-center gap-2">
				<span class="text-[#5EC654]">Экспресс</span>
				<span class="text-[14px] text-gray-400">({getLegsCount(processedData)} {$t('stats.event')})</span>
			</div>
		</div>

		<div class="mb-4 flex flex-col">
			<h2 class="text-[18px] font-bold text-[#be4040]">
				{processedData.siteName || ''}
			</h2>

			<div class="flex justify-between border-b-2 border-dashed border-input">
				<div class="w-full pb-4">
					<h2 class="mb-2 text-[20px] font-bold">
						{getLegsCount(processedData)}
						{$t('stats.event')}
					</h2>
				</div>

				<div>
					<h2 class="text-[24px] font-medium text-[#5EC654]">
						{processedData.rate?.toFixed(2) || ''}
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

		<Drawer.Root>
			<Drawer.Trigger class="w-full focus:outline-none focus:ring-0">
				<Button
					class="h-[56px] w-full text-[16px]"
					variant="card">
					{$t('not.more')}
				</Button>
			</Drawer.Trigger>
			<Drawer.Content class="rounded-[16px] border-none bg-input p-4 text-white focus:outline-none focus:ring-0">
				<Drawer.Header>
					<Drawer.Title class="text-left text-[30px]">{$t('not.more')}</Drawer.Title>
				</Drawer.Header>

				<div class="mb-[30px] rounded-[20px] bg-blackPrimary p-4">
					<div class="flex items-center justify-between text-[20px]">
						<div class="">
							<img
								class="mb-3 w-[73px]"
								src="/icons/bk/{processedData.siteName.toLowerCase()}-big.svg"
								alt="" />
						</div>
					</div>
				</div>

				{#if processedData.legs}
					{#each processedData.legs as leg}
						<div class="mb-4 rounded-[28px] bg-[#171B26] p-4">
							<div class="flex items-center justify-between">
								<h2>{leg.event.competitionName?.ru || leg.event.competitionName?.default}</h2>
							</div>

							<div class="flex justify-between border-b-2 border-dashed border-input">
								<div class="w-full pb-4">
									<h2 class="mb-2 text-[20px] font-bold">
										{leg.event.name1?.ru || leg.event.name1?.default} - {leg.event.name2?.ru || leg.event.name2?.default}
									</h2>
									<h3 class="text-[14px] font-medium">
										{leg.outcome?.ru || leg.outcome?.default}
									</h3>
								</div>

								<div>
									<h2 class="text-[24px] font-medium text-[#5EC654]">
										{leg.rate?.toFixed(2)}
									</h2>
								</div>
							</div>

							<div class="mt-4 flex items-center justify-between">
								<div>
									<h2 class="text-[12px] font-normal">{$t('express_bet_modal.status')}</h2>
									<h3 class="text-[16px] font-bold {leg.status === 'Win' ? 'text-[#5EC654]' : 'text-[#be4040]'}">
										{leg.status === 'Win' ? $t('express_bet_modal.status_won') : $t('express_bet_modal.status_lost')}
									</h3>
								</div>
								<div>
									<h2 class="text-[12px] font-normal">{$t('express_bet_modal.date')}</h2>
									<h3 class="text-[16px] font-bold">
										{new Date(leg.dates.placed).toLocaleString('ru-RU')}
									</h3>
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</Drawer.Content>
		</Drawer.Root>
	</div>
{/if}

<style lang="postcss">
:global(.drawer-content) {
	max-height: 80vh;
	overflow-y: auto;
	padding-bottom: 100px !important;
}

:global(.drawer-content > div) {
	max-height: calc(100vh - 200px);
	overflow-y: auto;
	padding-bottom: 20px;
}

:global(.drawer-content::-webkit-scrollbar),
:global(.drawer-content > div::-webkit-scrollbar) {
	width: 8px;
}

:global(.drawer-content::-webkit-scrollbar-track),
:global(.drawer-content > div::-webkit-scrollbar-track) {
	background: #2a2e39;
	border-radius: 4px;
}

:global(.drawer-content::-webkit-scrollbar-thumb),
:global(.drawer-content > div::-webkit-scrollbar-thumb) {
	background: #6660ff;
	border-radius: 4px;
}

:global(.drawer-content::-webkit-scrollbar-thumb:hover),
:global(.drawer-content > div::-webkit-scrollbar-thumb:hover) {
	background: #5550ee;
}

:global(.drawer-overlay) {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes overlayShow {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
