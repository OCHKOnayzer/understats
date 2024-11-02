<svelte:options runes={false} />

<script>
import { t } from 'svelte-i18n';

import Header from '../../components/ui/header/header.svelte';
import Section from '../../components/ui/Trophies/section.svelte';
const headerProps = $t('other.awards');
import ProgressBar from '../../components/ui/progressBar/progress.svelte';
</script>

<svelte:head>
	<title>{$t('other.awards')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		<Header {headerProps} />
		<div class="progressWrapper">
			<ProgressBar />
		</div>
		<Section />
	</div>
</div>

<style>
</style>
