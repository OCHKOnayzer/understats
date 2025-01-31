<script lang="ts">
import { t } from 'svelte-i18n';
import { createEventDispatcher, onMount } from 'svelte';

import { MenuElement } from './menuElments';
import ActiveCard from './ActiveCard.svelte';

let activeIndex: number | null = null;
let selectedItemName: string | null = null;
let selectedArticleId: string | null = null;

const dispatch = createEventDispatcher();

const updateURL = (props: string | null, article: string | null) => {
	const url = new URL(window.location.href);

	// Удаляем старые параметры
	url.searchParams.forEach((_, key) => url.searchParams.delete(key));

	if (props) {
		url.searchParams.set(props, article || props);
	}

	window.history.replaceState({}, '', url.toString());
};

const setActiveIndex = (index: number) => {
	const newProps = MenuElement[index].props;

	if (activeIndex === index) {
		activeIndex = null;
		selectedArticleId = null;
		updateURL(null, null);
	} else {
		activeIndex = index;
		updateURL(newProps, selectedArticleId);
	}
};

const handleSelectItem = (event: any) => {
	selectedItemName = event.detail.name;
	selectedArticleId = event.detail.articleId;

	dispatch('selectItemFromMenu', { name: selectedItemName, articleId: selectedArticleId });

	const currentProps = MenuElement[activeIndex]?.props || null;
	updateURL(currentProps, selectedArticleId);
};

const loadFromURL = () => {
	const urlParams = new URLSearchParams(window.location.search);

	for (let i = 0; i < MenuElement.length; i++) {
		if (urlParams.has(MenuElement[i].props)) {
			activeIndex = i;
			selectedArticleId = urlParams.get(MenuElement[i].props);
			break;
		}
	}
};

onMount(() => {
	loadFromURL();
});
</script>

<div class="menuWrapper">
	<div class="menu_title"></div>
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
	height: 100%;
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
	margin-top: 16px;
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
}
.faqItem:nth-of-type(1) {
	margin-top: 0%;
}
.active {
	background-color: #6660ff40;
	border-color: #6660ff;
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
