<script>
import { t } from 'svelte-i18n';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
import Slider from '../../components/ui/slider/extensionsSlider/Slider.svelte';
import DownloadElement from '../../components/ui/downloadElement/DownloadElement.svelte';
import DownloadInfo from '../../components/ui/downloadInfo/DownloadInfo.svelte';
import FunctionalSection from '../../components/ui/functional/FunctionalSection.svelte';
import Exp from '../../components/ui/exp/Exp.svelte';
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
			<img src="assets/extension/wallpaper.png" alt="">
		</div>
	</div>

</div>

<style>
.pageWrapper {
	width: 98%;
	margin: 0 auto;
	padding-bottom: 10px;
	box-sizing: border-box;
}
.extensions_wallpaper{ 
	width: 100%;
	border-radius: 5px;
	margin-top: 10px;
}
</style>
