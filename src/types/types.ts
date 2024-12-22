export type TileButton = {
	title: string;
	value: string;
};

export interface SelectedOption {
	value: string;
	label: string;
	disabled?: boolean;
	icon?: string;
}

export interface LoginFormStore {
	bookmaker: OptionWithChoices;
	login: BaseOption;
	password: BaseOption;
}

export type FilterOption = BaseOption | OptionWithChoices;
export type AccountOption = BaseOption | OptionWithChoices;

export interface FilterInputSelectStore {
	preset: BaseOption;
	bookmaker: OptionWithChoices;
	status: OptionWithChoices;
	bed: OptionWithChoices;
	active: BaseOption;
	balance: OptionWithChoices;
	login?: BaseOption;
	password?: BaseOption;
	icon?: BaseOption;
}

export type TableItem = {
	id: number;
	name: string;
	connected: boolean;
	createdAt: string;
	bookmaker: string;
	login: string;
	password: string;
};

export type TableItems = TableItem[];

export type SelectedType = {
	value: string;
	label: string;
	icon?: string;
};

export type Options = SelectedOption[];

export interface BaseOption {
	name: string;
	placeholder: string;
	variant: 'select' | 'input';
	selected: SelectedOption;
	options?: SelectedOption[];
}

export interface OptionWithChoices extends BaseOption {
	options?: SelectedOption[];
}

export type StoreKey = 'filterInputSelect' | 'loginForm';

export interface IAuthForm {
	login: string;
	password: string;
	confirmPassword?: string;
}

export interface IAuthResponse {
	login: string;
	accessToken: string;
	dateReg: string;
}

export interface IValidationError {
	field: string;
	code: string;
	message: string;
}

export interface IApiError {
	statusCode: number;
	error: string;
	message: string;
	method: string;
	errors?: IValidationError[];
}

export interface IAuthError extends IApiError {
	errors?: IValidationError[];
}

export interface IAuthProfile {
	id: string;
	login: string;
}

export type DateRange = {
	startDate: string;
	endDate: string;
};

export type CalendarDay = Date | null;

export interface CalendarProps {
	selectedDates: Date[];
	onDateSelect: (date: Date) => void;
	currentDate: Date;
}
export interface ExtensionInfo {
	version: string;
	downloadsCount: number;
	lastUpdatedDate: string;
}
export interface TariffsItem {
	name: string;
	desc: string;
	limitations: string;
}
