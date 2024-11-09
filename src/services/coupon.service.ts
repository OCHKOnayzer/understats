import { axiosWithAuth } from '$src/api/api.interceptors';

import type { ICoupon, ICouponResponse } from '$src/types/coupon';

class CouponService {
	async createCoupon(data: ICoupon) {
		try {
			const response = await axiosWithAuth<ICouponResponse>({
				url: `${process.env.API_URL}/coupon`,
				method: 'POST',
				data
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getCoupons() {
		try {
			const response = await axiosWithAuth<ICouponResponse[]>({
				url: `${process.env.API_URL}/coupon`,
				method: 'GET'
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}
}

export const couponService = new CouponService();
