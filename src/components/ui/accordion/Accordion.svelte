<script lang="ts">
import Icon from '@iconify/svelte';
import { backOut } from 'svelte/easing';
import { slide } from 'svelte/transition';

let { title, isInitiallyOpen = false, children } = $props();

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
.active {
	transform: rotate(180deg);
	transition: transform 0.3s ease;
}

.accordion {
	background-color: #20242f;
	border-radius: 12px;
	margin: 16px 0;
	color: white;
	overflow: hidden;
}

.accordion-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.accordion-header:hover {
	background-color: rgba(255, 255, 255, 0.1);
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
	transition: transform 0.2s ease;
}

.accordion-toggle:hover {
	transform: scale(1.1);
}

.accordion-content {
	padding: 16px;
}
</style>
