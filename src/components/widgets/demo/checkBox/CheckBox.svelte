<script lang="ts">
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { fetchFilteredData } from '$src/components/entities/stats/api/api';
import { demo } from '$src/constants/constants';
import { removeDemoToken } from '$src/services/auth/auth-token.service';
import { authService } from '$src/services/auth/auth.service';
import { accountStore } from '$src/stores/accountStore';
import { betsTableStore } from '$src/stores/betsTableStore';
import { isDemoEnabled } from '$src/stores/demo';
import { filterStore } from '$src/stores/filterStore';
import { currentUser } from '$src/stores/modalStore';

const { login, password } = get(accountStore);

async function handleDemoToggle() {
	try {
		const newDemoState = !get(isDemoEnabled);

		betsTableStore.reset();
		currentUser.set(null);

		const loginResponse = await authService.main('login', newDemoState ? { login: demo.login, password: demo.password } : { login, password });

		if (!loginResponse?.data) {
			throw new Error('Ошибка авторизации');
		}

		if (!newDemoState) {
			authService.removeDemoToken();
			removeDemoToken();
		}

		const profile = await authService.profile();
		if (profile?.data) {
			currentUser.set(profile.data);

			isDemoEnabled.set(newDemoState);
			await loadData();
		}
	} catch (error) {
		console.error('Error during demo toggle:', error);
		betsTableStore.setError('Ошибка при переключении режима');
	}
}

async function loadData() {
	try {
		const response = await fetchFilteredData(get(filterStore));
		if (response) {
			betsTableStore.setData(response);
		}
	} catch (error) {
		console.error('Error loading data:', error);
	}
}
</script>

<div
	class="switch-wrapper"
	style="background-color: {$isDemoEnabled ? '#100e47' : '#363A45'}"
	on:click="{handleDemoToggle}">
	<label class="switch">
		<input
			type="checkbox"
			checked="{$isDemoEnabled}"
			on:change="{handleDemoToggle}" />
		<span class="slider"></span>
	</label>
	<div class="demo-title">
		{$t('other.demo')}
	</div>
</div>

<style>
.switch-wrapper {
	min-width: 170px;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.4s ease;
	height: 100%;
	border-radius: inherit;
	cursor: pointer;
}

.switch {
	position: relative;
	display: inline-block;
	width: 32px;
	height: 20px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: all 0.4s ease;
	border-radius: 34px;
	z-index: 3;
}

.slider:before {
	position: absolute;
	content: '';
	height: 12px;
	width: 12px;
	left: 2px;
	bottom: 4px;
	background-color: white;
	transition: all 0.4s ease;
	border-radius: 50%;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

input:checked + .slider {
	background-color: var(--accent-color);
}

input:checked + .slider:before {
	transform: translateX(16px);
}

.demo-title {
	color: white;
	margin-left: 10px;
}

@media screen and (max-width: 800px) {
	.switch-wrapper {
		width: 100%;
		height: 48px;
		border-radius: 12px;
	}
}
</style>
