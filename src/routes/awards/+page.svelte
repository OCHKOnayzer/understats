<svelte:options runes={false} />
<script>
	import Header from './components/header.svelte';
	import Section from './components/section/section.svelte';
	import { t } from 'svelte-i18n';
	const headerProps = $t('other.awards');
	import Progress from './components/widgets/progress.svelte';
</script>

<svelte:head>
	<title>{$t('other.awards')}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		<Header Widget={Progress} {headerProps} />
		<Section />
	</div>
</div>

<style>
</style>
