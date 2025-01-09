<script>
import { t } from 'svelte-i18n';
</script>

<div class="stats">
	<span class="download_stats">{$t('extensions.down_count')}:</span>
	<span class="download_count"> 5 541 214 {$t('extensions.count')}</span>
</div>

<style>
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
@media (max-width: 800px) {
	.download_count {
		color: #6e65f5;
	}
}
</style>
