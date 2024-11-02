export interface Item {
	name: string;
	image: string;
}

export const ItemMenu: Item[] = [
	{
		name: 'menu.Place_bet',
		image: '/assets/item1.png'
	},
	{
		name: 'menu.Main',
		image: '/assets/home.png'
	},
	{
		name: 'menu.Stats',
		image: '/assets/stats.png'
	},
	{
		name: 'menu.Profile',
		image: '/assets/users.png'
	},
	{
		name: 'menu.Mods',
		image: '/assets/mod.png'
	},
	{
		name: 'menu.Setings',
		image: '/assets/setings.png'
	}
];

export const ItemInfo: Item[] = [
	{
		name: 'menu.Help',
		image: '/assets/FAQ.png'
	},
	{
		name: 'menu.News',
		image: '/assets/news.png'
	}
];
