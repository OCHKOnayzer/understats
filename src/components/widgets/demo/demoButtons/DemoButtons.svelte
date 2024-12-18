<script lang="ts">
import { t } from 'svelte-i18n';

import { isDemoEnabled, toggleDemoMode } from '$src/stores/demo';
import { currentModal, openModal } from '$src/stores/modalStore';

const openAuth = (modal: string) => {
	currentModal.set(modal);
	openModal('authModal');
};
</script>

<div class="buttons-wrapper">
	<div class="buttons-container">
		<div class="buttons-desc"> </div>
		<div class="buttons">
			<button
				class="buttons-auth"
				on:click="{() => openAuth('reg')}">{$t('social.create_account')}</button>
			<button
				class="buttons-auth"
				on:click="{() => openAuth('login')}">{$t('social.sign_in')}</button>
			<button
				class="button-demo"
				class:demo-active="{$isDemoEnabled}"
				on:click="{() => toggleDemoMode()}">
				{$t('other.demo')}
			</button>
		</div>
	</div>
</div>

<style>
.buttons-wrapper {
	width: 100%;
	height: 120px;
	background-color: #171b26;
	border-radius: 8px;
}

.buttons-container {
	width: 98%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
}

.buttons button {
	height: 56px;
	color: white;
	border-radius: 16px;
}

.buttons-auth {
	width: 200px;
	background-color: #31384a;
	margin-right: 10px;
}

.button-demo {
	width: 232px;
	background-color: transparent;
	border: 1px solid #363a45;
	transition: 400ms;
}

.button-demo.demo-active {
	border: 1px solid #6660ff;
}

@media screen and (max-width: 768px) {
	.buttons-wrapper {
		border-radius: 16px;
	}
	.button-demo {
		width: 160px;
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.buttons-auth {
		width: 160px;
	}
	.buttons-auth:nth-child(1) {
		display: none;
	}
}
</style>
