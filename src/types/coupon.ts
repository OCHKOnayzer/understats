export interface ICoupon {
	team1: number;
	team2: number;
	outcome_team: number;
	result: string;
	period: string;
	type: string;
	count: number;
	coeficient: number;
}

export interface ICouponResponse {
	id: string;
	team1: number;
	team2: number;
	outcome_team: number;
	result: string;
	period: string;
	type: string;
	count: number;
	coeficient: number;
	created_at: string;
	updated_at: string;
}
