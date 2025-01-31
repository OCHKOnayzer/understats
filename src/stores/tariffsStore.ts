import { writable } from 'svelte/store';

export const tariffsPeriod = writable<string>('month');
