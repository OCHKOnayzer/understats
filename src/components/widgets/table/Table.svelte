<script lang="ts">
	import { t } from 'svelte-i18n';
	
	import Spinner from '$components/ui/spinner/Spinner.svelte';
	import * as Table from '$components/ui/table';
	import { useAccounts } from '$src/services/accounts/useAccounts';
	import { useUserProfile } from '$src/services/auth/useProfile';
	import { currentUser } from '$src/stores/modalStore';
	import { cn } from '$utils/utils';
	
	const headers = [
		{ title: $t('accounts.bookmaker'), key: 'siteName' },
		{ title: $t('accounts.auth'), key: 'login' },
		{ title: $t('accounts.login'), key: 'extendedId' },
		{ title: $t('accounts.balance'), key: 'balance' },
		{ title: $t('accounts.name'), key: 'fullName' },
		{ title: $t('accounts.mail'), key: 'email' },
		{ title: $t('accounts.phone'), key: 'phone' },
		{ title: $t('accounts.regData'), key: 'registrationDate' },
		{ title: $t('accounts.lastBet'), key: 'lastBet' },
		{ title: $t('accounts.betCount'), key: 'currency' },
	];

	const { query } = useAccounts();
	const { query: profileQuery } = useUserProfile();
	
	$: isAuthenticated = !!$currentUser;
	$: isLoading = ($query.isLoading || $profileQuery.isLoading) && isAuthenticated;
	$: accounts = isAuthenticated ? $query.data : [];
</script>
	<Table.Root class="w-full caption-bottom text-[12px] mt-3">
		<Table.Header class="bg-[#31384A]">
			<Table.Row class="border-none">
				{#each headers as header}
					<Table.Head class="sm:h-5">
						<div class="flex items-center gap-1">
							<img
								src="icons/bk/table.svg"
								alt="table" />
							<span class="whitespace-pre-line xl:text-[10px] sm:text-[7px]">{header.title}</span>
						</div>
					</Table.Head>
				{/each}
			</Table.Row>
		</Table.Header>
		{#if !isAuthenticated}
			<Table.Body>
				<Table.Row>
					<Table.Cell
						colspan="{10}"
						class="border-none">
						<div class="flex h-[90vh] flex-col items-center justify-center">
							<img
								class="mb-2"
								src="/icons/accounts/file.svg"
								alt="" />
							<h2 class="w-[260px] text-center text-xl text-[#718096]">
								{$t('accounts.noAuth')}
							</h2>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		{:else if isLoading}
			<Table.Body>
				<Table.Row>
					<Table.Cell
						colspan="{10}"
						class="border-none">
						<div class="flex h-[90vh] flex-col items-center justify-center">
							<Spinner
								color="#718096"
								size="{32}" />
							<h2 class="w-[260px] text-center text-xl text-[#718096]">{$t('accounts.loading')}</h2>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		{:else if accounts?.length}
			<Table.Body>
				{#each accounts as account, index (`${account.siteName}-${account.extendedId}-${index}`)}
					<Table.Row class="{cn(`${index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]'} active:bg-[#3D3A8540]`)}">
						<Table.Cell>{account.siteName || 'N/A'}</Table.Cell>
						<Table.Cell>{account.extendedId || 'N/A'}</Table.Cell>
						<Table.Cell>
							{account.login ? 'Подключен' : 'Не подключен'}
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
					<Table.Cell
						colspan="{10}"
						class="border-none">
						<div class="flex h-[90vh] flex-col items-center justify-center">
							<img
								class="mb-2"
								src="/icons/accounts/file.svg"
								alt="" />
							<h2 class="w-[260px] text-center text-xl text-[#718096]">
								{$t('accounts.noAccounts')}
							</h2>
						</div>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		{/if}
	</Table.Root>


<style>
	@media (max-width: 1024px) {
		.hello {
			max-width: 1024px;
		}
	}
</style>