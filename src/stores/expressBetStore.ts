import type { BetLeg } from '$src/types/bet'
import { writable } from 'svelte/store'

export const expressBetLegs = writable<BetLeg[]>([]);
