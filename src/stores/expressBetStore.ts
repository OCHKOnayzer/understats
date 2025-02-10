import { writable } from 'svelte/store';

import type { BetLeg } from '$src/types/bet';

export const expressBetLegs = writable<BetLeg[]>([]);
