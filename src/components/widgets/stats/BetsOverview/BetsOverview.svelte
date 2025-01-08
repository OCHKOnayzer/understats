<!-- <script lang="ts">
import { t } from 'svelte-i18n';
import { Loader } from 'lucide-svelte';

import * as Table from '$components/ui/table';
import MobileCard from '$src/components/features/stats/Mobile/MobileCard.svelte';
import { currentUser } from '$src/stores/modalStore';
import { mainTabs, mockData, subTabsMap } from '$src/stores/tabsStore';

import AuthDemoButton from '../../demo/demoButtons/AuthDemoButton.svelte';

import { goto } from '$app/navigation';
import Tabs from '$src/components/ui/tabs/Tabs.svelte';
import BetDetails from './BetDetails.svelte';

interface RowData {
	id: string;
	[key: string]: string | number | any;
}

interface AggregatedData {
	id: string;
	data: RowData[];
	columns: string[];
}

let showDetails = $state(false);
let isLoading = $state(false);
let selectedBetId = $state<string | null>(null);
let activeTab = $state('no-aggregation');
let activeSubTab = $state('all');
let selectedColumns = $state<string[]>([]);
let aggregatedData = $state<AggregatedData | null>(null);
let error = $state('');

let subTabs = $derived($subTabsMap[activeTab] || []);

let innerWidth = $state(0);

let isMobile = $derived(innerWidth < 400);

let isAuthenticated = $derived(!!$currentUser);

function getAggregatedData() {
	isLoading = true;
	error = '';

	try {
		aggregatedData = {
			id: '1',
			columns: $mockData[activeTab]?.columns || mockData['no-aggregation'].columns,
			data: $mockData[activeTab]?.data || mockData['no-aggregation'].data
		};
	} catch (e) {
		error = 'Ошибка при загрузке данных';
		console.error(e);
	} finally {
		isLoading = false;
	}
}

function handleTabChange(event: CustomEvent<string>) {
	activeTab = event.detail;
	activeSubTab = 'all';
	getAggregatedData();
}

function handleSubTabChange(event: CustomEvent<string>) {
	activeSubTab = event.detail;
	getAggregatedData();
}

function handleRowClick(row: RowData) {
	selectedBetId = row.id;
	showDetails = true;
	goto(`/bets/${row.id}`);
}
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

<section class="relative mt-[32px]">
	{#if showDetails && selectedBetId}
		<BetDetails betId="{selectedBetId}" />
	{:else}
		<div class="mb-[32px]">
			<Tabs
				tabs={$mainTabs}
				bind:activeTab="{activeTab}"
				variant="underline"
				on:tabChange="{handleTabChange}" />
		</div>

		<div>
			<Tabs
				tabs="{subTabs}"
				bind:activeTab="{activeSubTab}"
				variant="pills"
				on:tabChange="{handleSubTabChange}" />
		</div> -->
<!-- {#if isAuthenticated}
		{#if isMobile}
			<div class="grid grid-cols-1 gap-4">
				<MobileCard />
				<MobileCard />
				<MobileCard />
			</div>
		{:else if isLoading}
			<div class="flex h-40 items-center justify-center">
				<Loader />
			</div>
		{:else if error}
			<div class="p-4 text-red-500">
				{error}
			</div>
		{:else if aggregatedData}
			<div class="w-full overflow-hidden">
				<div class="relative w-full overflow-x-auto">
					<Table.Root class="w-full">
						<Table.Header class="bg-[#31384A] text-[12px]">
							<Table.Row>
								{#each aggregatedData.columns as column}
									<Table.Head class="border-[#262C3D]">
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
						<Table.Body class="text-[14px]">
							{#each aggregatedData.data as row}
								<Table.Row
									class="border-[#262C3D]"
									onclick="{() => handleRowClick(row)}">
									{#each aggregatedData.columns as column}
										<Table.Cell class="whitespace-nowrap">
											{row[column]}
										</Table.Cell>
									{/each}
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		{:else}
			<div class="p-4 text-center"> Нет данных </div>
		{/if}
	{:else}
		<AuthDemoButton />
	{/if}
</section> -->
-->
