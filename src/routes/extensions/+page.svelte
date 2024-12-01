<script>
import { t } from 'svelte-i18n';

import { selectHeaderTitle } from '$src/stores/HeaderStores';
import DownloadSection from '$src/components/ui/extSections/DownloadSection.svelte';
import QuesSection from '$src/components/ui/extSections/QuesSection.svelte';

selectHeaderTitle('extensions.extensions');
</script>

<svelte:head>
	<title>{$t('extensions.extensions')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="mainContent">
	<div class="pageWrapper">
		<div class="extensions_wallpaper">
			<img
				src="assets/extension/wallpaper.png"
				alt="" />
		</div>
		<div class="section_wrapper">
			<DownloadSection />
			<QuesSection />
		</div>
	</div>
</div>

<style>
.pageWrapper {
	width: 100%;
	box-sizing: border-box;
	height: 94vh;
}
.extensions_wallpaper {
	width: 100%;
	border-radius: 5px;
	margin-top: 10px;
	height: 30%;
}
.extensions_wallpaper img {
	height: 100%;
	width: 100%;
}
.section_wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 15px;
	height: 62%;
	color: white;
}
</style>
