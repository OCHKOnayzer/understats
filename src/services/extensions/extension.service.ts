import { handleAxiosError } from '$src/api/api.error';
import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { ApiError } from '$src/api/api.error';
import type { ExtensionInfo } from '$src/types/types';


class ExtensionService {
	async getExtensionInfo(): Promise<ExtensionInfo> {
        try {
            const response = await axiosClassic<ExtensionInfo>({
                url: `${process.env.API_URL}/extension/info`,
                method: 'GET',
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
		try {
			const response = await axiosWithAuth.get('/extension/download/', {
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
