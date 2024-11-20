<script>
import { t } from 'svelte-i18n';
</script>

<div class="other_info_wrapper">
	<div>
		<span>
			{$t('extensions.Attention')}
		</span>
		<span>
			{$t('extensions.Attention_text')}
		</span>
		<span></span>
	</div>
</div>

<style>
.other_info_wrapper {
	margin-top: 5%;
	height: 10vh;
	width: 100%;
	color: white;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.other_info_wrapper div {
	font-size: 12px;
	width: 86%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
}
.other_info_wrapper div span:nth-child(2) {
	margin-top: 10px;
	width: 100%;
	color: #718096;
}
</style>
