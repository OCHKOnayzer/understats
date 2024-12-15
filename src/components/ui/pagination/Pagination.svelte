<script lang="ts">
import { derived } from 'svelte/store';

import { filterStore } from '$src/stores/filterStore';
import { ITEMS_PER_PAGE_OPTIONS, TIME_RANGES } from '$src/utils/constants/constants';
import { generatePageNumbers } from '$src/utils/functions/generatePageNumbers';

const { totalPages = 6 } = $props();

const pageNumbers = derived([filterStore], ([$filterStore]) => generatePageNumbers($filterStore.pagination.currentPage, totalPages));

const canGoNext = derived([filterStore], ([$filterStore]) => $filterStore.pagination.currentPage < totalPages);

const canGoPrev = derived([filterStore], ([$filterStore]) => $filterStore.pagination.currentPage > 1);
</script>

<div class="pagination-container">
	<div class="pagination-content">
		<div class="time-range-section">
			{#each TIME_RANGES as range}
				<button
					class="time-range-button"
					class:active="{$filterStore.pagination.timeRange === range.value}"
					onclick="{() => filterStore.setTimeRange(range.value)}">
					{range.label}
				</button>
			{/each}
		</div>

		<div class="pagination-controls">
			<div class="items-per-page-selector">
				<span class="items-per-page-label">Показать:</span>
				<div class="select-wrapper">
					<select
						value="{$filterStore.pagination.itemsPerPage}"
						onchange="{(e) => filterStore.setItemsPerPage(parseInt(e.currentTarget.value))}">
						{#each ITEMS_PER_PAGE_OPTIONS as option}
							<option value="{option}">{option}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="page-navigation">
				<button
					class="nav-button prev-button"
					onclick="{() => filterStore.setPage($filterStore.pagination.currentPage - 1)}"
					aria-label="Предыдущая страница"
					disabled="{!$canGoPrev}">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path d="M15 18l-6-6 6-6"></path>
					</svg>
				</button>

				<div class="page-numbers">
					{#each $pageNumbers as page}
						{#if page === '...'}
							<span class="page-ellipsis">...</span>
						{:else}
							<button
								class="page-number"
								class:active="{$filterStore.pagination.currentPage === page}"
								onclick="{() => filterStore.setPage(page as number)}">
								{page}
							</button>
						{/if}
					{/each}
				</div>

				<button
					class="nav-button next-button"
					onclick="{() => filterStore.setPage($filterStore.pagination.currentPage + 1)}"
					aria-label="Следующая страница"
					disabled="{!$canGoNext}">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path d="M9 18l6-6-6-6"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
.pagination-container {
	@apply absolute bottom-0 left-0 z-50 w-full bg-[#171b26] px-2 py-2;
}

.pagination-content {
	@apply flex w-full max-w-full flex-col items-center
						 justify-between space-y-2
						 sm:flex-row sm:space-x-2 sm:space-y-0;
}

.time-range-section {
	@apply flex flex-wrap justify-center gap-1
						 sm:justify-start sm:gap-2;
}

.time-range-button {
	@apply rounded-lg bg-[#20242f] px-2 py-1 text-xs
						 text-white transition-colors
						 duration-200 hover:bg-[#2f3241];
}

.time-range-button.active {
	@apply bg-[#6366f1];
}

.pagination-controls {
	@apply flex w-full flex-col items-center
						 justify-between space-y-1 sm:w-auto
						 sm:flex-row sm:justify-end
						 sm:space-x-2 sm:space-y-0;
}

.items-per-page-selector {
	@apply mb-1 flex items-center space-x-1 sm:mb-0;
}

.items-per-page-label {
	@apply whitespace-nowrap text-xs text-white;
}

.select-wrapper {
	@apply relative w-16 sm:w-20;
}

select {
	@apply w-full appearance-none rounded-lg border-none
						 bg-[#20242f] px-1 py-1
						 pr-4 text-xs text-white;
}

.page-navigation {
	@apply flex items-center space-x-1;
}

.nav-button {
	@apply flex h-6 w-6
						 items-center justify-center rounded-lg bg-[#20242f]
						 text-white transition-colors
						 hover:bg-[#2f3241] disabled:opacity-40;
}

.page-numbers {
	@apply flex items-center space-x-1;
}

.page-number {
	@apply flex h-6 w-6 items-center justify-center
						 rounded-lg bg-[#20242f] text-xs text-white
						 hover:bg-[#2f3241];
}

.page-number.active {
	@apply bg-[#6366f1];
}

.page-ellipsis {
	@apply px-1 text-xs text-white;
}

.nav-button svg {
	@apply h-4 w-4 stroke-current stroke-2;
}

@media (max-width: 640px) {
	.pagination-container {
		@apply px-1 py-1;
	}

	.time-range-section {
		@apply gap-1;
	}

	.time-range-button {
		@apply px-1.5 py-1 text-[10px];
	}
}
</style>
