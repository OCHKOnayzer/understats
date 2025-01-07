<script>
import ArticalTitle from '../articleComponents/articalTitle.svelte';
import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
</script>

<div class="article_wrapper">
	<ArticalTitle title="faq.ext_yandex_title" />
	<ArticleSection text="faq.create_acc_section_1" />
	<ImageArtical
		image="{'assets/faq/ya.png'}"
		description="{'description_image.description_image'}" />
	<ArticleSection
		text="artical_faq.artical_faq_yandex_1"
		mark="{false}" />
	<ArticleSection
		text="artical_faq.artical_faq_yandex_2"
		mark="{false}" />
	<ImageArtical
		image="{'assets/faq/ya2.png'}"
		description="{'description_image.description_image_google_1'}" />
	<ArticleSection
		text="artical_faq.artical_faq_yandex_3"
		mark="{false}" />
	<ImageArtical
		image="{'assets/faq/br3.png'}"
		description="{'description_image.description_image_google_2'}" />
	<ArticleSection
		text="artical_faq.artical_faq_yandex_5"
		mark="{false}" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
