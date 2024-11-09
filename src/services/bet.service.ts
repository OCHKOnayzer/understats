import { axiosWithAuth } from '$src/api/api.interceptors';

import type { IBet, IBetResponse } from '$src/types/bet';

class BetService {
	async createBet(data: IBet) {
		try {
			const response = await axiosWithAuth<IBetResponse>({
				url: `${process.env.API_URL}/bet`,
				method: 'POST',
				data
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getBets() {
		try {
			const response = await axiosWithAuth<IBetResponse[]>({
				url: `${process.env.API_URL}/bet`,
				method: 'GET'
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async updateBet(id: string, data: IBet) {
		try {
			const response = await axiosWithAuth<IBetResponse>({
				url: `${process.env.API_URL}/bet/${id}`,
				method: 'PUT',
				data
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}
}

export const betService = new BetService();
