<!-- <script lang="ts">
import { Dialog } from 'bits-ui';
import { get } from 'svelte/store';

import Button from '$components/ui/button/button.svelte';
import { accountIsSuccess, accounts, LoginForm } from '$stores/store';
import { formatDate } from '$utils/utils';

import * as m from '$m';

const handleConnect = async () => {
	const { login, bookmaker, password } = get(LoginForm);

	if (!login?.selected?.value || !bookmaker?.selected?.label || !password?.selected?.value) {
		accountIsSuccess.set(false);

		return;
	}

	accounts.update((store) => [
		...store,
		{
			id: store.length + 1,
			name: login.selected.value,
			connected: true,
			createdAt: formatDate(new Date()),
			bookmaker: bookmaker.selected.label,
			login: login.selected.value,
			password: password.selected.value
		}
	]);
	setTimeout(() => {
		accountIsSuccess.set(true);
	}, 0);
};
</script>

<div class="mt-5 flex items-center gap-3">
	<Button
		variant="outlineRoundedGreen"
		on:click="{handleConnect}">{m.connect()}</Button>
	<Dialog.Close>
		<Button variant="outlineRoundedWhite">{m.cancel()}</Button>
	</Dialog.Close>
</div> -->
