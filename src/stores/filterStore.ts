import { writable } from 'svelte/store';

export interface FilterState {
	dateRange: {
		startDate: string;
		endDate: string;
	};
	activeTab: 'accounts' | 'sports' | 'bookmaker' | 'months';
	withoutAggregation: boolean;
	selectedSports: string[];
	betType: 'ordinary' | 'express';
	betResult: string;
	betStatus: 'calculated' | 'notCalculated';
	betGameStatus: 'live' | 'prematch';
	betAmount: {
		from: string;
		to: string;
	};
	coefficient: {
		from: string;
		to: string;
	};
	pagination: {
		currentPage: number;
		itemsPerPage: number;
		timeRange: 'halfYear' | '3months' | 'month' | 'week' | '3days';
	};
}

const initialState: FilterState = {
	dateRange: {
		startDate: '',
		endDate: ''
	},
	activeTab: 'accounts',
	withoutAggregation: false,
	selectedSports: [],
	betType: 'ordinary',
	betStatus: 'calculated',
	betGameStatus: 'live',
	betResult: '',
	betAmount: {
		from: '',
		to: ''
	},
	coefficient: {
		from: '',
		to: ''
	},
	pagination: {
		currentPage: 1,
		itemsPerPage: 10,
		timeRange: 'month'
	}
};

function createFilterStore() {
	const { subscribe, set, update } = writable<FilterState>(initialState);

	return {
		subscribe,
		setDateRange: (startDate: string, endDate: string) =>
			update((state) => ({
				...state,
				dateRange: { startDate, endDate }
			})),
		setActiveTab: (tab: FilterState['activeTab']) => update((state) => ({ ...state, activeTab: tab })),
		toggleAggregation: () => update((state) => ({ ...state, withoutAggregation: !state.withoutAggregation })),
		toggleSport: (sport: string) =>
			update((state) => ({
				...state,
				selectedSports: state.selectedSports.includes(sport) ? state.selectedSports.filter((s) => s !== sport) : [...state.selectedSports, sport]
			})),
		setBetType: (type: FilterState['betType']) => update((state) => ({ ...state, betType: type })),
		setBetResult: (result: string) => update((state) => ({ ...state, betResult: result })),
		setBetStatus: (status: FilterState['betStatus']) => update((state) => ({ ...state, betStatus: status })),
		setBetGameStatus: (status: FilterState['betGameStatus']) => update((state) => ({ ...state, betGameStatus: status })),
		setBetAmount: (from: string, to: string) =>
			update((state) => ({
				...state,
				betAmount: { from, to }
			})),
		setCoefficient: (from: string, to: string) =>
			update((state) => ({
				...state,
				coefficient: { from, to }
			})),
		setPage: (page: number) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, currentPage: page }
			})),
		setItemsPerPage: (items: number) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, itemsPerPage: items }
			})),
		setTimeRange: (range: FilterState['pagination']['timeRange']) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, timeRange: range }
			})),
		reset: () => set(initialState)
	};
}

export const filterStore = createFilterStore();
