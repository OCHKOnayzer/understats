export interface IAccountResponse {
	balance: string;
	betsCount: number;
	clientSeq: number;
	currency: string;
	email: string;
	extendedId: string;
	fullName: string;
	login: string;
	phone: string;
	registrationDate: string;
	siteName: string;
	lastBet?: string;
}

export interface IAccountRequest {
	login: string;
	password: string;
}
