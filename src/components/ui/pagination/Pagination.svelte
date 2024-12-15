<script lang="ts">
	import { filterStore } from '$src/stores/filterStore';
	import { ITEMS_PER_PAGE_OPTIONS, TIME_RANGES } from '$src/utils/constants/constants';
	import { derived } from 'svelte/store';
	import { generatePageNumbers } from '$src/utils/functions/generatePageNumbers';
	 
	 const {totalPages = 6} = $props()
	 
	 const pageNumbers = derived(
			 [filterStore],
			 ([$filterStore]) => generatePageNumbers($filterStore.pagination.currentPage, totalPages)
	 );
	
	const canGoNext = derived(
			[filterStore],
			([$filterStore]) => $filterStore.pagination.currentPage < totalPages
	);
	
	const canGoPrev = derived(
			[filterStore],
			([$filterStore]) => $filterStore.pagination.currentPage > 1
	);
	</script>
	
	<div class="pagination-container">
			<div class="pagination-content">
					<div class="time-range-section">
						{#each TIME_RANGES as range}
							<button
								class="time-range-button"
								class:active={$filterStore.pagination.timeRange === range.value}
								onclick={() => filterStore.setTimeRange(range.value)}>
								{range.label}
							</button>
						{/each}
					</div>
	
					<div class="pagination-controls">
							<div class="items-per-page-selector">
									<span class="items-per-page-label">Показать:</span>
									<div class="select-wrapper">
											<select
												value={$filterStore.pagination.itemsPerPage}
												onchange={(e) => filterStore.setItemsPerPage(parseInt(e.currentTarget.value))}>
												{#each ITEMS_PER_PAGE_OPTIONS as option}
													<option value={option}>{option}</option>
												{/each}
											</select>
									</div>
							</div>
	
							<div class="page-navigation">
									<button
										class="nav-button prev-button"
										onclick={() => filterStore.setPage($filterStore.pagination.currentPage - 1)}
										aria-label="Предыдущая страница"
										disabled={!$canGoPrev}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M15 18l-6-6 6-6"/>
										</svg>
									</button>
	
									<div class="page-numbers">
											{#each $pageNumbers as page}
													{#if page === '...'}
															<span class="page-ellipsis">...</span>
													{:else}
														<button
															class="page-number"
															class:active={$filterStore.pagination.currentPage === page}
															onclick={() => filterStore.setPage(page as number)}>
															{page}
														</button>
													{/if}
											{/each}
									</div>
	
									<button
										class="nav-button next-button"
										onclick={() => filterStore.setPage($filterStore.pagination.currentPage + 1)}
										aria-label="Следующая страница"
										disabled={!$canGoNext}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path d="M9 18l6-6-6-6"/>
										</svg>
									</button>
							</div>
					</div>
			</div>
	</div>
	
	<style lang="postcss">
	.pagination-container {
			@apply absolute bottom-0 left-0 w-full bg-[#171b26] z-50 py-2 px-2;
	}
	
	.pagination-content {
			@apply flex flex-col sm:flex-row justify-between items-center 
						 max-w-full w-full 
						 space-y-2 sm:space-y-0 sm:space-x-2;
	}
	
	.time-range-section {
			@apply flex flex-wrap justify-center sm:justify-start 
						 gap-1 sm:gap-2;
	}
	
	.time-range-button {
			@apply px-2 py-1 rounded-lg text-white text-xs 
						 bg-[#20242f] hover:bg-[#2f3241] 
						 transition-colors duration-200;
	}
	
	.time-range-button.active {
			@apply bg-[#6366f1];
	}
	
	.pagination-controls {
			@apply flex flex-col sm:flex-row items-center 
						 space-y-1 sm:space-y-0 sm:space-x-2 
						 w-full sm:w-auto 
						 justify-between sm:justify-end;
	}
	
	.items-per-page-selector {
			@apply flex items-center space-x-1 mb-1 sm:mb-0;
	}
	
	.items-per-page-label {
			@apply text-white text-xs whitespace-nowrap;
	}
	
	.select-wrapper {
			@apply relative w-16 sm:w-20;
	}
	
	select {
			@apply appearance-none w-full py-1 px-1 
						 bg-[#20242f] text-white text-xs 
						 rounded-lg pr-4 border-none;
	}
	
	.page-navigation {
			@apply flex items-center space-x-1;
	}
	
	.nav-button {
			@apply flex items-center justify-center 
						 w-6 h-6 rounded-lg bg-[#20242f] 
						 text-white disabled:opacity-40 
						 hover:bg-[#2f3241] transition-colors;
	}
	
	.page-numbers {
			@apply flex items-center space-x-1;
	}
	
	.page-number {
			@apply w-6 h-6 flex items-center justify-center 
						 rounded-lg bg-[#20242f] text-white text-xs
						 hover:bg-[#2f3241];
	}
	
	.page-number.active {
			@apply bg-[#6366f1];
	}
	
	.page-ellipsis {
			@apply text-white px-1 text-xs;
	}
	
	.nav-button svg {
			@apply w-4 h-4 stroke-current stroke-2;
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