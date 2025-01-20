<script>
import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.ext_mobile_title" />
	<ArticleSection
		text="artical_faq.artical_faq_mobile_1"
		mark="{false}" />
	<ArticleSection
		text="artical_faq.artical_faq_mobile_2"
		mark="{false}" />
	<ArticleSection
		text="artical_faq.artical_faq_mobile_3"
		mark="{false}" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
