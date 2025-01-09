<script lang="ts">
import { t } from 'svelte-i18n';
import { type Writable } from 'svelte/store';
// eslint-disable-next-line import/no-duplicates
import { fade, fly } from 'svelte/transition';
// eslint-disable-next-line import/no-duplicates
import Icon from '@iconify/svelte';
import { backOut } from 'svelte/easing';

import Button from '../button/button.svelte';

interface Props {
	mainItemsStore: Writable<string[]>;
	allItemsStore: Writable<string[]>;
	title?: string;
	showAllButtonText?: string;
	setFilter: (selectedList: string[]) => void;
	selectedFilter: (selectedItem: string) => void;
	selectedList: string[];
}

let { mainItemsStore, allItemsStore, title, showAllButtonText, setFilter, selectedFilter, selectedList }: Props = $props();

let showModal = $state(false);
let searchQuery = $state('');
let previousSelections = $state<string[]>([]);

function savePreviousSelections() {
	previousSelections = [...selectedList];
}

function restoreSelections() {
	setFilter(previousSelections);
	showModal = false;
}

$effect(() => {
	if (showModal) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

let filteredSports = $derived(searchQuery ? $allItemsStore.filter((sport) => sport.toLowerCase().includes(searchQuery.toLowerCase())) : $allItemsStore);
</script>

<div class="{`sports-section ${showModal ? 'overflow-hidden' : ''}`}">
	<div class="sports-grid">
		{#each $mainItemsStore as sport}
			<button onclick="{() => selectedFilter(sport)}">
				<Button variant="{selectedList.includes(sport) ? 'filterButtonActive' : 'filterButton'}">
					{$t(sport)}
				</Button>
			</button>
		{/each}
		{#if filteredSports.length > 6}
			<button
				class="sport-button show-all"
				onclick="{() => {
					savePreviousSelections();
					showModal = true;
				}}">
				{$t('filter.list.see')} ({$allItemsStore.length})
			</button>
		{/if}
	</div>
</div>

{#if showModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		transition:fade="{{ duration: 200 }}"
		onclick="{(e) => e.target === e.currentTarget && (showModal = false)}">
		<div
			class="max-h-[90vh] w-[90%] max-w-[600px] overflow-auto rounded-xl bg-[#20242F]"
			transition:fly="{{ y: 20, duration: 300, easing: backOut }}">
			<div class="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#20242F] p-4">
				<h3 class="text-xl font-semibold text-white">{$t('stats.types_sports')}</h3>
				<button
					class="p-2 text-white/70 transition-colors hover:text-white"
					onclick="{() => (showModal = false)}">
					<Icon
						icon="solar:close-circle-bold"
						class="h-6 w-6" />
				</button>
			</div>

			<div class="p-4">
				<div class="relative mb-4">
					<input
						type="text"
						placeholder="{$t('other.search')}"
						bind:value="{searchQuery}"
						class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/20 focus:outline-none" />
				</div>

				<div class="mb-4 grid max-h-[50vh] grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">
					{#each filteredSports as sport}
						<label class="group flex cursor-pointer items-center gap-3 rounded p-2 hover:bg-white/5">
							<input
								type="checkbox"
								checked="{selectedList.includes(sport)}"
								onchange="{() => selectedFilter(sport)}"
								class="hidden" />
							<div
								class="relative h-5 w-5 rounded border-2 transition-colors duration-200
								{selectedList.includes(sport) ? 'border-[#6660FF] bg-[#6660FF]' : 'border-white/30 group-hover:border-white/50'}">
								{#if selectedList.includes(sport)}
									<Icon
										icon="solar:check-bold"
										class="absolute inset-0 h-full w-full text-white transition-opacity duration-200" />
								{/if}
							</div>
							<span class="text-sm text-white/70 transition-colors duration-200 group-hover:text-white">
								{$t(sport)}
							</span>
						</label>
					{/each}
				</div>

				<div class="flex justify-start gap-4 border-t border-white/10 pt-4">
					<Button
						variant="outline"
						class="px-6"
						onclick="{restoreSelections}">
						{$t('filter.results.cancel')}
					</Button>
					<Button
						variant="default"
						class="px-6"
						onclick="{() => (showModal = false)}">
						{$t('other.apply')} ({selectedList.length})
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
.section-title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 16px;
	color: white;
}
.sports-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}
.sport-button {
	padding: 12px;
	background: #0d111d;
	border: none;
	border-radius: 12px;
	color: white;
	cursor: pointer;
	font-size: 16px;
	transition: all 0.2s ease-in-out;
}
.sport-button:hover {
	background: #3a3a3c;
}
.sport-button.active {
	background: #6366f1;
}
.show-all {
	background: #0d111d;
}
.show-all:hover {
	background: rgba(255, 255, 255, 0.05);
}
.modal-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal {
	background: #20242f;
	border-radius: 16px;
	width: 90%;
	max-width: 500px;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
}
.modal-header {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #363a45;
}
.close-button {
	background: none;
	border: none;
	color: white;
	font-size: 20px;
	cursor: pointer;
	padding: 4px;
}
.search-container {
	padding: 16px;
	border-bottom: 1px solid #363a45;
}
.search-input {
	width: 100%;
	padding: 12px;
	background: #363a45;
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 16px;
}
.search-input::placeholder {
	color: rgba(255, 255, 255, 0.5);
}
.sports-list {
	padding: 16px;
	overflow-y: auto;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.sport-item {
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	padding: 8px;
	border-radius: 8px;
}
.sport-name {
	color: white;
	font-size: 16px;
}
.modal-footer {
	padding: 16px;
	display: flex;
	justify-content: flex-end;
	gap: 12px;
	border-top: 1px solid #363a45;
}
.cancel-button,
.apply-button {
	padding: 12px 24px;
	border-radius: 8px;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s ease;
}
.cancel-button {
	background: transparent;
	border: 1px solid #4a5568;
	color: white;
}
.cancel-button:hover {
	background: rgba(74, 85, 104, 0.2);
}
.apply-button {
	background: #6366f1;
	border: none;
	color: white;
}
.apply-button:hover {
	background: #4f46e5;
}
</style>
