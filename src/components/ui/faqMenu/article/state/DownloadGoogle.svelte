<script>
import { selectedLang } from '$src/stores/languageStore';

import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.ext_google_title" />
	<ArticleSection
		text="faq.create_acc_section_1"
		mark="{false}" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/faq/br.png'}"
			description="{'description_image.description_image'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/br.png'}"
			description="{'description_image.description_image'}" />
	{/if}
	<ArticleSection
		text="artical_faq.artical_faq_google_1"
		mark="{false}" />
	<ArticleSection
		text="artical_faq.artical_faq_google_2"
		mark="{false}" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/faq/br2.png'}"
			description="{'description_image.description_image_google_1'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/br2.png'}"
			description="{'description_image.description_image'}" />
	{/if}
	<ArticleSection
		text="artical_faq.artical_faq_google_3"
		mark="{false}" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/faq/br3.png'}"
			description="{'description_image.description_image_google_2'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/br3.png'}"
			description="{'description_image.description_image'}" />
	{/if}
	<ArticleSection
		text="artical_faq.artical_faq_google_5"
		mark="{false}" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
