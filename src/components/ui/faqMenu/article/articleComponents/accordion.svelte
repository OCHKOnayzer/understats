<script>
import { onMount } from 'svelte';

let activeIndex = null;

const toggleAccordion = (index) => {
	activeIndex = activeIndex === index ? null : index;
};
</script>

<div class="accordion">
	{#each ['Раздел 1', 'Раздел 2', 'Раздел 3'] as item, index}
		<div class="accordion-item {activeIndex === index ? 'active' : ''}">
			<div
				class="accordion-header"
				on:click="{() => toggleAccordion(index)}">
				{item}
			</div>
			{#if activeIndex === index}
				<div class="accordion-content">
					Контент {item}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
.accordion {
	width: 100%;
	max-width: 400px;
	border: 1px solid #ccc;
	border-radius: 5px;
	overflow: hidden;
}

.accordion-item {
	border-bottom: 1px solid #ccc;
}

.accordion-header {
	padding: 12px;
	background: #f1f1f1;
	cursor: pointer;
	font-weight: bold;
	transition: background 0.3s;
}

.accordion-header:hover {
	background: #ddd;
}

.accordion-content {
	padding: 12px;
	background: white;
	transition: max-height 0.3s ease-out;
}

.active .accordion-content {
	display: block;
}
</style>
