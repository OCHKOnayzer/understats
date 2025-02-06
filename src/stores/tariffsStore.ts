import { writable } from 'svelte/store';
import type { ActiveTariff } from '$src/types/types';

export const tariffsPeriod = writable<string>('month');

export const currentUserActiveTariff = writable<ActiveTariff>({ 
    tariffName: '',
    accountsLeft: 0,
    accountsCount: 0,
    betsCount: 0,
    betsLeft: 0
}) 