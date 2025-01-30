import type { IAccountResponse } from '$src/types/accounts';

export interface PageData {
	accounts: IAccountResponse[];
	isLoading: boolean;
	isInitializing: boolean;
	error?: string;
}
