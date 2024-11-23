import { get, writable } from 'svelte/store';

export interface FilterState {
	dateRange: {
		startDate: string;
		endDate: string;
	};
	activeTab: 'halfYear' | 'month' | 'week' | 'yesterday' | 'today';
	withoutAggregation: boolean;
	selectedSports: string[];
	selectedBookmakers: string[];
	selectedComands: string[];
	selectedAccounts: string[];
	selectedTours: string[];
	betType: string[];
	betStatus: string[];
	betResult: string[];
	betGameStatus: 'live' | 'prematch' | 'nothing';
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
	activeTab: 'month',
	withoutAggregation: false,
	selectedSports: [],
	selectedBookmakers: [],
	selectedComands: [],
	selectedAccounts: [],
	selectedTours: [],
	betType: [],
	betStatus: [],
	betGameStatus: 'live',
	betResult: [],
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

	function getDateRangeForTab(tab: FilterState['activeTab']) {
		const today = new Date();
		let endDate = new Date().toISOString().split('T')[0];
		let startDate = '';

		switch (tab) {
			case 'halfYear':
				startDate = new Date(today.setMonth(today.getMonth() - 6)).toISOString().split('T')[0];
				break;
			case 'month':
				startDate = new Date(today.setMonth(today.getMonth() - 1)).toISOString().split('T')[0];
				break;
			case 'week':
				startDate = new Date(today.setDate(today.getDate() - 7)).toISOString().split('T')[0];
				break;
			case 'yesterday':
				startDate = new Date(today.setDate(today.getDate() - 1)).toISOString().split('T')[0];
				endDate = startDate;
				break;
			case 'today':
				startDate = endDate;
				break;
		}

		return { startDate, endDate };
	}

	return {
		subscribe,
		setDateRange: (startDate: string, endDate: string) =>
			update((state) => ({
				...state,
				dateRange: { startDate, endDate }
			})),
		setActiveTab: (tab: FilterState['activeTab']) => {
			update((state) => {
				const dateRange = getDateRangeForTab(tab);
				return { ...state, activeTab: tab, dateRange };
			});
		},
		toggleAggregation: () => update((state) => ({ ...state, withoutAggregation: !state.withoutAggregation })),
		toggleSport: (sport: string) =>
			update((state) => ({
				...state,
				selectedSports: state.selectedSports.includes(sport) ? state.selectedSports.filter((s) => s !== sport) : [...state.selectedSports, sport]
			})),
		toggleBookmaker: (bookmaker: string) =>
			update((state) => ({
				...state,
				selectedBookmakers: state.selectedBookmakers.includes(bookmaker) ? state.selectedBookmakers.filter((s) => s !== bookmaker) : [...state.selectedBookmakers, bookmaker]
			})),
		toggleComand: (comand: string) =>
			update((state) => ({
				...state,
				selectedComands: state.selectedComands.includes(comand) ? state.selectedComands.filter((s) => s !== comand) : [...state.selectedComands, comand]
			})),
		toggleTour: (tour: string) =>
			update((state) => ({
				...state,
				selectedTours: state.selectedTours.includes(tour) ? state.selectedTours.filter((s) => s !== tour) : [...state.selectedTours, tour]
			})),
		toggleAccount: (account: string) =>
			update((state) => ({
				...state,
				selectedAccounts: state.selectedAccounts.includes(account) ? state.selectedAccounts.filter((s) => s !== account) : [...state.selectedAccounts, account]
			})),
		toggleBetType: (type: string) =>
			update((state) => ({
				...state,
				betType: state.betType.includes(type) ? state.betType.filter((t) => t !== type) : [...state.betType, type]
			})),
		toggleBetResult: (result: string) =>
			update((state) => ({
				...state,
				betResult: state.betResult.includes(result) ? state.betResult.filter((r) => r !== result) : [...state.betResult, result]
			})),
		toggleBetStatus: (status: string) =>
			update((state) => ({
				...state,
				betStatus: state.betStatus.includes(status) ? state.betStatus.filter((s) => s !== status) : [...state.betStatus, status]
			})),
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
		setSelectedSports: (sports: string[]) => update((state) => ({ ...state, selectedSports: sports })),
		setSelectedBookmakers: (bookmakers: string[]) => update((state) => ({ ...state, selectedBookmakers: bookmakers })),
		setSelectedComands: (comands: string[]) => update((state) => ({ ...state, selectedComands: comands })),
		setSelectedAccounts: (accounts: string[]) => update((state) => ({ ...state, selectedAccounts: accounts })),
		setSelectedTours: (tours: string[]) => update((state) => ({ ...state, selectedTours: tours })),
		setTimeRange: (range: FilterState['pagination']['timeRange']) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, timeRange: range }
			})),
		reset: () => set(initialState)
	};
}

export const sportListMain = writable<string[]>(['Футбол', 'Баскетбол', 'Теннис', 'Хоккей', 'Бейсбол', 'Американский футбол']);

export const sportList = writable<string[]>([
	...get(sportListMain),
	'Настольный теннис',
	'Крикет',
	'Бокс',
	'Гандбол',
	'Дартс',
	'Киберспорт',
	'Крикет',
	'Волейбол',
	'Гольф',
	'Регби',
	'Бадминтон',
	'Плавание',
	'ММА'
]);

export const accountsListMain = writable<string[]>(['Аккаунт 1', 'Аккаунт 2', 'Аккаунт 3', 'Аккаунт 4', 'Аккаунт 5']);

export const accountsList = writable<string[]>([
	...get(accountsListMain),
	'Аккаунт 6',
	'Аккаунт 7',
	'Аккаунт 8',
	'Аккаунт 9',
	'Аккаунт 10',
	'Аккаунт 11',
	'Аккаунт 12',
	'Аккаунт 13',
	'Аккаунт 14',
	'Аккаунт 15',
	'Аккаунт 16',
	'Аккаунт 17',
	'Аккаунт 18',
	'Аккаунт 19',
	'Аккаунт 20'
]);

export const bookmakersListMain = writable<string[]>(['Букмекер 1', 'Букмекер 2', 'Букмекер 3', 'Букмекер 4', 'Букмекер 5']);

export const bookmakersList = writable<string[]>([
	...get(bookmakersListMain),
	'Букмекер 6',
	'Букмекер 7',
	'Букмекер 8',
	'Букмекер 9',
	'Букмекер 10',
	'Букмекер 11',
	'Букмекер 12',
	'Букмекер 13',
	'Букмекер 14',
	'Букмекер 15',
	'Букмекер 16',
	'Букмекер 17',
	'Букмекер 18',
	'Букмекер 19',
	'Букмекер 20'
]);

export const comandListMain = writable<string[]>(['Команда 1', 'Команда 2', 'Команда 3', 'Команда 4', 'Команда 5']);

export const comandList = writable<string[]>([
	...get(comandListMain),
	'Команда 6',
	'Команда 7',
	'Команда 8',
	'Команда 9',
	'Команда 10',
	'Команда 11',
	'Команда 12',
	'Команда 13',
	'Команда 14',
	'Команда 15',
	'Команда 16',
	'Команда 17',
	'Команда 18',
	'Команда 19',
	'Команда 20'
]);

export const tourListMain = writable<string[]>(['Тур 1', 'Тур 2', 'Тур 3', 'Тур 4', 'Тур 5']);

export const tourList = writable<string[]>([
	...get(tourListMain),
	'Тур 6',
	'Тур 7',
	'Тур 8',
	'Тур 9',
	'Тур 10',
	'Тур 11',
	'Тур 12',
	'Тур 13',
	'Тур 14',
	'Тур 15',
	'Тур 16',
	'Тур 17',
	'Тур 18',
	'Тур 19',
	'Тур 20'
]);

export const filterStore = createFilterStore();
