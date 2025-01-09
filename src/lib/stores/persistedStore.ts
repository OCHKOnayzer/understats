import { get, writable, type Writable } from 'svelte/store';

export function createPersistedStore<T>(key: string, initialValue: T): Writable<T> {
	// Получаем сохраненное значение
	let storedValue: T;

	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(key);
		storedValue = stored ? JSON.parse(stored) : initialValue;
	} else {
		storedValue = initialValue;
	}

	// Создаем store
	const store = writable<T>(storedValue);

	// Подписываемся на изменения
	if (typeof window !== 'undefined') {
		store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}
