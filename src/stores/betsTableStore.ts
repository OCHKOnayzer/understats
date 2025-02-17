import { writable } from 'svelte/store'

import type { Bet } from '$src/types/bet'

interface BetsTableState {
	data: { bets: Bet[] };
	isLoading: boolean;
	error: string | null;
	hasMore: boolean;
	currentPage: number;
	totalItems: number;
}

function createBetsTableStore() {
	const { subscribe, set, update } = writable<BetsTableState>({
		data: { bets: [] },
		isLoading: false,
		error: null,
		hasMore: true,
		currentPage: 1,
		totalItems: 0
	});

	return {
		subscribe,
		setData: (rawData: { bets: Bet[] }) => {
			if (!rawData?.bets || !Array.isArray(rawData.bets)) {
				update((state) => ({
					...state,
					data: { bets: [] },
					isLoading: false,
					hasMore: false,
					currentPage: 1
				}));
				console.log('rawData', rawData);
				return;
			}
			update((state) => ({
				...state,
				data: rawData,
				isLoading: false,
				hasMore: rawData.bets.length >= 10,
				currentPage: 1
			}));
		},
		appendData: (rawData: { bets: Bet[] }) => {
			if (!rawData?.bets || !Array.isArray(rawData.bets)) return;

			update((state) => ({
				...state,
				data: { bets: [...state.data.bets, ...rawData.bets] },
				hasMore: rawData.bets.length >= 10,
				currentPage: state.currentPage + 1
			}));
		},
		setLoading: (isLoading: boolean) => update((state) => ({ ...state, isLoading })),
		setError: (error: string | null) => update((state) => ({ ...state, error, isLoading: false })),
		setTotalItems: (total: number) => update((state) => ({ ...state, totalItems: total })),
		setHasMore: (hasMore: boolean) => update((state) => ({ ...state, hasMore })),
		reset: () =>
			set({
				data: { bets: [] },
				isLoading: false,
				error: null,
				hasMore: true,
				currentPage: 1,
				totalItems: 0
			})
	};
}

export const betsTableStore = createBetsTableStore();
