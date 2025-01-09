import axios from 'axios';

import { axiosWithAuth } from '$src/api/api.interceptors';

class SportsService {
	async getSports() {
		try {
			const sports = await axiosWithAuth({
				url: `${process.env.SERVER_URL}/sports`,
				method: 'GET'
			});

			return sports.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching sports: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}
}

export const sportsService = new SportsService();
