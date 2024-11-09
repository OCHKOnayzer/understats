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
			throw error;
		}
	}
}

export const parserService = new ParserService();
