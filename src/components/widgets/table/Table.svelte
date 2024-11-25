<script lang="ts">

import * as Table from '$components/ui/table';
import * as m from '$m';
import { useAccounts } from '$src/services/accounts/useAccounts';
import { allAccounts } from '$stores/store';
import { cn } from '$utils/utils';
import { t } from 'svelte-i18n';
import Spinner from '$components/ui/spinner/Spinner.svelte';

const { query } = useAccounts();

$: $query.data && allAccounts.set($query.data);

$: console.log('Query state:', $query.status, 'Data length:', $query.data?.length);
</script>

<div class="mt-5 relative">
	<Table.Root>
		<Table.Header class="tect-[10px] bg-[#31384A]">
			<Table.Row class="border-none">
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.bookmaker')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.auth')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.login')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.balance')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.name')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.mail')}</span>
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.phone')}</span>
					</div>
				</Table.Head>
				<Table.Head class="text-center">
					<div class="flex items-center gap-1 text-center">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.regData')}</span>
					</div>
				</Table.Head>
				<Table.Head class="text-center">
					<div class="flex items-center gap-1 text-center">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.lastBet')}</span>
					</div>
				</Table.Head>
				<Table.Head class="text-center">
					<div class="flex gap-1 text-left">
						<img
							src="icons/bk/table.svg"
							alt="table" />
							<span class="whitespace-pre-line">{$t('accounts.betCount')}</span>
					</div>
				</Table.Head>
			</Table.Row>
		</Table.Header>

		{#if $query.isLoading}
			<Table.Body>
				<Table.Row>
					<Table.Cell colspan={10} class="border-none">
						<div class="h-[90vh] flex flex-col items-center justify-center">
							<Spinner color="#718096" size={32} />
							<h2 class="text-xl w-[260px] text-center text-[#718096]">{$t('accounts.loading')}</h2>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		{:else if $query.data?.length > 0}
			<Table.Body>
				{#each $query.data as account, index (`${account.siteName}-${account.extendedId}-${index}`)}
					<Table.Row class="{cn(`${index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]'} active:bg-[#3D3A8540]`)}">
						<Table.Cell>{account.siteName || 'N/A'}</Table.Cell>
						<Table.Cell>{account.extendedId || 'N/A'}</Table.Cell>
						<Table.Cell>
							{account.login ? m.connected() : m.disconnected()}
						</Table.Cell>
						<Table.Cell>{account.balance}</Table.Cell>
						<Table.Cell>{account.fullName}</Table.Cell>
						<Table.Cell>{account.email}</Table.Cell>
						<Table.Cell>{account.phone}</Table.Cell>
						<Table.Cell>
							{account.registrationDate}
						</Table.Cell>
						<Table.Cell>lastBet</Table.Cell>
						<Table.Cell>{account.currency}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		{:else}
			<Table.Body>
				<Table.Row>
					<Table.Cell colspan={10} class="border-none">
						<div class="h-[90vh] flex items-center justify-center flex-col">
							<img class="mb-2" src="/icons/accounts/file.svg" alt="" />
							<h2 class="text-xl w-[260px] text-center text-[#718096]">
								{$query.isError ? $t('accounts.noAuth') : $t(' accounts.noAccounts')}
							</h2>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		{/if}
	</Table.Root>
</div>
