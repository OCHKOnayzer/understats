<script>
import { t } from 'svelte-i18n';
</script>

<div class="section_title">
	<div class="section_item_container">
		{$t('extensions.ext')}
		<div class="stats">
			<span class="download_stats">{$t('extensions.down_count')}:</span>
			<span class="download_count"> 5 541 214 {$t('extensions.count')}</span>
		</div>
	</div>
</div>

<style>
.section_title {
	margin-top: 2vh;
	display: flex;
	align-items: center;
	width: 100%;
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 2vh;
}
.section_item_container {
	display: flex;
	flex-direction: column;
}
.stats {
	height: 20px;
	display: flex;
	align-items: center;
	font-size: 16px;
}
.download_stats {
	display: block;
	color: #737f95;
	padding-right: 5px;
}
.download_count {
	color: #eabf67;
}
</style>
