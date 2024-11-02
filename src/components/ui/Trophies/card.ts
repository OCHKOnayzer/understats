export interface Award {
	name: string;
	des: string;
	rare: string;
	image: string;
	color: string;
	get: boolean;
	count?: number;
	progress?: number;
	progressVis?: boolean;
}
export const awards: Award[] = [
	{
		name: 'award.first_step',
		des: 'award.first_step_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/gold/goldTrophLvl1.png',
		color: '#52538c',
		get: true
	},
	{
		name: 'award.analyst',
		des: 'award.analyst_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/gold/goldTrophLvl1.png',
		color: '#52538c',
		get: true
	},
	{
		name: 'award.expert',
		des: 'award.expert_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/gold/goldTrophLvl1.png',
		color: '#52538c',
		get: true
	},
	{
		name: 'award.king_of_night',
		des: 'award.king_of_night_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/gold/goldTrophLvl2.png',
		color: '#726a52',
		get: true
	}
];

export const allAwards: Award[] = [
	{
		name: 'award.winning_streak',
		des: 'award.winning_streak_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/silver/silverTrophLvl1.png',
		color: '#52538c',
		get: false,
		count: 10,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.long_term_player',
		des: 'award.long_term_player_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/silver/silverTrophLvl1.png',
		color: '#52538c',
		get: false,
		count: 6,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.safe_player',
		des: 'award.safe_player_desc',
		rare: 'award.rare_standard',
		image: '/assets/awards/silver/silverTrophLvl1.png',
		color: '#52538c',
		get: false,
		count: 10,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.pro',
		des: 'award.pro_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/silver/silverTrophLvl2.png',
		color: '#726a52',
		get: false,
		count: 10,
		progress: 9,
		progressVis: false
	},
	{
		name: 'award.sport_guru',
		des: 'award.sport_guru_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/silver/silverTrophLvl2.png',
		color: '#726a52',
		get: false,
		count: 5,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.wide_reach',
		des: 'award.wide_reach_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/silver/silverTrophLvl2.png',
		color: '#726a52',
		get: false,
		count: 3,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.hero_return',
		des: 'award.hero_return_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/silver/silverTrophLvl2.png',
		color: '#726a52',
		get: false,
		count: 5,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.intuition',
		des: 'award.intuition_desc',
		rare: 'award.rare_rare',
		image: '/assets/awards/silver/silverTrophLvl2.png',
		color: '#726a52',
		get: false,
		count: 10,
		progress: 1,
		progressVis: false
	},
	{
		name: 'award.odds_magnate',
		des: 'award.odds_magnate_desc',
		rare: 'award.rare_legendary',
		image: '/assets/awards/silver/silverTrophLvl3.png',
		color: '#6a3940',
		get: false,
		count: 10,
		progress: 1,
		progressVis: true
	},
	{
		name: 'award.secret',
		des: 'award.secret_desc',
		rare: 'award.rare_legendary',
		image: '/assets/awards/silver/silverTrophLvl3.png',
		color: '#6a3940',
		get: false,
		count: 10,
		progress: 1,
		progressVis: true
	}
];
