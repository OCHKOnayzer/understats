interface ExtInterface {
	name: string;
	description: string;
	image: string;
}

export const extItems: ExtInterface[] = [
	{
		name: 'extensions.download',
		description: 'extensions.ext_download',
		image: '/icons/extensions/download.svg'
	},
	{
		name: 'extensions.install',
		description: 'extensions.ext_instl',
		image: '/icons/extensions/install.svg'
	},
	{
		name: 'extensions.auth',
		description: 'extensions.ext_auth',
		image: '/icons/extensions/auth.svg'
	}
];
