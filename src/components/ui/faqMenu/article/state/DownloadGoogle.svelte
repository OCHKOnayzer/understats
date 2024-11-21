<script>
import { t } from 'svelte-i18n';

import ArticleSection from '../articleComponents/articleSection.svelte';
import ImageArtical from '../articleComponents/imageArtical.svelte';
</script>

<div class="article_wrapper">
	<p>{$t('faq.ext_google_tittle')}</p>
	<ArticleSection text="faq.create_acc_section_1" />
	<ImageArtical />
	<ArticleSection text="faq.create_acc_section_2" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
.article_wrapper p {
	padding-top: 20px;
	padding-bottom: 10px;
}
</style>
