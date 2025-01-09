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
			if (!Array.isArray(rawData)) {
				update((state) => ({ ...state, data: [] }));
				return;
			}
			update((state) => ({ ...state, data: rawData }));
		},
		setLoading: (isLoading: boolean) => update((state) => ({ ...state, isLoading })),
		setError: (error: string | null) => update((state) => ({ ...state, error })),
		reset: () => set({ data: [], isLoading: false, error: null })
	};
}

export const betsTableStore = createBetsTableStore();
