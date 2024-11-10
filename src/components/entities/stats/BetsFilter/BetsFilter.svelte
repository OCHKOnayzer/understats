<script lang="ts">
import BetFilters from '$src/components/ui/betFilters/BetFilters.svelte';
import Calendar from '$src/components/ui/calendar/Calendar.svelte';
import FilterTabs from '$src/components/ui/filterTabs/filterTabs.svelte';
import SportsList from '$src/components/ui/sportsList/SportsList.svelte';
import { filterStore } from '$src/stores/filterStore';
import Icon from '@iconify/svelte';

import { fetchFilteredData } from '../api/api';

let isOpen = false;
let isLoading = false;

function toggleSidebar() {
	isOpen = !isOpen;
}

function handleDateSelect(event: CustomEvent<{ startDate: string; endDate: string }>) {
	filterStore.setDateRange(event.detail.startDate, event.detail.endDate);
}

async function applyFilters() {
	try {
		isLoading = true;
		const data = await fetchFilteredData($filterStore);
		console.log('Received filtered data:', data);
		isOpen = false;
	} catch (error) {
		console.error('Failed to apply filters:', error);
	} finally {
		isLoading = false;
		toggleSidebar();
	}
}
</script>

<button
	class="item"
	on:click={toggleSidebar}>
	<h2 class="title">Фильтры</h2>
	<img
		class="icon"
		src="/icons/circleArrow.svg"
		alt="icon"
		style:transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'} />
</button>

<aside
	class="sidebar"
	class:open={isOpen}>
	<div class="sidebar-content">
		<div class="flex items-center justify-between mb-[24px]">
			<h1 class="filters-title">Фильтры</h1>
			<button type="button" on:click={toggleSidebar} aria-label="Close sidebar" class="hover:text-[#0D111D] cursor-pointer transition-colors">
				<Icon font-size="24" icon="radix-icons:cross-1" />
			</button>
		</div>

		<Calendar on:select={handleDateSelect} />
		<FilterTabs />

		<label class="checkbox-container">
			<input
				type="checkbox"
				checked={$filterStore.withoutAggregation}
				on:change={() => filterStore.toggleAggregation()} />
			<span class="checkbox-custom" />
			<span class="label-text">Без агрегации</span>
		</label>

		<SportsList />
		<BetFilters />

		<div class="action-buttons">
			<button
				class="clear-button"
				on:click={() => filterStore.reset()}>
				Очистить фильтры
			</button>
			<button
				class="apply-button"
				on:click={applyFilters}
				disabled={isLoading}>
				{#if isLoading}
					Загрузка...
				{:else}
					Применить фильтры ({$filterStore.selectedSports.length})
				{/if}
			</button>
		</div>
	</div>
</aside>

<style>
.item {
	display: flex;
	padding: 30px;
	background-color: #000000;
	border-radius: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border: none;
	gap: 90px;
	align-items: center;
}

.item:hover {
	background-color: #1a1a1a;
}

.title {
	font-family: Manrope;
	font-size: 16px;
	font-weight: 600;
	margin-right: auto;
	color: white;
}

.icon {
	width: 24px;
	height: 24px;
	transition: transform 0.2s ease-in-out;
}

.sidebar {
	position: fixed;
	top: 0;
	right: -650px;
	width: 650px;
	height: 100vh;
	background-color: #20242f;
	transition: right 0.3s ease-in-out;
	z-index: 1000;
	color: white;
}

.sidebar.open {
	right: 0;
}

.sidebar-content {
	padding: 24px;
	height: 100%;
	overflow-y: auto;
}

.filters-title {
	font-size: 32px;
	font-weight: 600;
	color: white;
}

.checkbox-container {
	display: flex;
	align-items: center;
	margin: 24px 0;
	cursor: pointer;
	gap: 12px;
}

.checkbox-container input[type='checkbox'] {
	display: none;
}

.checkbox-custom {
	width: 24px;
	height: 24px;
	border: 2px solid white;
	border-radius: 4px;
	position: relative;
	background: transparent;
}

input[type='checkbox']:checked + .checkbox-custom::after {
	content: '';
	position: absolute;
	top: 4px;
	left: 8px;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}

.label-text {
	color: white;
	font-size: 16px;
	user-select: none;
}

.action-buttons {
	position: sticky;
	bottom: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-top: 32px;
	background: #20242f;
}

.clear-button,
.apply-button {
	padding: 16px;
	border-radius: 12px;
	font-weight: 500;
	font-size: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.clear-button {
	background: transparent;
	color: white;
	border: 1px solid #718096;
}

.clear-button:hover {
	background: rgba(255, 255, 255, 0.05);
}

.apply-button {
	background: #2f3241;
	color: white;
	border: none;
}

.apply-button:hover {
	background: #383b4d;
}

.apply-button:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}
</style>
