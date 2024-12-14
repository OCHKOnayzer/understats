<script lang="ts">
import { derived } from 'svelte/store';

import FilterInput from '$components/shared/FilterInput/FilterInput.svelte';
import LoginFormButtons from '$src/components/features/account/LoginFormButtons.svelte';
import { LoginForm } from '$stores/store';
import { hasOptions } from '$utils/utils';

import type { AccountOption } from '$types/types';
const Login = derived(LoginForm, ($store) => Object.values($store));
</script>

<form
	action=""
	class="mt-3 flex flex-col gap-3">
	{#each $Login as login}
		<div class="item">
			<FilterInput
				placeholder="{login.placeholder}"
				name="{login.name}"
				selected="{login.selected}"
				value="{hasOptions(login) ? login.options : undefined}"
				variant="{login.variant}"
				check="{LoginForm}" />
		</div>
	{/each}
	<LoginFormButtons />
</form>
