import { writable } from 'svelte/store';

import type { ExtensionInfo } from '$src/types/types';

export const extensionInfo = writable<ExtensionInfo>({
	version: '',
	downloadsCount: 0,
	lastUpdatedDate: ''
});
