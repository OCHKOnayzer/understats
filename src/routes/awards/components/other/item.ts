import FAQ from '../assets/FAQ.png'
import home from '../assets/home.png'
import item1 from '../assets/item1.png'
import mod from '../assets/mod.png'
import news from '../assets/news.png'
import setings from '../assets/setings.png'
import stats from '../assets/stats.png'
import users from '../assets/users.png'

export interface Item {
  name: string
  image: string
}

export const ItemMenu: Item[] = [
  {
    name: 'menu.Place_bet',
    image: item1,
  },
  {
    name: 'menu.Main',
    image: home,
  },
  {
    name: 'menu.Stats',
    image: stats,
  },
  {
    name: 'menu.Profile',
    image: users,
  },
  {
    name: 'menu.Mods',
    image: mod,
  },
  {
    name: 'menu.Setings',
    image: setings,
  },
]

export const ItemInfo: Item[] = [
  {
    name: 'menu.Help',
    image: FAQ,
  },
  {
    name: 'menu.News',
    image: news,
  },
]
