import { writable } from 'svelte/store';

import type { BetLeg } from '$src/components/widgets/stats/BetsTable/columns';

export const expressBetLegs = writable<BetLeg[]>([]);
