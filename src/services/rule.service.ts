import axios from 'axios';

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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error creating rule: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching rules: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error fetching rule: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error updating rule: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
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
			if (axios.isAxiosError(error) && error.response) {
				throw new Error(`Error deleting rule: ${error.response.data.message}`);
			} else {
				throw new Error(`Network error: ${(error as any).message}`);
			}
		}
	}
}

export const ruleService = new RuleService();
