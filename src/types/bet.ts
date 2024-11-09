export interface IBet {
	bet: {
		rate: number;
		outcome: string;
		amount: number;
		eventData: string;
		dates: string;
		meta: string;
	};
	accountId: string;
	rule: {
		id: string;
		created_at: string;
		updated_at: string;
		site_url: string;
		site_name: string;
		selectors: string;
		type: string;
		coupons: Array<{
			id: string;
			created_at: string;
			updated_at: string;
			team1: number;
			team2: number;
			outcome: string;
			coeficient: number;
			account: string;
			account_id: string;
			rule: string;
			rule_id: string;
			is_parsed: boolean;
		}>;
		bets: string[];
	};
	raw: string;
	isParsed: boolean;
}

export interface IBetResponse {
	id: string;
	parts: Array<{
		id: string;
		rate: number;
		outcome: string;
		amount: number;
		eventData: string;
		dates: string;
		meta: string;
		bet: string;
		bet_id: string;
	}>;
	rate: number;
	amount: number;
	dates: string;
	meta: string;
	isExpress: boolean;
	is_parsed: boolean;
	raw: string;
	account: {
		id: string;
		created_at: string;
		updated_at: string;
		registration_date: string;
		coupons: Array<{
			id: string;
			created_at: string;
			updated_at: string;
			team1: number;
			team2: number;
			outcome: string;
			coeficient: number;
			account: string;
			account_id: string;
			rule: string;
			rule_id: string;
			is_parsed: boolean;
		}>;
		user: {
			id: string;
			login: string;
			password: string;
			created_at: string;
			accounts: string[];
		};
		user_id: string;
		bets: string[];
	};
	account_id: string;
	rule: {
		id: string;
		created_at: string;
		updated_at: string;
		site_url: string;
		site_name: string;
		selectors: string;
		type: string;
		coupons: Array<{
			id: string;
			created_at: string;
			updated_at: string;
			team1: number;
			team2: number;
			outcome: string;
			coeficient: number;
			account: string;
			account_id: string;
			rule: string;
			rule_id: string;
			is_parsed: boolean;
		}>;
		bets: string[];
	};
	rule_id: string;
}
