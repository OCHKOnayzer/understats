export enum AuthErrorCode {
	INVALID_EMAIL = 'INVALID_EMAIL',
	PASSWORD_TOO_SHORT = 'PASSWORD_TOO_SHORT',
	PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH',

	BAD_REQUEST = 'BAD_REQUEST',
	UNAUTHORIZED = 'UNAUTHORIZED',
	NOT_FOUND = 'NOT_FOUND',
	CONFLICT = 'CONFLICT',

	NETWORK_ERROR = 'NETWORK_ERROR',
	TIMEOUT = 'TIMEOUT'
}

export interface AuthError {
	code: AuthErrorCode;
	message: string;
	field?: string;
	errors?: Array<{
		field: string;
		code: string;
		message: string;
	}>;
}
