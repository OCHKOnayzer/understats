<script>
import { t } from 'svelte-i18n';

import { ApiError } from '$src/api/api.error';
import { axiosWithAuth } from '$src/api/api.interceptors';

async function downloadFile() {
	try {
		const response = await axiosWithAuth.get('/api/extension/download/', {
			responseType: 'blob',
			headers: {
				Accept: 'application/zip'
			}
		});

		const contentDisposition = response.headers['content-disposition'];
		const fileName = (contentDisposition && contentDisposition.split('filename=')[1]?.replace(/['"]/g, '')) || 'extension.zip';

		const url = window.URL.createObjectURL(new Blob([response.data]));
		const a = document.createElement('a');
		a.href = url;
		a.download = fileName;
		document.body.appendChild(a);
		a.click();

		a.remove();
		window.URL.revokeObjectURL(url);
	} catch (error) {
		const apiError = error instanceof ApiError ? error : new ApiError('Unexpected error occurred');
		alert(apiError.message);
		console.error('Подробности ошибки:', error);
	}
}
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
@media (max-height: 770px){ 
	.download_buttons{ 
		height: 35px;
	}
}
</style>
