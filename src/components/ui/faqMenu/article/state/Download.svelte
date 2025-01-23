<script>
import { selectedLang } from '$src/stores/languageStore';

import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
import ArticalAttention from '../articleComponents/articalAttention.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.ext_title" />
	<ArticleSection text="faq.ext_download_section_1" />
	<ArticleSection text="faq.ext_download_section_2" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/article/pin.png'}"
			description="{'description_image.description_image'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/pin.png'}"
			description="{'description_image.description_image'}" />
	{/if}
	<ArticleSection text="artical_faq.pin" />
	<ArticleSection text="artical_faq.artical_faq_ext_work" />
	<ImageArtical
		image="{'assets/article/ext_work.jpg'}"
		description="{'description_image.description_image'}" />
	<ArticleSection text="artical_faq.artical_faq_ext_work_2" />
	<ArticalAttention text="artical_faq.artical_faq_ext_work_3" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
