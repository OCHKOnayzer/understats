import { axiosWithAuth } from '$src/api/api.interceptors';

import type { FilterState } from '$src/stores/filterStore';

type AvailableSports = 'American_Football' | 'Badminton' | 'Bandy' | 'Baseball' | 'Basketball' | 'Winter_Sports';

type SortByValues = 'id' | 'bookmakerId' | 'sport' | 'competition' | 'stake' | 'win' | 'settled' | 'placed';
type SortOrderValues = 'ASC' | 'DESC';

export async function fetchFilteredData(filters: FilterState) {
	try {
		const params = new URLSearchParams();

		params.append('page', String(filters?.pagination?.currentPage ?? 1));
		params.append('perPage', String(filters?.pagination?.itemsPerPage ?? 10));
		params.append('sortBy', filters?.pagination?.sortBy ?? 'placed');
		params.append('sortOrder', filters?.pagination?.sortOrder ?? 'ASC');

		const safeArrayCheck = (arr?: any[]) => Array.isArray(arr) && arr.length > 0;

		if (safeArrayCheck(filters?.selectedSports)) {
			params.append('sports', filters.selectedSports.join(','));
		}

		if (safeArrayCheck(filters?.selectedBookmakers)) {
			params.append('siteNames', filters.selectedBookmakers.join(','));
		}

		if (safeArrayCheck(filters?.selectedAccounts)) {
			params.append('accounts', filters.selectedAccounts.join(','));
		}

		// if (safeArrayCheck(filters?.siteNames)) {
		// 	params.append('siteNames', filters.selectedBookmakers.join(','));
		// }

		if (safeArrayCheck(filters?.betResult)) {
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
			params.append('results', formattedResults.join(','));
		}

		params.append('stakeMin', String(filters?.stakeRange?.min ?? 0));
		params.append('stakeMax', String(filters?.stakeRange?.max ?? 100));
		params.append('rateMin', String(filters?.rateRange?.min ?? 0));
		params.append('rateMax', String(filters?.rateRange?.max ?? 100));

		params.append('express', String(filters?.express ?? true));
		params.append('ordinar', String(filters?.ordinar ?? true));

		if (typeof filters?.year === 'number') {
			params.append('year', String(filters.year));
		}
		if (typeof filters?.month === 'number') {
			params.append('month', String(filters.month));
		}
		if (typeof filters?.week === 'number') {
			params.append('week', String(filters.week));
		}

		const { data } = await axiosWithAuth.get('/bets/my', {
			params: params
		});

		return data;
	} catch (error) {
		console.error('Error fetching filtered data:', error);
		throw error;
	}
}
