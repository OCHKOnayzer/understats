import { axiosClassic } from '$src/api/api.interceptors';
import { getAccessToken } from '../auth/auth-token.service';
import { currentUser } from '$src/stores/modalStore';
import { ApiError } from '$src/api/api.error';
import type { ActiveTariff } from '$src/types/types';

class SubscriptionService {
	async getAllTariffs(): Promise<any> {
		try {
			const response = await axiosClassic<any>({
				url: `${process.env.SERVER_URL}/subscription/tariffs`,
				method: 'GET'
			});

			if (!response.data) {
				throw new ApiError('Network error occurred');
			}
			return response.data;
		} catch (error: any) {
			throw new ApiError('Unhandled error occurred');
		}
	}
	async subscriptionMy() {
		try {
            const accessToken = getAccessToken()
			const response = await axiosClassic<ActiveTariff>({
				url: `${process.env.SERVER_URL}/subscription/my`,
				method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
			});
			if (!response.data) {
				throw new ApiError('Network error occurred');
			}
            console.log(response.data)
			return response.data as ActiveTariff;
		} catch (error: any) {
			throw new ApiError('Unhandled error occurred');
		}
	}
}
export const subscriptionService = new SubscriptionService();
