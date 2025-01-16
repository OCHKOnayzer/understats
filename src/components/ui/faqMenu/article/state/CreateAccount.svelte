<script>
import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.registration" />
	<ArticleSection text="artical_faq.artical_faq_reg_1" />
	<ArticleSection text="artical_faq.artical_faq_reg_2" />
	<ImageArtical
		image="{'assets/article/auth_buttons.png'}"
		description="{'description_image.auth_btns'}" />
	
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
