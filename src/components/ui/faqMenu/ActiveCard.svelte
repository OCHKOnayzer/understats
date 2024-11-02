<script lang="ts">
export let FAQIndex: number;
import { t } from 'svelte-i18n';
import { createEventDispatcher } from 'svelte';

import { ActiveElemnts } from './activeElemnts';

let filteredElements = ActiveElemnts.filter((item) => item.index === FAQIndex);
let activeIndex: number | null = null;

const dispatch = createEventDispatcher();

const setActiveIndex = (index: number, name: string, articleId: string) => {
	activeIndex = index === activeIndex ? null : index;
	dispatch('selectItem', { name, articleId });
};
</script>

<div class="faqItemsWrapper">
	{#each filteredElements as item, index}
		<button
			class="faqItem {activeIndex === index ? 'active' : ''}"
			on:click={() => setActiveIndex(index, item.name, item.article)}>
			{$t(item.name)}
		</button>
	{/each}
</div>

<style>
.faqItemsWrapper {
	display: flex;
	flex-direction: column;
}
.faqItem {
	border: 1px solid #363a45;
	box-sizing: border-box;
	height: 48px;
	width: 100%;
	background-color: #171b26;
	border-radius: 5px;
	margin-top: 3%;
	transition: 400ms;
	color: white;
	display: flex;
	align-items: center;
	padding-left: 15px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	animation: fadeInUp 0.5s ease-in-out;
}
.active {
	background-color: #6660ff40;
	border-color: #6660ff;
}
@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
