import { writable } from 'svelte/store';

import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';

interface BetsTableState {
	data: Bet[];
	isLoading: boolean;
	error: string | null;
}

function createBetsTableStore() {
	const { subscribe, set, update } = writable<BetsTableState>({
		data: [],
		isLoading: false,
		error: null
	});

	return {
		subscribe,
		setData: (rawData: Bet[]) => {
			update((state) => ({
				...state,
				data: Array.isArray(rawData) ? rawData : [],
				error: null,
				isLoading: false
			}));
		},
		setLoading: (isLoading: boolean) => {
			update((state) => {
				if (state.isLoading && isLoading) {
					return state;
				}
				return { ...state, isLoading };
			});
		},
		setError: (error: string | null) =>
			update((state) => ({
				...state,
				error,
				isLoading: false
			})),
		reset: () => set({ data: [], isLoading: false, error: null })
	};
}

export const betsTableStore = createBetsTableStore();
