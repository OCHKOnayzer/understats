<script>
import { t } from 'svelte-i18n';

import SectionsFaq from '$src/components/ui/sectionsFaq/SectionsFaq.svelte';
import FaqConteiner from '$src/components/ui/faqMenu/faqConteiner.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('faq.faq');
</script>

<svelte:head>
	<title>{$t('faq.faq')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="mainContent">
	<div class="pageWrapper">
		<!-- <SectionsFaq /> -->
	</div>
	<FaqConteiner />
</div>

<style>
.pageWrapper {
	width: 98%;
	margin: 0 auto;
	padding-bottom: 10px;
	box-sizing: border-box;
}
</style>
