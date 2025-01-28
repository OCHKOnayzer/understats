import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import toast from 'svelte-french-toast';

import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { openModal } from '$src/stores/modalStore';
import { handleAxiosError, ApiError } from '$src/api/api.error';
import { extensionInfo } from '$src/stores/extensionStore';

import { getAccessToken } from '../auth/auth-token.service';

import type { ExtensionInfo } from '$src/types/types';

class ExtensionService {
	async getExtensionInfo(): Promise<ExtensionInfo> {
		try {
			const response = await axiosClassic<ExtensionInfo>({
				url: `${process.env.SERVER_URL}/extension/info`,
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
		const downloadToast = toast.loading(get(t)('error.start'));

		try {
			const accessToken = getAccessToken();
			if (!accessToken) {
				openModal('authModal');
				throw new ApiError(get(t)('error.auth'));
			}

			const response = await fetch(`${process.env.SERVER_URL}/extension/download`, {
				method: 'GET',
				headers: {
					Accept: 'application/zip',
					Authorization: `Bearer ${accessToken}`
				}
			});

			// if (!response) {
			// 	throw new ApiError(get(t)('error.download'));
			// }

			const blob = await response.blob();
			const fileName = response.headers.get('content-disposition')?.split('filename=')[1]?.replace(/['"]/g, '') || `OneKeepBet ${get(extensionInfo).version}.zip`;

			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);

			toast.success(get(t)('error.success'), { id: downloadToast });
		} catch (error) {
			const apiError = error instanceof ApiError ? error : new ApiError(get(t)('error.error'));
			toast.error(apiError.message, { id: downloadToast });
		}
	}
}

export const extensionService = new ExtensionService();
