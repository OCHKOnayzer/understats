interface langInterface {
	name: string;
	flag: string;
	image: string;
	lang: string;
}

export const LangArr: langInterface[] = [
	{
		name: 'lang.en',
		image: 'assets/langs/en.svg',
		flag: ' (US)',
		lang: 'en'
	},
	{
		name: 'lang.ru',
		image: 'assets/langs/ru.svg',
		flag: ' (RU)',
		lang: 'ru'
	},
	{
		name: 'lang.es',
		image: 'assets/langs/es.svg',
		flag: ' (ES)',
		lang: 'es'
	},
	{
		name: 'lang.pt',
		image: 'assets/langs/pt.svg',
		flag: ' (PT)',
		lang: 'pt'
	},

	// {
	// 	name: 'lang.ch',
	// 	image: 'assets/langs/ch.svg',
	// 	flag: ' (CH)',
	// 	lang: 'ch'
	// },

	{
		name: 'lang.de',
		image: 'assets/langs/de.svg',
		flag: ' (DE)',
		lang: 'de'
	},
	{
		name: 'lang.fr',
		image: 'assets/langs/fr.svg',
		flag: ' (FR)',
		lang: 'fr'
	},
	{
		name: 'lang.it',
		image: 'assets/langs/it.svg',
		flag: ' (IT)',
		lang: 'it'
	}
];
