<script lang="ts">
import { Loader } from 'lucide-svelte';
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import * as Table from '$components/ui/table';

let { betId }: { betId: string } = $props();

interface DetailedData {
	id: string;
	data: any;
	availableColumns: string[];
}

let selectedColumns = $state<string[]>([]);
let detailedData = $state<DetailedData | null>(null);
let isLoading = $state<boolean>(false);
let error = $state<string>('');

const defaultColumns = ['date', 'bookmaker', 'sport', 'event', 'bet_type', 'coefficient', 'amount', 'result'];

let columnOptions = defaultColumns.map((col) => ({
	id: col,
	label: col,
	checked: true
}));

function toggleColumn(columnId: string) {
	const index = selectedColumns.indexOf(columnId);
	if (index === -1) {
		selectedColumns = [...selectedColumns, columnId];
	} else {
		selectedColumns = selectedColumns.filter((id) => id !== columnId);
	}
}

async function fetchDetailedData() {
	isLoading = true;
	error = '';
	try {
		const response = await fetch(`/api/bets/${betId}/details`);
		const data = await response.json();
		detailedData = data;
		if (selectedColumns.length === 0) {
			selectedColumns = defaultColumns;
		}
	} catch (e: any) {
		error = e.message;
	} finally {
		isLoading = false;
	}
}

onMount(() => {
	fetchDetailedData();
});
</script>

<div class="p-4">
	<div class="mb-4 flex flex-wrap gap-2">
		{#each columnOptions as option}
			<label class="inline-flex items-center">
				<input
					type="checkbox"
					class="form-checkbox h-5 w-5 text-indigo-600"
					checked="{selectedColumns.includes(option.id)}"
					onchange="{() => toggleColumn(option.id)}" />
				<span class="ml-2 text-gray-700">{option.label}</span>
			</label>
		{/each}
	</div>

	{#if isLoading}
		<div class="flex h-40 items-center justify-center">
			<Loader size="24" />
		</div>
	{:else if error}
		<div class="p-4 text-red-500">
			{error}
		</div>
	{:else if detailedData}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					{#each selectedColumns as column}
						<Table.Head>
							<div class="flex items-center gap-1">
								<img
									src="icons/bk/table.svg"
									alt="table" />
								<span class="whitespace-pre-line">{column}</span>
							</div>
						</Table.Head>
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					{#each selectedColumns as column}
						<Table.Cell>
							{detailedData.data[column]}
						</Table.Cell>
					{/each}
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<div class="p-4 text-center"> {$t('other.no_data_available')} </div>
	{/if}
</div>
