import axios from 'axios';

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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error creating coupon: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching coupons: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}
}

export const couponService = new CouponService();
