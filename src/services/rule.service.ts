import { axiosWithAuth } from '$src/api/api.interceptors';

import type { IRule, IRuleResponse } from '$src/types/rule';

class RuleService {
	async createRule(data: IRule) {
		try {
			const response = await axiosWithAuth<IRuleResponse>({
				url: `${process.env.API_URL}/rule`,
				method: 'POST',
				data
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getRules(queryParams?: { site_url?: string; site_name?: string; type?: string }) {
		try {
			const response = await axiosWithAuth<IRuleResponse[]>({
				url: `${process.env.API_URL}/rule`,
				method: 'GET',
				params: queryParams
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getRuleById(id: string) {
		try {
			const response = await axiosWithAuth<IRuleResponse>({
				url: `${process.env.API_URL}/rule/${id}`,
				method: 'GET'
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async updateRule(id: string, data: IRule) {
		try {
			const response = await axiosWithAuth<IRuleResponse>({
				url: `${process.env.API_URL}/rule/${id}`,
				method: 'PATCH',
				data
			});

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async deleteRule(id: string) {
		try {
			const response = await axiosWithAuth<void>({
				url: `${process.env.API_URL}/rule/${id}`,
				method: 'DELETE'
			});

			return response.status === 200;
		} catch (error) {
			throw error;
		}
	}
}

export const ruleService = new RuleService();
