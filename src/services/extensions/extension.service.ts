import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { ApiError } from '$src/api/api.error';

interface IExtensionInfo {
	version: string;
	downloadsCount: number;
	lastUpdatedDate: string;
}

class ExtensionService {
	async getExtensionInfo() {
		try {
			const response = await axiosClassic<IExtensionInfo>({
				url: 'https://dev-api-gateway-v1.sntmq.1keep.bet/api/extension/info',
				method: 'GET'
			});

			if (response.data) {
				return response.data;
			} else {
				throw new Error('Не удалось получить информацию о расширении');
			}
		} catch (error: any) {
			throw new Error(error.message || 'Ошибка');
		}
	}
	async downloadFile() {
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
		} catch (error: any) {
			const apiError = error instanceof ApiError ? error : new ApiError('Unexpected error occurred');
			alert(apiError.message);
		}
	}
}

export const extensionService = new ExtensionService();
