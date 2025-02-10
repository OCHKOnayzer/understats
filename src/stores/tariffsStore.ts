import { writable } from 'svelte/store';

import type { ActiveTariff } from '$src/types/types';

export type Period = 'month' | 'year';

export const tariffsPeriod = writable<Period>('month');

export const currentUserActiveTariff = writable<ActiveTariff | null>(null);
