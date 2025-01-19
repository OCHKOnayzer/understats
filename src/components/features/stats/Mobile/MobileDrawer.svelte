<script lang="ts">
import { t } from 'svelte-i18n';

import * as Drawer from '$components/ui/drawer/index.ts';
import Button from '$src/components/ui/button/button.svelte';

import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';

interface Props {
	data: Bet;
}

let { data }: Props = $props();

console.log(data);
</script>

<Drawer.Root>
	<Drawer.Trigger class="w-full focus:outline-none focus:ring-0">
		<Button
			class="h-[56px] w-full text-[16px]"
			variant="card">{$t('not.more')}</Button>
	</Drawer.Trigger>
	<Drawer.Content class="rounded-[16px] border-none bg-[#20242F] p-4 text-white focus:outline-none focus:ring-0">
		<Drawer.Header>
			<Drawer.Title class="text-left text-[30px]">{$t('not.more')}</Drawer.Title>
		</Drawer.Header>

		<div class="mb-[30px] rounded-[20px] bg-[#0D111D] p-4">
			<div class="mb-4 flex items-center justify-between text-[20px]">
				<!-- <div class="w-full rounded-[8px] bg-[#171B26]">
					<h2 class="p-2 text-[12px]">22222</h2>
				</div> -->
			</div>

			<div class="flex items-center justify-between text-[20px]">
				<div class="">
					<img
						class="mb-3 w-[73px]"
						src="/icons/bk/winline-big.svg"
						alt="" />
					<!-- <h2>Алексей Иванов</h2> -->
				</div>

				<!-- <div>
					<h3>ID 123413</h3>
				</div> -->
			</div>
		</div>

		<div class="rounded-[28px] bg-[#171B26] p-4">
			<div class="flex items-center justify-between">
				<h2>{data.event.competitionName.default}</h2>
			</div>

			<div class="mt-[12px]">
				<h2>{data.siteName}</h2>
			</div>

			<div class="flex justify-between border-b-2 border-dashed border-[#20242F]">
				<div class="w-full pb-4">
					<h2 class="mb-2 text-[20px] font-bold">{data.event.name1.default} - {data.event.name2.default}</h2>
					<h3 class="text-[14px] font-medium">{data.outcome.default}</h3>
				</div>

				<div>
					<h2 class="text-[24px] font-medium text-[#5EC654]">
						{data.rate}
					</h2>
				</div>
			</div>

			<div class="flex items-center justify-between pt-4">
				<div>
					<h2 class="text-[12px] font-normal">
						{$t('columns.bet.ammount')}
					</h2>
					<h3 class="text-[16px] font-bold">{+data.amounts.stake}</h3>
				</div>
				<div>
					<h2 class="text-[12px] font-normal">{$t('columns.bet.result')}</h2>
					<h3 class="text-[16px] font-bold text-[#5EC654]">{data.amounts.win}</h3>
				</div>
			</div>
		</div>
	</Drawer.Content>
</Drawer.Root>

<!-- <div class="rounded-[28px] bg-[#171B26] p-4">
	<div class="flex items-center justify-between">
		<img
			src="/icons/money.svg"
			alt="" />
		<Badge
			variant="stats"
			class="">Баланс</Badge>
	</div>

	<div class="mt-[20px]">
		<h4 class="text-[32px]">20 005 000, 00 ₽</h4>
	</div>
</div> -->
