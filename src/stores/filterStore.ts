import { get, writable } from 'svelte/store';

export interface FilterState {
	dateRange: {
		startDate: string;
		endDate: string;
	};
	activeTab: 'halfYear' | 'month' | 'week' | 'yesterday' | 'today' | 'nothing';
	withoutAggregation: boolean;
	selectedSports: string[];
	selectedBookmakers: string[];
	selectedComands: string[];
	selectedAccounts: string[];
	selectedTours: string[];
	betType: string[];
	betStatus: string[];
	betResult: string[];
	betGameStatus: string[];
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
		sortBy: 'id' | 'bookmakerId' | 'sport' | 'competition' | 'stake' | 'win' | 'settled' | 'placed';
		sortOrder: 'ASC' | 'DESC';
	};
	express: boolean;
	ordinar: boolean;
	year?: number;
	month?: number;
	week?: number;
	stakeRange: {
		min: number;
		max: number;
	};
	rateRange: {
		min: number;
		max: number;
	};
	siteNames: string[];
}

const STORAGE_KEY = 'filter_state';

const getDefaultState = (): FilterState => ({
	dateRange: {
		startDate: '',
		endDate: ''
	},
	activeTab: 'month' as FilterState['activeTab'],
	withoutAggregation: false,
	selectedSports: [],
	selectedBookmakers: [],
	selectedComands: [],
	selectedAccounts: [],
	selectedTours: [],
	betType: [],
	betStatus: [],
	betGameStatus: [],
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
		timeRange: 'month',
		sortBy: 'placed' as const,
		sortOrder: 'ASC' as const
	},
	express: true,
	ordinar: true,
	stakeRange: {
		min: 0,
		max: 100
	},
	rateRange: {
		min: 1,
		max: 2.3
	},
	siteNames: []
});

const initialState: FilterState = (() => {
	if (typeof window === 'undefined') return getDefaultState();

	try {
		const savedState = window.localStorage.getItem(STORAGE_KEY);
		if (savedState) {
			const parsed = JSON.parse(savedState);
			if (!isValidActiveTab(parsed.activeTab)) {
				parsed.activeTab = 'month';
			}
			return parsed as FilterState;
		}
	} catch (error) {
		console.warn('Error reading from localStorage:', error);
	}

	return getDefaultState();
})();

function isValidActiveTab(tab: unknown): tab is FilterState['activeTab'] {
	return typeof tab === 'string' && ['halfYear', 'month', 'week', 'yesterday', 'today', 'nothing'].includes(tab);
}

function createFilterStore() {
	const { subscribe, set, update } = writable<FilterState>(initialState);

	subscribe((state) => {
		if (typeof window !== 'undefined') {
			try {
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
			} catch (error) {
				console.warn('Error saving to localStorage:', error);
			}
		}
	});

	function normalizeDate(date: Date): Date {
		const normalized = new Date(date);
		normalized.setHours(0, 0, 0, 0);
		return normalized;
	}

	function formatDate(date: Date): string {
		const d = normalizeDate(date);
		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function getDateRangeForTab(tab: FilterState['activeTab']) {
		const today = normalizeDate(new Date());

		switch (tab) {
			case 'today': {
				const date = formatDate(today);
				return { startDate: date, endDate: date };
			}
			case 'yesterday': {
				const yesterday = normalizeDate(new Date(today));
				yesterday.setDate(today.getDate() - 1);
				const date = formatDate(yesterday);
				return { startDate: date, endDate: date };
			}
			case 'week': {
				const start = normalizeDate(new Date(today));
				start.setDate(today.getDate() - 6);
				return {
					startDate: formatDate(start),
					endDate: formatDate(today)
				};
			}
			case 'month': {
				const start = normalizeDate(new Date(today));
				start.setDate(1);
				const end = normalizeDate(new Date(today));
				end.setMonth(end.getMonth() + 1);
				end.setDate(0);
				return {
					startDate: formatDate(start),
					endDate: formatDate(end)
				};
			}
			case 'halfYear': {
				const start = normalizeDate(new Date(today));
				start.setMonth(today.getMonth() - 6);
				start.setDate(1);
				return {
					startDate: formatDate(start),
					endDate: formatDate(today)
				};
			}
			default:
				return {
					startDate: '',
					endDate: formatDate(today)
				};
		}
	}

	function getTabForDateRange(startDate: string, endDate: string): FilterState['activeTab'] | null {
		const start = normalizeDate(new Date(startDate));
		const end = normalizeDate(new Date(endDate));
		const today = normalizeDate(new Date());

		if (startDate === endDate) {
			const date = normalizeDate(new Date(startDate));
			if (date.getTime() === today.getTime()) {
				return 'today';
			}

			const yesterday = normalizeDate(new Date(today));
			yesterday.setDate(today.getDate() - 1);
			if (date.getTime() === yesterday.getTime()) {
				return 'yesterday';
			}

			return null;
		}

		const monthStart = normalizeDate(new Date(today.getFullYear(), today.getMonth(), 1));
		const monthEnd = normalizeDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
		if (start.getTime() === monthStart.getTime() && end.getTime() === monthEnd.getTime()) {
			return 'month';
		}

		const weekStart = normalizeDate(new Date(today));
		weekStart.setDate(today.getDate() - 6);
		if (start.getTime() === weekStart.getTime() && end.getTime() === today.getTime()) {
			return 'week';
		}

		const halfYearStart = normalizeDate(new Date(today));
		halfYearStart.setMonth(today.getMonth() - 6);
		halfYearStart.setDate(1);
		if (start.getTime() === halfYearStart.getTime() && end.getTime() === today.getTime()) {
			return 'halfYear';
		}

		return null;
	}

	return {
		subscribe,
		setDateRange: (startDate: string, endDate: string) =>
			update((state) => {
				const tab = getTabForDateRange(startDate, endDate);
				return {
					...state,
					dateRange: { startDate, endDate },
					activeTab: tab || 'nothing'
				};
			}),
		setActiveTab: (tab: FilterState['activeTab']) =>
			update((state) => {
				const dateRange = getDateRangeForTab(tab);
				return { ...state, activeTab: tab, dateRange };
			}),
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
				betResult: state.betResult.includes(result) ? state.betResult.filter((t) => t !== result) : [...state.betResult, result]
			})),
		toggleBetStatus: (status: string) =>
			update((state) => ({
				...state,
				betType: state.betStatus.includes(status) ? state.betStatus.filter((t) => t !== status) : [...state.betStatus, status]
			})),
		toggleGameStatus: (status: string) =>
			update((state) => ({
				...state,
				betGameStatus: state.betGameStatus.includes(status) ? state.betGameStatus.filter((s) => s !== status) : [...state.betGameStatus, status]
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
		setSortBy: (sortBy: FilterState['pagination']['sortBy']) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, sortBy }
			})),
		setSortOrder: (sortOrder: FilterState['pagination']['sortOrder']) =>
			update((state) => ({
				...state,
				pagination: { ...state.pagination, sortOrder }
			})),
		setStakeRange: (min = 0, max = 100) =>
			update((state) => ({
				...state,
				stakeRange: { min, max }
			})),
		setRateRange: (min = 1, max = 2.3) =>
			update((state) => ({
				...state,
				rateRange: { min, max }
			})),
		toggleExpress: () =>
			update((state) => ({
				...state,
				express: !state.express
			})),
		toggleOrdinar: () =>
			update((state) => ({
				...state,
				ordinar: !state.ordinar
			})),
		setSiteNames: (names: string[]) =>
			update((state) => ({
				...state,
				siteNames: names
			})),
		setDateFilters: (year?: number, month?: number, week?: number) =>
			update((state) => ({
				...state,
				year,
				month,
				week
			})),
		reset: () => set(getDefaultState())
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

export const bookmakersListMain = writable<string[]>(['Pinnacle', 'Stake', 'Fonbet', '1xbet', '1win', 'goldenbet']);

export const bookmakersList = writable<string[]>([...get(bookmakersListMain)]);

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

export const siteNamesList = writable<string[]>(['Fonbet', 'Betfair', 'Onewin', 'Pinnacle']);
