import Cookies from 'js-cookie';

export enum EnumTokens {
	'ACCESS_TOKEN' = 'access_token'
}

export const getAccessToken = (): string | null => Cookies.get(EnumTokens.ACCESS_TOKEN);

export const setAccessToken = (token: string): void =>
	Cookies.set(EnumTokens.ACCESS_TOKEN, token, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		expires: 1
	});

export const removeAccessToken = (): void => Cookies.remove(EnumTokens.ACCESS_TOKEN);
