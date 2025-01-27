<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';
import { currentUser } from '$src/stores/modalStore';
import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import SectionsFaq from '$src/components/ui/sectionsFaq/SectionsFaq.svelte';
import FaqConteiner from '$src/components/ui/faqMenu/faqConteiner.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';

onMount(() => {
	initializeScreenWidthListener();
});

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
		<!-- {#if $isMobile && !$currentUser}
			<DemoButtons />
		{/if} -->
		<!-- <SectionsFaq /> -->
	</div>
	<FaqConteiner />
</div>

<style>
.mainContent {
	height: calc(90vh - 13px);
}
.pageWrapper {
	width: 100%;
	box-sizing: border-box;
}
@media screen and (min-height: 1200px) {
	.mainContent {
		height: 92vh;
		padding-bottom: 20px;
	}
}
@media screen and (max-height: 870px) {
	.mainContent {
		padding-bottom: 13px;
	}
}
</style>
