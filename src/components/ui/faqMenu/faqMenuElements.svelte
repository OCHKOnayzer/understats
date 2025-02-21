<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';
import { t } from 'svelte-i18n';

import ActiveCard from './ActiveCard.svelte';
import { MenuElement } from './menuElments';

let activeIndex: number | null = null;
let selectedArticleId: string | null = null;
let lockedCategory: string | null = null;
let lockedArticle: string | null = null;

const dispatch = createEventDispatcher();

const updateURL = (category: string | null, article: string | null) => {
	const url = new URL(window.location.href);

	if (lockedCategory === category && lockedArticle === article) {
		return;
	}

	if (lockedArticle && category !== lockedCategory) {
		url.searchParams.set(category, lockedArticle);
		lockedCategory = category;
		return;
	}

	url.search = '';
	if (lockedCategory && lockedArticle) {
		url.searchParams.set(lockedCategory, lockedArticle);
	}

	if (category && !article) {
		url.searchParams.set(category, category);
		lockedCategory = category;
		lockedArticle = null;
	}

	if (category && article) {
		url.searchParams.set(category, article);
		lockedCategory = category;
		lockedArticle = article;
	}

	if (!category) {
		lockedCategory = null;
		lockedArticle = null;
	}

	window.history.replaceState({}, '', url.toString());
};

const setActiveIndex = (index: number) => {
	const newCategory = MenuElement[index].props;

	if (lockedCategory && lockedArticle) {
		activeIndex = index;
		updateURL(newCategory, lockedArticle);
		return;
	}

	if (activeIndex === index) {
		activeIndex = null;
		selectedArticleId = null;
		updateURL(null, null);
	} else {
		activeIndex = index;
		updateURL(newCategory, null);
	}
};

const handleSelectItem = (event: any) => {
	selectedArticleId = event.detail.articleId;
	dispatch('selectItemFromMenu', { name: event.detail.name, articleId: selectedArticleId });

	const currentCategory = MenuElement[activeIndex]?.props || null;

	if (currentCategory) {
		updateURL(currentCategory, selectedArticleId);
	}
};

const loadFromURL = () => {
	const urlParams = new URLSearchParams(window.location.search);

	for (let i = 0; i < MenuElement.length; i++) {
		const category = MenuElement[i].props;
		if (urlParams.has(category)) {
			activeIndex = i;
			selectedArticleId = urlParams.get(category);
			lockedCategory = category;
			lockedArticle = selectedArticleId || null;
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
	@apply border-violet;
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