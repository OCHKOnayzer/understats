<script>
import { t } from 'svelte-i18n';

import { selectHeaderTitle } from '$src/stores/HeaderStores';
import TariffsSection from '$src/components/ui/tariffsSection/tariffsSection.svelte';
selectHeaderTitle('tariffs.tariffs');
</script>

<svelte:head>
	<title>{$t('settings.settings')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="pageContent">
	<TariffsSection/>
</div>

<style>
	.pageContent{ 
		width: 100%;
	}
</style>
