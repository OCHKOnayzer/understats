import type { SelectedOption } from '$types/types';

export const onSelectedChange = (value: any, selected: SelectedOption, check: any, name: string) => {
	selected.value = value;
	check.update((store: any) => {
		const storeKey = Object.keys(store).find((key) => store[key].name === name);
		if (storeKey) {
			const updatedField = { ...store[storeKey], selected: value };
			const newStore = { ...store, [storeKey]: updatedField };
			return newStore;
		}

		return store;
	});
};
