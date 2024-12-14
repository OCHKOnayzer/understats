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

{#if !isAuthenticated}
    <div class="message-container">
        <img
            class="mb-2"
            src="/icons/accounts/file.svg"
            alt="" />
        <h2 class="w-[260px] text-center text-xl text-[#718096]">
            {$t('accounts.noAuth')}
        </h2>
    </div>
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
            <Table.Root class="w-full caption-bottom text-[12px] mt-3">
                <Table.Header class="bg-[#31384A] sticky top-0">
                    <Table.Row class="border-none">
                        {#each headers as header}
                            <Table.Head class="sm:h-5 whitespace-nowrap min-w-[120px]">
                                <div class="flex items-center gap-1">
                                    <img
                                        src="icons/bk/table.svg"
                                        alt="table" />
                                    <span class="xl:text-[10px] sm:text-[8px]">{header.title}</span>
                                </div>
                            </Table.Head>
                        {/each}
                    </Table.Row>
                </Table.Header>
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
            </Table.Root>
        </div>
    </div>
{:else}
    <div class="message-container">
        <img
            class="mb-2"
            src="/icons/accounts/file.svg"
            alt="" />
        <h2 class="w-[260px] text-center text-xl text-[#718096]">
            {$t('accounts.noAccounts')}
        </h2>
    </div>
{/if}

<style>
.message-container {
    display: flex;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #171B26;
    border-radius: 8px;
}

.table-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background: #171B26;
    border-radius: 8px;
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
    min-width: 800px;
}

@media screen and (max-width: 768px) {
    .table-container {
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        width: calc(100% + 1rem);
    }
}
</style>
