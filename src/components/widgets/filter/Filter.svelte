<script lang="ts">
import { slide } from 'svelte/transition';

import FilterForm from '$components/entities/filter/FilterForm.svelte';
import BackgroundContainer from '$components/providers/backgroundContainer/BackgroundContainer.svelte';
import { filter } from '$stores/store';

$: filterValue = $filter;
</script>

<div
	class="filter-container"
	class:active="{filterValue}">
	{#if filterValue}
		<BackgroundContainer>
			<section
				transition:slide="{{ duration: 300 }}"
				class="w-full">
				<h2 class="mb-5 text-[24px] font-medium text-white">.</h2>
				<FilterForm />
			</section>
		</BackgroundContainer>
	{/if}
</div>

<style>
.filter-container:not(.active) {
	height: 0;
}

.filter-container.active {
	height: auto;
}

section {
	opacity: 0;
	transition: opacity 0.2s linear;
}

.active section {
	opacity: 1;
}
</style>
