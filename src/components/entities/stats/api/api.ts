import type { FilterState } from '$src/stores/filterStore';

interface FilterQuery {
	dateRange: {
		startDate?: string;
		endDate?: string;
	};
	tab: string;
	withoutAggregation: boolean;
	sports: string[];
	betType: string;
	betResult?: string;
	status?: string;
	gameStatus?: string;
	amount: {
		from?: string;
		to?: string;
	};
	coefficient: {
		from?: string;
		to?: string;
	};
}

export async function fetchFilteredData(filters: FilterState) {
	const query: FilterQuery = {
		dateRange: {
			startDate: filters.dateRange.startDate || undefined,
			endDate: filters.dateRange.endDate || undefined
		},
		tab: filters.activeTab,
		withoutAggregation: filters.withoutAggregation,
		sports: filters.selectedSports,
		betType: filters.betType,
		betResult: filters.betResult || undefined,
		status: filters.betStatus,
		gameStatus: filters.betGameStatus,
		amount: {
			from: filters.betAmount.from || undefined,
			to: filters.betAmount.to || undefined
		},
		coefficient: {
			from: filters.coefficient.from || undefined,
			to: filters.coefficient.to || undefined
		}
	};

	try {
		const response = await fetch('https://api.example.com/bets/filter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(query)
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching filtered data:', error);
		throw error;
	}
}
