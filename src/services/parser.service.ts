import axios from 'axios';

import { axiosWithAuth } from '$src/api/api.interceptors';

import type { IParserData, IParserResponse } from '$src/types/parser';

class ParserService {
	async parseData(data: IParserData) {
		try {
			const response = await axiosWithAuth<IParserResponse>({
				url: `${process.env.API_URL}/parser`,
				method: 'POST',
				data
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error parsing data: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}
}

export const parserService = new ParserService();
