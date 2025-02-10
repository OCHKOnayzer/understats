export interface IAccountResponse {
	siteName: string;
	clientSeq: number;
	betsCount: number;
	betAddedLastDate: string;
	extendedId: string;
	phone: string;
	login: string;
	email: string;
	fullName: string;
	registrationDate: string;
	balance: number;
	currency: string;
	betsTodayCount: string;
	betsYesterdayCount: string;
	betsMonthCount: string;
}

export interface IAccountRequest {
	login: string;
	password: string;
}
