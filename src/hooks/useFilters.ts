import { writable } from 'svelte/store';

const initialFilters = {
	page: 1,
	perPage: 10,
	sortBy: 'placed',
	sortOrder: 'ASC',
	sports: [],
	bookmakers: [],
	accounts: [],
	siteNames: [],
	results: [],
	stakeMin: 0,
	stakeMax: 100,
	rateMin: 1,
	rateMax: 2.3,
	express: true,
	ordinar: true,
	year: new Date().getFullYear(),
	month: null,
	week: null
};

function createFilterStore() {
	const { subscribe, set, update } = writable(initialFilters);

	return {
		subscribe,

		updateFilter: ({ key, value }) =>
			update((filters) => ({
				...filters,
				[key]: value
			})),

		resetFilters: () => set(initialFilters),

		updateListFilter: ({ key, value }) =>
			update((filters) => {
				const currentList = filters[key] || [];
				const newList = currentList.includes(value) ? currentList.filter((item) => item !== value) : [...currentList, value];
				return { ...filters, [key]: newList };
			})
	};
}

export const filterStore = createFilterStore();
