<script lang="ts">
import { t } from 'svelte-i18n';
import { createEventDispatcher, onMount } from 'svelte';

import { closeFaqMenu } from '$src/stores/faq';

import { ActiveElemnts } from './activeElements';

export let FAQIndex: number;

let filteredElements = ActiveElemnts.filter((item) => item.index === FAQIndex);
let activeIndex: number | null = null;

const dispatch = createEventDispatcher();

const getUrlParameter = (param: string): string | null => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
};

const setActiveFromUrl = () => {
	const browserParam = getUrlParameter('browser');
	if (browserParam) {
		const matchingElement = ActiveElemnts.find((item) => item.article === browserParam);
		if (matchingElement) {
			FAQIndex = matchingElement.index;
			filteredElements = ActiveElemnts.filter((item) => item.index === FAQIndex);
			activeIndex = ActiveElemnts.indexOf(matchingElement);

			setActiveIndex(activeIndex, matchingElement.name, matchingElement.article);
		}
	}
};

onMount(() => {
	setActiveFromUrl();
	const browserParam = getUrlParameter('browser');
	if (browserParam) {
		const matchingElement = ActiveElemnts.find((item) => item.article === browserParam);
		if (matchingElement) {
			activeIndex = ActiveElemnts.indexOf(matchingElement);
		}
	}
	console.log(activeIndex);
});

const setActiveIndex = (index: number, name: string, articleId: string) => {
	activeIndex = index === activeIndex ? null : index;
	dispatch('selectItem', { name, articleId });
	closeFaqMenu();
};
console.log(activeIndex);
</script>

<div class="faqItemsWrapper">
	{#each filteredElements as item}
		<button
			class="faqItem {activeIndex === ActiveElemnts.indexOf(item) ? 'active' : ''}"
			on:click="{() => setActiveIndex(ActiveElemnts.indexOf(item), item.name, item.article)}">
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
