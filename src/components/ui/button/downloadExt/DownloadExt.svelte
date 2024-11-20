<script>
import { t } from 'svelte-i18n';
</script>

<button class="download_buttons">
	{$t('extensions.zip')}
</button>

<style>
.download_buttons {
	border: 1px solid #5ec654;
	width: 30%;
	height: 40px;
	border-radius: 100px;
	margin-right: 15px;
}
</style>
