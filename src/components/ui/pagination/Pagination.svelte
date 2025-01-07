<script lang="ts">
	import { t } from 'svelte-i18n';
	import { derived } from 'svelte/store';

	import { filterStore } from '$src/stores/filterStore';
	import { generatePageNumbers } from '$src/utils/functions/generatePageNumbers';

	import PaginationSelect from './PaginationSelect.svelte';

	const { totalPages = 6 } = $props();

	const pageNumbers = derived([filterStore], ([$filterStore]) => generatePageNumbers($filterStore.pagination.currentPage, totalPages));

	const canGoNext = derived([filterStore], ([$filterStore]) => $filterStore.pagination.currentPage < totalPages);

	const canGoPrev = derived([filterStore], ([$filterStore]) => $filterStore.pagination.currentPage > 1);

	function handlePageChange(page: number) {
		filterStore.setPage(page);
	}
</script>

	<div class="pagination-container">
			<div class="pagination-controls">
				<div class="items-per-page-selector">
					<span class="items-per-page-label">{$t('filter.pagination.see')}</span>
					<PaginationSelect />
				</div>

				<div class="page-navigation">
					<button
						class="nav-button prev-button"
						onclick={() => handlePageChange($filterStore.pagination.currentPage - 1)}
						aria-label={$t('filter.pagination.prevPage')}
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
									onclick={() => handlePageChange(page as number)}>
									{page}
								</button>
							{/if}
						{/each}
					</div>

					<button
						class="nav-button next-button"
						onclick={() => handlePageChange($filterStore.pagination.currentPage + 1)}
						aria-label={$t('filter.pagination.nextPage')}
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

	<style lang="postcss">
		.pagination-container {
			@apply flex justify-between w-full bg-[#171b26] py-3 px-3 z-50;
		}

		.pagination-controls {
			@apply flex items-center justify-between w-full;
		}

		.time-range-button {
			@apply rounded-lg bg-[#20242f] px-3 py-2 text-sm
								 text-white transition-colors
								 duration-200 hover:bg-[#2f3241];
		}

		.items-per-page-selector {
			@apply mb-1 flex items-center space-x-2 sm:mb-0;
		}

		.items-per-page-label {
			@apply whitespace-nowrap text-sm text-white;
		}

		.page-navigation {
			@apply flex justify-between items-center space-x-2;
		}

		.nav-button {
			@apply flex h-8 w-8
								 items-center justify-center rounded-lg bg-[#20242f]
								 text-white transition-colors
								 hover:bg-[#2f3241] disabled:opacity-40;
		}

		.page-numbers {
			@apply flex items-center space-x-2;
		}

		.page-number {
			@apply flex h-8 w-8 items-center justify-center
								 rounded-lg bg-[#20242f] text-sm text-white
								 hover:bg-[#2f3241];
		}

		.page-number.active {
			@apply bg-[#6366f1];
		}

		.page-ellipsis {
			@apply px-2 text-sm text-white;
		}

		.nav-button svg {
			@apply h-5 w-5 stroke-current stroke-2;
		}
	</style>
