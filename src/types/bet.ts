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

export interface LocalizedString {
	default: string;
	ru: string;
	en: string;
	es: string;
	pt: string;
	de: string;
	fr: string;
	it: string;
}

export interface BetEvent {
	id: string;
	sport: string;
	competitionName: LocalizedString;
	name1: LocalizedString;
	name2: LocalizedString;
	startTime: string;
}

export interface BetLeg {
	rate: number;
	outcome: LocalizedString;
	status: string;
	type: string;
	event: BetEvent;
	dates: {
		placed: string;
		settled: string;
	};
	meta: {
		ordinal: number;
	};
	isLive: boolean;
}

export interface Bet {
	siteName: string;
	accountClientSeq?: number;
	clientSeq: string;
	extendedId?: string;
	rate: number;
	status: string;
	type?: 'Express' | string;
	amounts: {
		stake: number | string;
		win: number | string;
	};
	event: Partial<BetEvent>;
	dates: {
		placed: string;
		settled?: string;
	};
	meta: {
		ordinal: number;
	};
	outcome: {
		default: string;
		ru: string;
		en: string;
		es: string;
		pt: string;
		de: string;
		fr: string;
		it: string;
	};
	legs?: BetLeg[];
	isLive?: boolean;
	score?: string;
}
