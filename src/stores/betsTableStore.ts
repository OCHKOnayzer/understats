import type { Bet } from '$src/types/bet';
import { writable } from 'svelte/store';

interface BetsTableState {
	data: Bet[];
	isLoading: boolean;
	error: string | null;
	hasMore: boolean;
	currentPage: number;
	totalItems: number;
}

function createBetsTableStore() {
	const { subscribe, set, update } = writable<BetsTableState>({
		data: [],
		isLoading: false,
		error: null,
		hasMore: true,
		currentPage: 1,
		totalItems: 0
	});

	return {
		subscribe,
		setData: (rawData: Bet[]) => {
			if (!Array.isArray(rawData)) {
				update((state) => ({
					...state,
					data: [],
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
				hasMore: rawData.length >= 10,
				currentPage: 1
			}));
		},
		appendData: (rawData: Bet[]) => {
			if (!Array.isArray(rawData)) return;

			update((state) => ({
				...state,
				data: [...state.data, ...rawData],
				hasMore: rawData.length >= 10,
				currentPage: state.currentPage + 1
			}));
		},
		setLoading: (isLoading: boolean) => update((state) => ({ ...state, isLoading })),
		setError: (error: string | null) => update((state) => ({ ...state, error, isLoading: false })),
		setTotalItems: (total: number) => update((state) => ({ ...state, totalItems: total })),
		setHasMore: (hasMore: boolean) => update((state) => ({ ...state, hasMore })),
		reset: () =>
			set({
				data: [],
				isLoading: false,
				error: null,
				hasMore: true,
				currentPage: 1,
				totalItems: 0
			})
	};
}

export const betsTableStore = createBetsTableStore();
