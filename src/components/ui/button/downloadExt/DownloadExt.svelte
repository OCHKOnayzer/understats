<script>
import { t } from 'svelte-i18n';

import { downloadFile } from '$src/services/download/downloadExt.service';
</script>

<button
	class="download_buttons"
	on:click="{downloadFile}">
	{$t('extensions.zip')}
</button>

<style>
.download_buttons {
	border: 1px solid #5ec654;
	width: 30%;
	height: 40px;
	border-radius: 100px;
	margin-right: 15px;
	cursor: pointer;
}
@media (max-height: 770px) {
	.download_buttons {
		height: 35px;
	}
}
</style>
