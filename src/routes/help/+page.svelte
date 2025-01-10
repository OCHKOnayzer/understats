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
		{#if $isMobile && !$currentUser}
			<DemoButtons />
		{/if}
		<!-- <SectionsFaq /> -->
	</div>
	<FaqConteiner />
</div>

<style>
.mainContent {
	height: 100%;
	padding-left: 2rem;
	padding-right: 2rem;
}
.pageWrapper {
	width: 100%;
	box-sizing: border-box;
}
</style>
