<script>
import { t } from 'svelte-i18n';

import { extensionService } from '$src/services/extensions/extension.service';
</script>

<button
	class="download_buttons"
	on:click="{extensionService.downloadFile}">
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
@media screen and (max-width: 1200px){
	.download_buttons {
		width: 50%;
	}
}
@media (max-height: 770px) {
	.download_buttons {
		height: 35px;
	}
}
</style>
