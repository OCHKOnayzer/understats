export interface IRule {
	site_url: string;
	site_name: string;
	selectors: string;
	type: 'COUPON' | 'BET';
}

export interface IRuleResponse {
	id: string;
	created_at: string;
	updated_at: string;
	site_url: string;
	site_name: string;
	selectors: string;
	type: 'COUPON' | 'BET';
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
}
