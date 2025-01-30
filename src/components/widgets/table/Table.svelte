<script lang="ts">
import { getCoreRowModel, getSortedRowModel, type CellContext, type SortingState } from '@tanstack/table-core';
import { t } from 'svelte-i18n';

import Spinner from '$components/ui/spinner/Spinner.svelte';
import * as Table from '$components/ui/table';
import { createSvelteTable, FlexRender } from '$src/components/ui/data-table';
import TableNoData from '$src/components/ui/tableNoData/TableNoData.svelte';
import { useAccounts } from '$src/services/accounts/useAccounts';
import { useUserProfile } from '$src/services/auth/useProfile';
import { currentUser } from '$src/stores/modalStore';
import { generateAccountKey } from '$src/utils/functions/generateAccountKey';
import { cn } from '$src/utils/utils';

import AuthDemoButton from '../demo/demoButtons/AuthDemoButton.svelte';

import { accountsColumns } from './accountsColumns';
import AccountsMobile from './AccountsMobile.svelte';

import type { IAccountResponse } from '$src/types/accounts';

const { query } = useAccounts();
const { query: profileQuery } = useUserProfile();

let innerWidth = $state(typeof window !== 'undefined' ? window.innerWidth : 1024);
let isMobile = $derived(innerWidth < 400);
let accounts = $state<IAccountResponse[]>([]);
let isAuthenticated = $derived(!!$currentUser);

let isInitializing = $derived($profileQuery.isInitialLoading);
let isLoading = $derived(isAuthenticated && ($query.isLoading || $profileQuery.isLoading));

let sorting = $state<SortingState>([]);

$effect(() => {
	localStorage.setItem('tableSorting', JSON.stringify(sorting));
});

$effect(() => {
	accounts = isAuthenticated ? $query.data || [] : [];
});

const table = createSvelteTable({
	get data() {
		return accounts;
	},
	columns: accountsColumns,
	getCoreRowModel: getCoreRowModel(),
	getSortedRowModel: getSortedRowModel(),
	onSortingChange: (updater) => {
		if (typeof updater === 'function') {
			sorting = updater(sorting);
		} else {
			sorting = updater;
		}
	},
	state: {
		get sorting() {
			return sorting;
		}
	}
});

type CellContextType = CellContext<IAccountResponse, unknown>;
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

{#if isInitializing}
	<div class="message-container">
		<Spinner
			color="#718096"
			size="{32}" />
		<h2 class="w-[260px] text-center text-xl text-[#718096]">{$t('accounts.loading')}</h2>
	</div>
{:else if !isAuthenticated}
	<AuthDemoButton />
{:else if isLoading}
	<div class="message-container">
		<Spinner
			color="#718096"
			size="{32}" />
		<h2 class="w-[260px] text-center text-xl text-[#718096]">{$t('accounts.loading')}</h2>
	</div>
{:else if isMobile}
	<div class="absolute left-0 right-0 flex flex-col gap-4">
		{#each accounts as account}
			<AccountsMobile account="{account}" />
		{/each}
	</div>
{:else if accounts?.length}
	<div class="table-wrapper">
		<div class="table-container">
			<Table.Root class="">
				<Table.Header class="top-0 bg-[#31384A]">
					{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
						<Table.Row class="border-none">
							{#each headerGroup.headers as header (header.id)}
								<Table.Head class="">
									<div class="flex gap-2 pl-2 pr-7">
										<div class="text-[14px]">
											<FlexRender
												content="{header.column.columnDef.header}"
												context="{header.getContext()}" />
										</div>
									</div>
								</Table.Head>
							{/each}
						</Table.Row>
					{/each}
				</Table.Header>
				<Table.Body>
					{#each table.getRowModel().rows as row, index (generateAccountKey(row.original, index))}
						<Table.Row class="{cn(`${index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]'} cursor-pointer text-[14px] transition-all duration-300 ease-in-out hover:bg-[#3D3A8540]`)}">
							{#each row.getVisibleCells() as cell (cell.id)}
								<Table.Cell>
									<div class="cell-content">
										<FlexRender
											content="{cell.column.columnDef.cell}"
											context="{cell.getContext() as CellContextType}" />
									</div>
								</Table.Cell>
							{/each}
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
{:else}
	<div class="data-container">
		<TableNoData
			title="{$t('accounts.noAccountTitle')}"
			description="{$t('accounts.noAccountsDescription')}"
			variant="{'accounts'}" />
	</div>
{/if}

<style lang="postcss">
.message-container,
.data-container {
	@apply flex h-[90vh] w-full flex-col items-center justify-center;
}

.message-container {
	@apply z-[5000] bg-[#171b26] font-[Manrope] font-light;
}
</style>
