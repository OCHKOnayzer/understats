<script lang="ts">
import { t } from 'svelte-i18n';

import { extensionInfo } from '$src/stores/extensionStore';
import { useBreakpoint } from '$src/hooks/useBreakpoint';

import DownloadExt from '../button/downloadExt/DownloadExt.svelte';
import FaqOpen from '../button/faqOpen/FaqOpen.svelte';

import DownloadTitle from './titles/downloadTitle.svelte';

interface BrowserItem {
	name: string;
	image: string;
}

const { isMobile } = useBreakpoint(800);

const browserArr: BrowserItem[] = [
	{
		name: 'opera',
		image: 'assets/extension/browsers/opera.svg'
	},
	{
		name: '',
		image: 'assets/extension/browsers/edge.svg'
	},
	{
		name: '',
		image: 'assets/extension/browsers/google.svg'
	},
	{
		name: '',
		image: 'assets/extension/browsers/fox.svg'
	},
	{
		name: '',
		image: 'assets/extension/browsers/yandex.svg'
	}
];
</script>

<div class="download">
	<div class="download__container">
		<DownloadTitle />
		<div class="download__content">
			<div class="info-wrapper">
				<span class="info-text">
					{$t('extensions.desc')}
				</span>
				<span class="info-text">
					{$t('extensions.bets')}
				</span>
			</div>
			<div class="button-wrapper">
				{#if $isMobile}
					<!-- <Stats /> -->
				{:else}
					<div class="button-group">
						<DownloadExt />
						<FaqOpen />
					</div>
				{/if}

				<div class="attention-wrapper">
					<span class="attention-text">{$t('extensions.attention_key')}</span>
					<span class="attention-text">{$t('extensions.attention')}</span>
					{#if $isMobile}
						<span class="attention-text">{$t('extensions.mobile_ext')}</span>
					{/if}
				</div>
				{#if $isMobile}
					<FaqOpen />
				{/if}
			</div>
			<div class="extensions-wrapper">
				<div class="extensions-item">
					<div class="extensions-item--flex">
						<span class="extensions-title brows">{$t('extensions.support_browser')}:</span>
						<span class="extensions-icons">
							{#each browserArr as item}
								<img
									src="{item.image}"
									alt="{item.name}"
									class="extensions-icon" />
							{/each}
						</span>
					</div>
				</div>
				<div class="extensions-item">
					<div>
						<span class="extensions-title">{$t('extensions.ver')}:</span>
						<span class="extensions-content">{$extensionInfo.version}</span>
						<span class="extensions-title">({$extensionInfo.lastUpdatedDate})</span>
					</div>
				</div>
				<div class="extensions-item">
					<div>
						<span class="extensions-title">{$t('extensions.size')}:</span>
						<span class="extensions-content">2{$t('extensions.mb')}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
.download {
	width: 58%;
	background-color: #171b26;
	border-radius: 5px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-right: var(--elements-padding);
}
.download__container {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 95%;
	height: 100%;
	margin: 0 auto;
}
.download__content {
	width: 100%;
}
.info-wrapper {
	padding-bottom: 10px;
}
.info-text {
	font-size: 14px;
	line-height: 20px;
	text-align: left;
}
.button-wrapper {
	margin-top: 10px;
}
.button-group {
	display: flex;
}
.attention-wrapper {
	margin-top: 12px;
	display: flex;
	flex-direction: column;
}
.attention-text {
	color: #718096;
	font-size: 14px;
	color: #f3bf55;
}
.extensions-wrapper {
	margin-top: 15px;
}
.extensions-item {
	margin-top: 10px;
}
.extensions-item--flex {
	display: flex;
}
.extensions-title {
	color: #718096;
}
.extensions-icons {
	display: flex;
	margin-left: 5px;
	margin-right: 5px;
}
.extensions-icon {
	margin-right: 5px;
}
.extensions-content {
	color: white;
}
@media (max-height: 800px) {
	.info-wrapper {
		padding: 0;
	}
}
@media (max-height: 770px) {
	.info-text {
		font-size: 13px;
	}
}
@media (max-height: 720px) {
	.extensions-wrapper {
		font-size: 13px;
	}
	.extensions-content {
		font-size: 13px;
	}
	.info-text {
		font-size: 13px;
	}
}
@media (max-width: 800px) {
	.download {
		width: 100%;
		background-color: transparent;
	}
	.download__container {
		width: 100%;
	}
	.brows {
		display: none;
	}
	.extensions-icon {
		margin-right: 10px;
	}
	.info-text {
		font-size: 14px;
	}
}
</style>
