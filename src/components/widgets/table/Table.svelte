<script lang="ts">
import { t } from 'svelte-i18n';

import Spinner from '$components/ui/spinner/Spinner.svelte';
import * as Table from '$components/ui/table';
import { useAccounts } from '$src/services/accounts/useAccounts';
import { useUserProfile } from '$src/services/auth/useProfile';
import { currentUser } from '$src/stores/modalStore';
import { cn } from '$utils/utils';

import TableNoData from '$src/components/ui/tableNoData/TableNoData.svelte';
import AuthDemoButton from '../demo/demoButtons/AuthDemoButton.svelte';
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
	{ title: $t('accounts.betCount'), key: 'currency' }
];

const { query } = useAccounts();
const { query: profileQuery } = useUserProfile();

$: isAuthenticated = !!$currentUser;
$: isLoading = ($query.isLoading || $profileQuery.isLoading) && isAuthenticated;
$: accounts = isAuthenticated ? $query.data : [];
</script>

{#if !isAuthenticated}
	<AuthDemoButton />
{:else if isLoading}
	<div class="message-container">
		<Spinner
			color="#718096"
			size="{32}" />
		<h2 class="w-[260px] text-center text-xl text-[#718096]">{$t('accounts.loading')}</h2>
	</div>
{:else if accounts?.length}
	<div class="table-wrapper">
		<div class="table-container">
			<Table.Root class="mt-3 w-full caption-bottom text-[12px]">
				<Table.Header class="sticky top-0 bg-[#31384A]">
					<Table.Row class="border-none">
						{#each headers as header}
							<Table.Head class="max-w-[150px] truncate whitespace-nowrap sm:h-7 md:h-8 xl:h-10">
								<div class="flex items-center gap-1 overflow-hidden">
									<img
										class="flex-shrink-0 sm:h-2 sm:w-2 md:h-2 md:w-2 xl:h-4 xl:w-4"
										src="icons/bk/table.svg"
										alt="table" />
									<span class="overflow-hidden truncate sm:text-[9px] md:text-[10px] xl:text-[14px]">
										{header.title}
									</span>
								</div>
							</Table.Head>
						{/each}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each accounts as account, index (`${account.siteName}-${account.extendedId}-${index}`)}
						<Table.Row class="{cn(`${index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]'} text-[20px] active:bg-[#3D3A8540]`)}">
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
			</Table.Root>
		</div>
	</div>
{:else}
	<!-- <BetsNoTableData
		title="{$t('accounts.noAccountTitle')}"
		description="{$t('accounts.noAccountsDescription')}" /> -->
	<TableNoData
		title="{$t('accounts.noAccountTitle')}"
		description="{$t('accounts.noAccountsDescription')}"
		variant="{'accounts'}" />
{/if}

<style>
.message-container {
	display: flex;
	height: 90vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	background: #171b26;
	font-weight: 300;
	font-family: 'Manrope';
}

.table-wrapper {
	width: 100%;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	background: #171b26;
}

.table-container {
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	position: relative;
	box-sizing: border-box;
}

:global(.table-container table) {
	width: 100%;
	table-layout: auto;
}

:global(.table-container th) {
	min-width: 0;
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
