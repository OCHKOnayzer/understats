import { writable } from 'svelte/store';

import type { IextInfo } from '$src/types/types';

export const extensionInfo = writable<IextInfo>({
	version: '',
	downloadsCount: 0,
	lastUpdatedDate: ''
});
