<script lang="ts">
import { Loader } from 'lucide-svelte';
import { onMount } from 'svelte';

import * as Table from '$components/ui/table';
import Tabs from '$components/ui/tabs/Tabs.svelte';

import BetDetails from './BetDetails.svelte';

import { goto } from '$app/navigation';

interface AggregatedData {
	id: string;
	data: any[];
	columns: string[];
}

let showDetails = false;
let selectedBetId: string | null = null;
let activeTab = 'no-aggregation';
let activeSubTab = 'all';
let selectedColumns: string[] = [];
let aggregatedData: AggregatedData | null = null;
let isLoading = false;
let error = '';

const mainTabs = [
	{ id: 'no-aggregation', name: 'Без агрегации' },
	{ id: 'by-accounts', name: 'По аккаунтам' },
	{ id: 'by-sport', name: 'По спорту' },
	{ id: 'by-bookmaker', name: 'По букмекеру' },
	{ id: 'by-period', name: 'По периоду' },
	{ id: 'by-weeks', name: 'По неделям' },
	{ id: 'by-weekdays', name: 'По дням недели' },
	{ id: 'by-coefficients', name: 'По коэффициентам' },
	{ id: 'by-amount', name: 'По сумме' }
];

const subTabsMap = {
	'no-aggregation': [
		{ id: 'all', name: 'Все ставки' },
		{ id: 'win', name: 'Выигрышные' },
		{ id: 'lose', name: 'Проигрышные' },
		{ id: 'pending', name: 'В ожидании' }
	],
	'by-accounts': [
		{ id: 'all', name: 'Все букмекеры' },
		{ id: 'fonbet', name: 'Фонбет' },
		{ id: 'winline', name: 'Winline' },
		{ id: '1xbet', name: '1xBet' },
		{ id: 'betboom', name: 'BetBoom' }
	],
	'by-sport': [
		{ id: 'all', name: 'Все виды спорта' },
		{ id: 'football', name: 'Футбол' },
		{ id: 'hockey', name: 'Хоккей' },
		{ id: 'basketball', name: 'Баскетбол' },
		{ id: 'tennis', name: 'Теннис' }
	],
	'by-bookmaker': [
		{ id: 'all', name: 'Все букмекеры' },
		{ id: 'fonbet', name: 'Фонбет' },
		{ id: 'winline', name: 'Winline' },
		{ id: '1xbet', name: '1xBet' },
		{ id: 'betboom', name: 'BetBoom' }
	],
	'by-period': [
		{ id: 'all', name: 'Весь период' },
		{ id: 'today', name: 'Сегодня' },
		{ id: 'week', name: 'Неделя' },
		{ id: 'month', name: 'Месяц' },
		{ id: 'year', name: 'Год' }
	],
	'by-weeks': [
		{ id: 'all', name: 'Все недели' },
		{ id: 'current', name: 'Текущая неделя' },
		{ id: 'last', name: 'Прошлая неделя' },
		{ id: 'last-4', name: 'Последние 4 недели' }
	],
	'by-weekdays': [
		{ id: 'all', name: 'Все дни' },
		{ id: 'weekdays', name: 'Будни' },
		{ id: 'weekend', name: 'Выходные' }
	],
	'by-coefficients': [
		{ id: 'all', name: 'Все коэффициенты' },
		{ id: 'low', name: 'До 1.5' },
		{ id: 'medium', name: '1.5 - 2.5' },
		{ id: 'high', name: '2.5 - 5.0' },
		{ id: 'very-high', name: 'Выше 5.0' }
	],
	'by-amount': [
		{ id: 'all', name: 'Все суммы' },
		{ id: 'low', name: 'До 1000₽' },
		{ id: 'medium', name: '1000₽ - 5000₽' },
		{ id: 'high', name: '5000₽ - 10000₽' },
		{ id: 'very-high', name: 'Выше 10000₽' }
	]
};

const mockData = {
	'no-aggregation': {
		columns: ['Дата', 'Букмекер', 'Спорт', 'Событие', 'Ставка', 'Коэффициент', 'Сумма', 'Результат'],
		data: [
			{
				id: '1',
				Дата: '2024-01-15',
				Букмекер: 'Фонбет',
				Спорт: 'Футбол',
				Событие: 'Спартак - ЦСКА',
				Ставка: 'П1',
				Коэффициент: '1.85',
				Сумма: '1000₽',
				Результат: 'Выигрыш'
			},
			{
				id: '2',
				Дата: '2024-01-16',
				Букмекер: 'Winline',
				Спорт: 'Хоккей',
				Событие: 'СКА - ЦСКА',
				Ставка: 'ТБ 4.5',
				Коэффициент: '2.1',
				Сумма: '2000₽',
				Результат: 'Проигрыш'
			}
		]
	},
	'by-accounts': {
		columns: ['Букмекер', 'Количество ставок', 'Общая сумма', 'Выигрыш', 'ROI'],
		data: [
			{
				id: '1',
				Букмекер: 'Фонбет',
				'Количество ставок': '150',
				'Общая сумма': '150000₽',
				Выигрыш: '+25000₽',
				ROI: '16.7%'
			},
			{
				id: '2',
				Букмекер: 'Winline',
				'Количество ставок': '120',
				'Общая сумма': '100000₽',
				Выигрыш: '-5000₽',
				ROI: '-5%'
			}
		]
	}
};

$: subTabs = subTabsMap[activeTab] || [];

function getAggregatedData() {
	isLoading = true;
	error = '';

	try {
		aggregatedData = {
			id: '1',
			columns: mockData[activeTab]?.columns || mockData['no-aggregation'].columns,
			data: mockData[activeTab]?.data || mockData['no-aggregation'].data
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

function handleRowClick(row: any) {
	selectedBetId = row.id;
	showDetails = true;
	goto(`/bets/${row.id}`);
}

onMount(() => {
	getAggregatedData();
});
</script>

<section class="relative mt-[32px]">
	{#if showDetails && selectedBetId}
		<BetDetails betId="{selectedBetId}" />
	{:else}
		<div class="mb-[32px]">
			<Tabs
				tabs="{mainTabs}"
				bind:activeTab="{activeTab}"
				variant="underline"
				on:tabChange="{handleTabChange}" />
		</div>

		<div class="">
			<Tabs
				tabs="{subTabs}"
				bind:activeTab="{activeSubTab}"
				variant="pills"
				on:tabChange="{handleSubTabChange}" />
		</div>

		{#if isLoading}
			<div class="flex h-40 items-center justify-center">
				<Loader />
			</div>
		{:else if error}
			<div class="p-4 text-red-500">
				{error}
			</div>
		{:else if aggregatedData}
			<Table.Root>
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
							on:click="{() => handleRowClick(row)}">
							{#each aggregatedData.columns as column}
								<Table.Cell>
									{row[column]}
								</Table.Cell>
							{/each}
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		{:else}
			<div class="p-4 text-center"> Нет данных </div>
		{/if}
	{/if}
</section>
