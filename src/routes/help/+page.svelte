<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { isMobile,initializeScreenWidthListener } from '$src/stores/isMobile';
import { currentUser } from '$src/stores/modalStore';
import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import SectionsFaq from '$src/components/ui/sectionsFaq/SectionsFaq.svelte';
import FaqConteiner from '$src/components/ui/faqMenu/faqConteiner.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';

onMount(()=>{
	initializeScreenWidthListener()
})

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
		{#if $isMobile}
			<DemoButtons />
		{/if}
		<!-- <SectionsFaq /> -->
	</div>
	<FaqConteiner />
</div>

<style>
.pageWrapper {
	width: 100%;
	margin: 0 auto;
	padding-bottom: 10px;
	box-sizing: border-box;
}
</style>
