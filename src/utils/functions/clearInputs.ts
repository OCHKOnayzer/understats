export const clearInput = (check: any, name: string) => {
	check.update((store: any) => {
		const storeKey = Object.keys(store).find((key) => store[key].name === name);
		if (storeKey) {
			const updatedField = {
				...store[storeKey],
				selected: { value: '', label: '' }
			};
			const newStore = { ...store, [storeKey]: updatedField };
			return newStore;
		}

		return store;
	});
};
