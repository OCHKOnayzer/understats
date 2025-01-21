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

import type { IAccountResponse } from '$src/types/accounts';
import AuthDemoButton from '../demo/demoButtons/AuthDemoButton.svelte';
import { accountsColumns } from './accountsColumns';
import DataTableIdButton from './data-table-id-button.svelte';

const { query } = useAccounts();
const { query: profileQuery } = useUserProfile();

let accounts = $state<IAccountResponse[]>([]);
let isAuthenticated = $derived(!!$currentUser);
let isLoading = $derived(isAuthenticated && ($query.isLoading || $profileQuery.isLoading));

let sorting = $state<SortingState>(
	(() => {
		try {
			const saved = localStorage.getItem('tableSorting');
			return saved ? JSON.parse(saved) : [];
		} catch {
			return [];
		}
	})()
);

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
		localStorage.setItem('tableSorting', JSON.stringify(sorting));
	},
	state: {
		get sorting() {
			return sorting;
		}
	}
});

type CellContextType = CellContext<IAccountResponse, unknown>;

const renderHeader = (header: unknown): unknown => {
	if (typeof header === 'function') {
		return header();
	}
	if (typeof header === 'string') {
		return $t(header);
	}
	return header;
};
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
					{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
						<Table.Row class="border-none">
							{#each headerGroup.headers as header (header.id)}
								<Table.Head class="w-[350px]">
									<div class="header-content">
										<img
											class="header-icon {header.column.getIsSorted() === 'desc' ? 'rotate-180' : ''}
											{typeof header.column.columnDef.header === 'function' ? 'transition-transform duration-200' : ''}"
											src="icons/bk/table.svg"
											alt="table" />
										<div class="header-text-wrapper">
											<span class="header-text {header.column.getIsSorted() ? 'font-bold' : ''}">
												{#if typeof header.column.columnDef.header === 'function'}
													<DataTableIdButton column="{header.column}" />
												{:else}
													{renderHeader(header.column.columnDef.header)}
												{/if}
											</span>
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

.table-wrapper {
	@apply relative w-full overflow-hidden bg-[#171b26];
}

.table-container {
	@apply relative w-full overflow-x-auto;
	-webkit-overflow-scrolling: touch;
}

.header-content {
	@apply flex h-[40px] w-full items-center gap-1 px-2;
}

.header-icon {
	@apply flex-shrink-0 sm:h-2 sm:w-2 md:h-2 md:w-2 xl:h-4 xl:w-4;
}

.header-text-wrapper {
	@apply flex min-w-0 flex-1 items-center overflow-hidden;
	max-height: 32px;
}

.header-text {
	@apply block w-full whitespace-normal sm:text-[9px] md:text-[12px] xl:text-[12px];
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-height: 16px;
	overflow: hidden;
}

.rotate-180 {
	transform: rotate(180deg);
}

:global(.table-container table) {
	@apply w-full table-auto;
}

:global(.table-container th) {
	@apply min-w-[150px] max-w-[350px];
}

:global(.table-container td) {
	@apply p-2;
}

.cell-content {
	@apply min-w-0 whitespace-normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
