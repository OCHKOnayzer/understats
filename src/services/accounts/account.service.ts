import axios from 'axios';

import { axiosWithAuth } from '$src/api/api.interceptors';

import type { IAccountResponse } from '$src/types/accounts';

class AccountService {
	async getAccounts() {
		try {
			const response = await axiosWithAuth<IAccountResponse[]>({
				url: `${process.env.API_URL}/accounts`,
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
}

export const accountService = new AccountService();
