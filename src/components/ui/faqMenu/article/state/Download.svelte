<script>
import { t } from 'svelte-i18n';

import ArticleSection from '../articleComponents/articleSection.svelte';
</script>

<div class="article_wrapper">
	<p>{$t('faq.ext_tittle')}</p>
	<ArticleSection text="faq.ext_download_section_1" />
	<ArticleSection text="faq.ext_download_section_2" />
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
