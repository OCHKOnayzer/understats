<script>
import { t } from 'svelte-i18n';

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
		<FaqConteiner />
	</div>
</div>

<style>
.mainContent {
	display: flex;
	flex-direction: column;
	height: 89vh;
	overflow: hidden;
	padding-bottom: 0.5rem;
}
.pageWrapper {
	flex-grow: 1;
	overflow-y: auto;
}

@media screen and (min-height: 1200px) {
	.mainContent {
		height: 89vh;
	}
}
@media screen and (min-height: 1300px) {
	.mainContent {
		height: 92vh;
	}
}
@media screen and (min-height: 1400px) {
	.mainContent {
		height: 92vh;
	}
}

@media screen and (max-width: 768px) {
	.mainContent {
		height: calc(100% - 12px);
	}
}
</style>
