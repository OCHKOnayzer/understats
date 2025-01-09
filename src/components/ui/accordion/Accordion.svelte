<script lang="ts">
// eslint-disable-next-line import/order
import Icon from '@iconify/svelte';

// eslint-disable-next-line import/no-duplicates
import { backOut } from 'svelte/easing';
// eslint-disable-next-line import/no-duplicates
import { slide } from 'svelte/transition';

let { title, isInitiallyOpen = true, children } = $props();

function toggleAccordion() {
	isInitiallyOpen = !isInitiallyOpen;
}

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		toggleAccordion();
	}
}
</script>

<div class="accordion">
	<div
		class="accordion-header"
		role="button"
		tabindex="0"
		onclick="{toggleAccordion}"
		onkeydown="{handleKeyDown}">
		<h2 class="accordion-title">{title}</h2>
		<button
			class="accordion-toggle"
			class:active="{isInitiallyOpen}">
			<Icon icon="solar:alt-arrow-up-linear" />
		</button>
	</div>

	{#if isInitiallyOpen}
		<div
			class="accordion-content"
			transition:slide="{{
				duration: 400,
				easing: backOut
			}}">
			<slot />
		</div>
	{/if}
</div>

<style>
.accordion {
	background-color: #20242f;
	color: white;
	overflow: hidden;
	margin-top: 28px;
}

.accordion-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.accordion-title {
	font-size: 20px;
	font-weight: 600;
}

.accordion-toggle {
	background: none;
	border: none;
	color: white;
	font-size: 24px;
	cursor: pointer;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: rotate(180deg);
	transition: transform 0.2s ease;
}

.accordion-toggle.active {
	transform: rotate(0deg);
	transition: transform 0.3s ease;
}

.accordion-content {
	padding: 16px 0;
}
</style>
