<script>
import { t } from 'svelte-i18n';

import DownloadExt from '../button/downloadExt/DownloadExt.svelte';
import FaqOpen from '../button/faqOpen/FaqOpen.svelte';

import DownloadTitle from './titles/downloadTitle.svelte';
</script>

<div class="download_wrapper">
	<div class="download_container">
		<DownloadTitle />
		<div class="download_content">
			<div class="info_wrapper">
				<span class="ext_info">
					{$t('extensions.desc')}
				</span>
				<span class="ext_info">
					{$t('extensions.bets')}
				</span>
			</div>
			<div class="buttons_wrapper">
				<div class="buttons">
					<DownloadExt />
					<FaqOpen />
				</div>
				<div class="attention_wrapper">
					<span class="attention">{$t('extensions.attention_key')}</span>
					<span class="attention">{$t('extensions.attention')}</span>
				</div>
			</div>
			<div class="extension_info_wrapper">
				<div class="extension_info_item">
					<div><span class="item_name">{$t('extensions.support_browser')}:</span><span class="item_content"></span></div>
				</div>
				<div class="extension_info_item">
					<div><span class="item_name">{$t('extensions.ver')}:</span><span class="item_content">1.34</span><span class="item_name">(12.11.2024)</span></div>
				</div>
				<div class="extension_info_item">
					<div><span class="item_name">{$t('extensions.size')}:</span><span class="item_content">2{$t('extensions.mb')}</span></div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
.download_wrapper {
	width: 59%;
	background-color: #171b26;
	border-radius: 5px;
	min-height: 100%;
	height: fit-content;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.download_container {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 95%;
	height: 100%;
	margin: 0 auto;
}
.download_content {
	width: 100%;
}
.ext_info {
	font-size: 14px;
	line-height: 20px;
	text-align: left;
}
.info_wrapper {
	padding-bottom: 10px;
}
.buttons_wrapper {
	margin-top: 30px;
}
.buttons {
	display: flex;
}
.attention {
	color: #718096;
	font-size: 14px;
}
.attention_wrapper {
	margin-top: 12px;
	display: flex;
	flex-direction: column;
}
.extension_info_wrapper {
	margin-top: 15px;
}
.extension_info_item {
	margin-top: 10px;
}
.item_name {
	color: #718096;
}
.item_content {
	color: white;
	margin-left: 5px;
	margin-right: 5px;
}
</style>
