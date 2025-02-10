import type { BetLeg } from '$src/components/widgets/stats/BetsTable/columns';
import { writable } from 'svelte/store';

export const expressBetLegs = writable<BetLeg[]>([]); 