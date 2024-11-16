<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

const timeRanges = [
	{ value: 'halfYear', label: 'Полгода' },
	{ value: '3months', label: '3 месяца' },
	{ value: 'month', label: 'Месяц' },
	{ value: 'week', label: 'Неделя' },
	{ value: '3days', label: '3 дня' }
] as const;

const itemsPerPageOptions = [10, 20, 30, 50];

let totalPages = 6;

function goToPage(page: number) {
	if (page >= 1 && page <= totalPages) {
		filterStore.setPage(page);
	}
}

function getPageNumbers() {
	const current = $filterStore.pagination.currentPage;
	const pages = [];

	if (totalPages <= 7) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	} else {
		pages.push(1);

		if (current > 3) {
			pages.push('...');
		}

		let start = Math.max(2, current - 1);
		let end = Math.min(totalPages - 1, current + 1);

		if (current <= 3) {
			end = 4;
		}
		if (current >= totalPages - 2) {
			start = totalPages - 3;
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		if (current < totalPages - 2) {
			pages.push('...');
		}

		pages.push(totalPages);
	}

	return pages;
}

$: pages = getPageNumbers();
$: showNext = $filterStore.pagination.currentPage < totalPages;
$: showPrev = $filterStore.pagination.currentPage > 1;
</script>

<div class="pagination-wrapper">
	<div class="time-range-buttons">
		{#each timeRanges as range}
			<button
				class="time-range-btn"
				class:active={$filterStore.pagination.timeRange === range.value}
				on:click={() => filterStore.setTimeRange(range.value)}>
				{range.label}
			</button>
		{/each}
	</div>

	<div class="pagination-controls">
		<div class="items-per-page">
			<span class="label">Показать: {$filterStore.pagination.itemsPerPage}</span>
			<div class="dropdown">
				<select
					value={$filterStore.pagination.itemsPerPage}
					on:change={(e) => filterStore.setItemsPerPage(parseInt(e.currentTarget.value))}>
					{#each itemsPerPageOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
				<svg
					class="arrow-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M6 9l6 6 6-6" />
				</svg>
			</div>
		</div>

		<div class="page-buttons">
			<button
				class="page-btn prev"
				on:click={() => goToPage($filterStore.pagination.currentPage - 1)}
				aria-label="Previous page"
				disabled={!showPrev}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</button>

			{#each pages as page}
				{#if page === '...'}
					<span class="page-dots">...</span>
				{:else}
					<button
						class="page-btn"
						class:active={$filterStore.pagination.currentPage === page}
						on:click={() => goToPage(page)}>
						{page}
					</button>
				{/if}
			{/each}

			<button
				class="page-btn next"
				on:click={() => goToPage($filterStore.pagination.currentPage + 1)}
				aria-label="Next page"
				disabled={!showNext}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M9 18l6-6-6-6" />
				</svg>
			</button>
		</div>
	</div>
</div>

<style>
/* Стили остаются без изменений */
.pagination-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 24px;
	background: #171b26;
	border-radius: 12px;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	max-width: calc(100% - 50px);
	z-index: 100;
}

.time-range-buttons {
	display: flex;
	gap: 8px;
}

.time-range-btn {
	padding: 8px 16px;
	background: #20242f;
	border: none;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease;
	font-size: 14px;
}

.time-range-btn:hover {
	background: #2f3241;
}

.time-range-btn.active {
	background: #6366f1;
}

.pagination-controls {
	display: flex;
	align-items: center;
	gap: 24px;
}

.items-per-page {
	display: flex;
	align-items: center;
	gap: 12px;
}

.label {
	color: white;
	font-size: 14px;
}

.dropdown {
	position: relative;
	display: inline-block;
}

select {
	appearance: none;
	padding: 8px 32px 8px 12px;
	background: #20242f;
	border: none;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	font-size: 14px;
	min-width: 80px;
}

.arrow-icon {
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translateY(-50%);
	width: 16px;
	height: 16px;
	pointer-events: none;
	color: white;
}

.page-buttons {
	display: flex;
	gap: 4px;
	align-items: center;
}

.page-btn {
	min-width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #20242f;
	border: none;
	border-radius: 6px;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease;
	font-size: 14px;
	padding: 0 8px;
}

.page-btn:hover:not(:disabled) {
	background: #2f3241;
}

.page-btn.active {
	background: #6366f1;
}

.page-btn.next,
.page-btn.prev {
	padding: 4px;
}

.page-btn.next svg,
.page-btn.prev svg {
	width: 16px;
	height: 16px;
}

.page-btn:disabled {
	cursor: default;
	opacity: 0.4;
}

.page-dots {
	color: white;
	padding: 0 4px;
	font-size: 14px;
}
</style>
