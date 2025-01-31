<script lang="ts">
import { t } from 'svelte-i18n';

import { formatDate } from '$src/utils/functions/formatDate';

let { account } = $props();
console.log(account);

const card = [
	{
		title: $t('accounts.regData'),
		value: formatDate(account.regDate)
	},
	{
		title: $t('accounts.lastBet'),
		value: account.lastBet
	},
	{
		title: $t('accounts.betCount'),
		value: account.betsCount
	},
	{
		title: $t('accounts.betSum'),
		value: account.betSum
	},
	{
		title: $t('accounts.today'),
		value: account.todayBet
	},
	{
		title: $t('accounts.yesterday'),
		value: account.yesterdayBet
	},
	{
		title: $t('accounts.week'),
		value: account.weekBet
	}
];
</script>

<section class="rounded-[28px] bg-[#363A45] p-4 text-white">
	<div class="flex flex-col">
		<div class="flex gap-2 text-[12px]">
			<h2>ID: {account.clientSeq}</h2>
			<h2>{$t('accounts.login')}: {account.login}</h2>
		</div>
		<h2 class="text-[16px]">{account.siteName}</h2>
		<h2 class="text-[20px] leading-[26px]">{account.fullName ? account.fullName : $t('accounts.noName')}</h2>

		<div class="flex flex-wrap gap-2 text-[15px]">
			<span class="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
				{account.email ? account.email : $t('accounts.noMail')}
			</span>
			<span class="text-white">·</span>
			<span class="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
				{account.phone ? account.phone : $t('accounts.noPhone')}
			</span>
		</div>
	</div>
	<div class="card-wrapper grid grid-cols-6 grid-rows-3">
		{#each card as { title, value } (title)}
			<div class="card">
				<h2 class="text-[12px] font-normal text-white">{title}</h2>
				<h2 class="text-[16px] font-medium text-white">{value}</h2>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
.card-wrapper {
	@apply mt-[20px] grid gap-2;
}

.card {
	@apply rounded-2xl bg-[#171B26] p-4;

	&:nth-child(1) {
		@apply col-span-3;
	}
	&:nth-child(2) {
		@apply col-span-3;
	}
	&:nth-child(3) {
		@apply col-span-3;
	}
	&:nth-child(4) {
		@apply col-span-3;
	}
	&:nth-child(5) {
		@apply col-span-2;
	}
	&:nth-child(6) {
		@apply col-span-2;
	}
	&:nth-child(7) {
		@apply col-span-2;
	}
}

h2 {
	@apply mb-2;
}
</style>
