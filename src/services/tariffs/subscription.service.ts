import { axiosClassic } from '$src/api/api.interceptors';
import { currentUser } from '$src/stores/modalStore';
import { ApiError } from '$src/api/api.error';
import { currentUserActiveTariff } from '$src/stores/tariffsStore';
import { formatDate } from '$src/utils/functions/formatDate';

import { getAccessToken } from '../auth/auth-token.service';

import type { ActiveTariff } from '$src/types/types';

class SubscriptionService {
	async getAllTariffs(): Promise<any> {
		try {
			const response = await axiosClassic<any>({
				url: `${process.env.SERVER_URL}/subscriptions/tariffs`,
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
			const accessToken = getAccessToken();
			const response = await axiosClassic({
				url: `${process.env.SERVER_URL}/subscriptions/my`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			});

			if (!response.data) {
				throw new Error('Network error occurred');
			}

			console.log(response.data);

			const data = response.data;
			const purchasedDate = data.purchasedDate;
			const formatDatePurchased = formatDate(purchasedDate);
			const filteredData: ActiveTariff = {
				tariffName: data.tariff?.name || '0',
				accounts: data.tariff?.accounts || 0,
				betsPerMonth: data.tariff?.betsPerMonth || 0,
				accountsLeft: data.accountsLeft || 0,
				accountsCount: data.accountsCount || 0,
				betsCount: data.betsCount || 0,
				betsLeft: data.betsLeft || 0,
				datePurchased: formatDatePurchased || '0',
				pricePerMonth: data.tariff?.pricePerMonth || 0
			};

			currentUserActiveTariff.set(filteredData);

			return filteredData;
		} catch (error) {
			return null;
		}
	}
}
export const subscriptionService = new SubscriptionService();
