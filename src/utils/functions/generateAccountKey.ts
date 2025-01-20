import type { IAccountResponse } from '$src/types/accounts';

export function generateAccountKey(account: IAccountResponse, index: number): string {
	try {
		const timestamp = account.registrationDate ? new Date(account.registrationDate).getTime() : Date.now();

		return `${account.siteName || ''}-${account.extendedId || ''}-${account.clientSeq || ''}-${timestamp}-${index}`;
	} catch (e) {
		console.error('Error generating account key:', e);
		return `fallback-${Date.now()}-${index}`;
	}
}
