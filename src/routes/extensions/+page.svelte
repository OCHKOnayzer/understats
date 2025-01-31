<script lang="ts">
import { t } from 'svelte-i18n';

import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
import { currentUser } from '$src/stores/modalStore';
import DownloadSection from '$src/components/ui/extSections/DownloadSection.svelte';
import QuesSection from '$src/components/ui/extSections/QuesSection.svelte';
import { extensionInfo } from '$src/stores/extensionStore';

import type { ExtensionInfo } from '$src/types/types';

selectHeaderTitle('extensions.extensions');

export let data: { extensionInfo: ExtensionInfo };

extensionInfo.set(data.extensionInfo);
</script>

<svelte:head>
	<title>{$t('extensions.extensions')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="pageContent">
	<!-- {#if !$currentUser}
		<DemoButtons />
	{/if} -->
	<div class="pageWrapper">
		<div class="extensions_wallpaper">
			<img
				src="assets/extension/wallpaper.webp"
				alt="" />
		</div>
		<div class="section_wrapper">
			<DownloadSection />
			<QuesSection />
		</div>
	</div>
</div>

<style>
.pageContent {
	height: 100%;
	overflow: unset;
}
.pageWrapper {
	width: 100%;
	box-sizing: border-box;
	overflow: none;
	height: 100%;
}
.extensions_wallpaper {
	width: 100%;
	border-radius: 5px;
	height: 30%;
}
.extensions_wallpaper img {
	height: 100%;
	width: 100%;
}
.section_wrapper {
	display: flex;
	flex-direction: row;
	margin-top: 12px;
	min-height: 68%;
	height: fit-content;
	color: white;
	padding-bottom: 8px;
}
@media (max-width: 800px) {
	.pageWrapper {
		height: fit-content;
	}
	.extensions_wallpaper {
		display: none;
	}
	.section_wrapper {
		margin-top: 0px;
		flex-direction: column;
	}
}
</style>
