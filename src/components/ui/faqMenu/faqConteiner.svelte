<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { isFaqMenuOpen, openFaqMenu } from '$src/stores/faq';

import FaqMenu from './FaqMenu.svelte';

let isMobile = false;

function checkScreenWidth() {
	isMobile = window.innerWidth <= 800;
}

onMount(() => {
	openFaqMenu();
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => window.removeEventListener('resize', checkScreenWidth);
});

let selectedItemName = '';
let article: string | null = null;
let ArticleComponent: typeof import('svelte').SvelteComponent | null = null;

const handleSelectItemFromFaqMenu = async (event: any) => {
	selectedItemName = event.detail.name;
	article = event.detail.articleId;

	if (article !== null) {
		await loadArticleComponent(article);
	}
};

async function loadArticleComponent(article2: string) {
	try {
		const module = await import(`./article/state/${article2}.svelte`);
		ArticleComponent = module.default;
	} catch (error) {
		ArticleComponent = null;
	}
}
</script>

<div class="faqSection">
	{#if isMobile}
		{#if $isFaqMenuOpen}
			<FaqMenu on:selectItemFromFaqMenu="{handleSelectItemFromFaqMenu}" />
		{:else}
			<div class="faqChapter">
				{#if selectedItemName && ArticleComponent}
					<div class="selected_state_wrapper">
						<header class="state_header">
							<span class="selected_title">{$t(selectedItemName)}</span>
						</header>

						<svelte:component
							this="{ArticleComponent}"
							title="{selectedItemName}" />
					</div>
				{:else}
					<div class="faq_null">
						<span>{$t('faq.select_state')}</span>
						<span>{$t('faq.select_razdel')}...</span>
					</div>
				{/if}
			</div>
		{/if}
	{:else}
		<FaqMenu on:selectItemFromFaqMenu="{handleSelectItemFromFaqMenu}" />
		<div class="faqChapter">
			{#if selectedItemName && ArticleComponent}
				<div class="selected_state_wrapper">
					<header class="state_header">
						<span class="selected_title">{$t(selectedItemName)}</span>
					</header>

					<svelte:component
						this="{ArticleComponent}"
						title="{selectedItemName}" />
				</div>
			{:else}
				<div class="faq_null">
					<span>{$t('faq.select_state')}</span>
					<span>{$t('faq.select_razdel')}...</span>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
.faqSection {
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	height: 100%;
}

.faqChapter {
	height: 100%;
	width: 75%;
	border-radius: 5px;
	background-color: #252935;
	padding: 20px;
	color: white;
}
.faq_null {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #718096;
	font-size: 18px;
	flex-direction: column;
}
.selected_title {
	font-size: 36px;
}
.selected_state_wrapper {
	position: relative;
	height: 100%;
	width: 100%;
	overflow-y: auto;
	padding-right: 20px;
}
.state_header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.selected_state_wrapper::-webkit-scrollbar {
	border-radius: 30px;
	width: 3px;
}
.selected_state_wrapper::-webkit-scrollbar-track {
	background: rgba(45, 48, 68, 0.692);
}
.selected_state_wrapper::-webkit-scrollbar-thumb {
	background: rgba(135, 138, 160, 0.507);
}
@media (max-width: 800px) {
	.faqChapter {
		width: 100%;
		background-color: transparent;
		padding: 0;
	}
	.selected_state_wrapper {
		margin: 0px;
	}
	.selected_title {
		font-size: 24px;
	}
}
</style>
