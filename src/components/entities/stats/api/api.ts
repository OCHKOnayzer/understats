import { axiosWithAuth } from '$src/api/api.interceptors';

import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';
import type { FilterState } from '$src/stores/filterStore';

interface ApiResponse {
	pagination: {
		page: number;
		perPage: number;
		pageCount: number;
		total: number;
	};
	res: Array<Bet>;
}

export async function fetchFilteredData(filters: FilterState) {
	try {
		const params = new URLSearchParams();

		if (filters?.pagination?.currentPage) {
			params.append('page', String(filters.pagination.currentPage));
		}
		if (filters?.pagination?.itemsPerPage) {
			params.append('perPage', String(filters.pagination.itemsPerPage));
		}
		if (filters?.pagination?.sortBy) {
			params.append('sortBy', filters.pagination.sortBy);
		}
		if (filters?.pagination?.sortOrder) {
			params.append('sortOrder', filters.pagination.sortOrder);
		}

		const appendMultipleParams = (key: string, values?: string[]) => {
			if (Array.isArray(values) && values.length > 0) {
				values.forEach((value) => params.append(key, value));
			}
		};

		appendMultipleParams('sports', filters?.selectedSports);
		appendMultipleParams('siteNames', filters?.selectedBookmakers);
		appendMultipleParams('accounts', filters?.selectedAccounts);

		if (Array.isArray(filters?.betResult) && filters.betResult.length > 0) {
			const formattedResults = filters.betResult.map((result) => {
				switch (result) {
					case 'filter.results.won':
						return 'won';
					case 'filter.results.lost':
						return 'lost';
					case 'filter.results.returned':
						return 'returned';
					case 'filter.results.canceled':
						return 'canceled';
					default:
						return result;
				}
			});
			appendMultipleParams('results', formattedResults);
		}

		if (filters?.betAmount?.from) {
			params.append('stakeMin', String(filters.betAmount.from));
		}
		if (filters?.betAmount?.to) {
			params.append('stakeMax', String(filters.betAmount.to));
		}
		if (filters?.coefficient?.from) {
			params.append('rateMin', String(filters.coefficient.from));
		}
		if (filters?.coefficient?.to) {
			params.append('rateMax', String(filters.coefficient.to));
		}
		if (filters?.express !== undefined) {
			params.append('express', String(filters.express));
		}
		if (filters?.ordinar !== undefined) {
			params.append('ordinar', String(filters.ordinar));
		}

		if (typeof filters?.year === 'number') params.append('year', String(filters.year));
		if (typeof filters?.month === 'number') params.append('month', String(filters.month));
		if (typeof filters?.week === 'number') params.append('week', String(filters.week));

		const { data } = await axiosWithAuth.get<ApiResponse>('/bets/my', { params });
		if (!data || typeof data !== 'object') {
			console.error('Invalid API response format');
			return [];
		}

		if (!Array.isArray(data.res)) {
			console.error('data.res is not an array:', data.res);
			return [];
		}

		return data.res;
	} catch (error) {
		console.error('Error fetching filtered data:', error);
		throw error;
	}
}
