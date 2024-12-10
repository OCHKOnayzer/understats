import { handleAxiosError, ApiError } from '$src/api/api.error';
import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';

import { getAccessToken } from '../auth/auth-token.service';

import type { ExtensionInfo } from '$src/types/types';

class ExtensionService {
	async getExtensionInfo(): Promise<ExtensionInfo> {
		try {
			const response = await axiosClassic<ExtensionInfo>({
				url: `${process.env.API_URL}/extension/info`,
				method: 'GET'
			});

			if (!response.data) {
				throw new ApiError('Network error occurred');
			}

			return response.data;
		} catch (error: unknown) {
			handleAxiosError(error);

			throw new ApiError('Unhandled error occurred');
		}
	}

	async downloadFile() {
		// try {
		//     const accessToken = getAccessToken();
		//     if (!accessToken) {
		//         throw new ApiError('Токен доступа отсутствует. Пожалуйста, выполните вход.');
		//     }
		//     const response = await axiosWithAuth.get('/extension/download/', {
		//         responseType: 'blob',
		//         headers: {
		//             Accept: 'application/zip',
		//             Authorization: `Bearer ${accessToken}`,
		//         },
		//     });
		//     if (!response || !response.data) {
		//         throw new ApiError('Не удалось скачать файл: сервер вернул пустой ответ.');
		//     }
		//     console.log('Заголовки ответа:', response.headers);
		//     console.log('Тип данных:', response.data.type);
		//     console.log('Размер файла:', response.data.size);
		//     const contentDisposition = response.headers['content-disposition'];
		//     const fileName =
		//         contentDisposition?.split('filename=')[1]?.replace(/['"]/g, '') || 'extension.zip';
		//     const url = window.URL.createObjectURL(response.data);
		//     const a = document.createElement('a');
		//     a.href = url;
		//     a.download = fileName;
		//     document.body.appendChild(a);
		//     a.click();
		//     a.remove();
		//     window.URL.revokeObjectURL(url);
		//     console.log('Файл успешно загружен:', fileName);
		// } catch (error: unknown) {
		//     const apiError = error instanceof ApiError ? error : new ApiError('Произошла неизвестная ошибка');
		//     alert(apiError.message);
		//     console.error('Ошибка загрузки файла:', error);
		// }
	}
}

export const extensionService = new ExtensionService();
