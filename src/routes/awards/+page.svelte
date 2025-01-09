<svelte:options runes="{false}" />

<script>
import { t } from 'svelte-i18n';

import { selectHeaderTitle } from '$src/stores/HeaderStores';

import Section from '../../components/ui/Trophies/section.svelte';
import ProgressBar from '../../components/ui/progressBar/progress.svelte';
selectHeaderTitle('other.awards');
</script>

<svelte:head>
	<title>{$t('other.awards')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		<div class="progressWrapper">
			<ProgressBar />
		</div>
		<Section />
	</div>
</div>

<style>
.text-column {
	padding: 0 2rem;
}
</style>
