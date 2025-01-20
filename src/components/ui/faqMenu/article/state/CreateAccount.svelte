<script>
import { selectedLang } from '$src/stores/languageStore';

import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.registration" />
	<ArticleSection text="artical_faq.artical_faq_reg_1" />
	<ArticleSection text="artical_faq.artical_faq_reg_2" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/article/auth_buttons.png'}"
			description="{'description_image.auth_btns'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/auth_buttons.png'}"
			description="{'description_image.auth_btns'}" />
	{/if}
	<ArticleSection text="artical_faq.artical_faq_reg_3" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/article/auth_form.png'}"
			description="{'description_image.auth_form'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/auth_form.png'}"
			description="{'description_image.auth_form'}" />
	{/if}
	<ArticleSection text="artical_faq.artical_faq_reg_4" />
	{#if $selectedLang === 'ru'}
		<ImageArtical
			image="{'assets/article/login_profile.png'}"
			description="{'description_image.acc_block'}" />
	{:else}
		<ImageArtical
			image="{'assets/article/en/login_profile.png'}"
			description="{'description_image.acc_block'}" />
	{/if}
	<ArticleSection text="artical_faq.artical_faq_reg_5" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
