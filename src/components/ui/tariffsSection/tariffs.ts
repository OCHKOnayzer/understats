import type { TariffsItem } from '$src/types/types';

export const tariffs: TariffsItem[] = [
	{
		name: 'Lite',
		desc: 'tariffs.lite',
		limitations: ''
	},
	{
		name: 'Standart',
		desc: 'tariffs.standart',
		limitations: ''
	},
	{
		name: 'Pro',
		desc: 'tariffs.pro',
		limitations: 'tariffs.no_limits'
	}
];
