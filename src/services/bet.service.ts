import axios from 'axios';

import { axiosWithAuth } from '$src/api/api.interceptors';

import type { IBet, IBetResponse } from '$src/types/bet';

class BetService {
	async createBet(data: IBet) {
		try {
			const response = await axiosWithAuth<IBetResponse>({
				url: `${process.env.API_URL}/bets`,
				method: 'POST',
				data
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error creating bet: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}

	async getBets() {
		try {
			const response = await axiosWithAuth<IBetResponse[]>({
				url: `${process.env.API_URL}/bets`,
				method: 'GET'
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching bets: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}

	async getMyBets(params = {}) {
		try {
			const response = await axiosWithAuth<IBetResponse[]>({
				url: `${process.env.SERVER_URL}/bets/my`,
				method: 'GET',
				params
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching bets: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}

	async getMyBetsCount(params = {}) {
		try {
			const response = await axiosWithAuth<number>({
				url: `${process.env.SERVER_URL}/bets/my/count`,
				method: 'GET',
				params
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching bets: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}

	async updateBet(id: string, data: IBet) {
		try {
			const response = await axiosWithAuth<IBetResponse>({
				url: `${process.env.SERVER_URL}/bets/${id}`,
				method: 'PUT',
				data
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error updating bet: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}
}

export const betService = new BetService();
