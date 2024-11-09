<script>
import { t } from 'svelte-i18n';

import SectionsFaq from '$src/components/ui/sectionsFaq/SectionsFaq.svelte';
import FaqConteiner from '$src/components/ui/faqMenu/faqConteiner.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('faq.faq');
</script>

<svelte:head>
	<title>{'hello world'}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		<div class="progressWrapper">
			<SectionsFaq />
		</div>
		<FaqConteiner />
	</div>
</div>

<style>
.progressWrapper {
	width: 98%;
	margin: 0 auto;
	padding-bottom: 10px;
	box-sizing: border-box;
}
</style>
