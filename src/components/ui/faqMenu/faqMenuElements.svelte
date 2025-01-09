<script lang="ts">
import { t } from 'svelte-i18n';
import { createEventDispatcher, onMount } from 'svelte';

import { MenuElement, SecretMenuElemnt } from './menuElments';
import ActiveCard from './ActiveCard.svelte';

let activeIndex: number | null = null;
let selectedItemName: string | null = null;
let selectedArticleId: string | null = null;

const setActiveIndex = (index: number) => {
	activeIndex = index === activeIndex ? null : index;
};

const handleSelectItem = (event: any) => {
	selectedItemName = event.detail.name;
	selectedArticleId = event.detail.articleId;

	dispatch('selectItemFromMenu', { name: selectedItemName, articleId: selectedArticleId });
};

const dispatch = createEventDispatcher();

// Функция для получения параметра из URL
const getUrlParameterKey = (param: string): string | null => {
	const urlParams = new URLSearchParams(window.location.search);
	const paramValue = urlParams.get(param);
	return paramValue ? param : null;
};

onMount(() => {
	const browserParamKey = getUrlParameterKey('browser');

	if (browserParamKey) {
		const matchingItem = MenuElement.find((item) => item.props === browserParamKey);
		if (matchingItem) {
			activeIndex = MenuElement.indexOf(matchingItem);
		}
	}
});
</script>

<div class="menuWrapper">
	<div class="menu_title">
		<span>{$t('faq.FAQ_section')}</span>
	</div>
	<div class="faqItemsWrapper">
		{#each MenuElement as item, index}
			<button
				class="faqItem {activeIndex === index ? 'active' : ''}"
				on:click="{() => setActiveIndex(index)}">
				{$t(item.name)}
			</button>

			{#if activeIndex === index}
				<ActiveCard
					FAQIndex="{index}"
					on:selectItem="{handleSelectItem}" />
			{/if}
		{/each}
	</div>
</div>

<style>
.menuWrapper {
	width: 96%;
	height: 96%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding-right: 5px;
	padding-left: 5px;
}
.menu_title {
	font-size: 16px;
	color: white;
	display: flex;
	align-items: center;
	font-weight: 500;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-bottom: 4%;
}
.faqItemsWrapper {
	display: flex;
	flex-direction: column;
}
.faqItem {
	border: 1px solid #363a45;
	box-sizing: border-box;
	height: 48px;
	width: 100%;
	background-color: #252935;
	border-radius: 5px;
	margin-top: 3%;
	transition: 400ms;
	color: white;
	display: flex;
	align-items: center;
	padding-left: 15px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.secretItem {
	background-color: #1e222d;
}
.faqItem:nth-of-type(1) {
	margin-top: 0%;
}
.active {
	background-color: #6660ff40;
	border-color: #6660ff;
}
.secretItem:hover {
	background-color: #393d4b;
}
.menuWrapper::-webkit-scrollbar {
	border-radius: 30px;
	width: 3px;
}
.menuWrapper::-webkit-scrollbar-track {
	background: rgba(45, 48, 68, 0.692);
}
.menuWrapper::-webkit-scrollbar-thumb {
	background: rgba(135, 138, 160, 0.507);
}
</style>
