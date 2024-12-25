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
		<div class="buttons-desc">
			<img
				src="assets/demo.png"
				alt="" />
			<div class="desc-content">
				<span>{$t('other.demo_no_auth_title')}</span>
				<span>{$t('other.demo_no_auth_content')}</span>
			</div>
		</div>
		<div class="buttons">
			<button
				class="buttons-auth"
				on:click="{() => openAuth('reg')}">{$t('social.create_account')}</button>
			<button
				class="buttons-auth"
				on:click="{() => openAuth('login')}">{$t('social.auth')}</button>
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
	color: white;
}
.buttons-container {
	width: 98%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: nowrap;
}
.buttons-desc {
	display: flex;
	align-items: center;
	margin-right: 10px;
	width: 40%;
}
.buttons-desc img {
	height: 50px;
	width: 50px;
}
.desc-content {
	display: flex;
	flex-direction: column;
	margin-left: 10px;
}
.desc-content span:nth-child(1) {
	font-size: 25px;
}
.desc-content span:nth-child(2) {
	font-size: 14px;
}
.buttons button {
	height: 56px;
	border-radius: 16px;
	width: 200px;
}

.buttons-auth {
	background-color: #31384a;
	margin-right: 10px;
}

.button-demo {
	background-color: transparent;
	border: 2px solid #363a45;
	transition: 400ms;
	height: 56px;
	border-radius: 16px;
}

.button-demo.demo-active {
	border: 2px solid #6660ff;
}
@media screen and (max-width: 1300px) {
	.buttons-wrapper {
		border-radius: 16px;
		height: fit-content;
		padding: 10px;
		margin-bottom: 20px;
	}
	.buttons-container {
		flex-direction: column;
	}
	.buttons-desc {
		width: 100%;
		justify-content: center;
	}
	.desc-content {
		margin-bottom: 10px;
	}
}
@media screen and (max-width: 800px) {
	.buttons-desc img {
		display: none;
	}
	.desc-content {
		width: 100%;
		margin-bottom: 10px;
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.buttons button {
		width: 50%;
	}
	.buttons-auth:nth-child(1) {
		display: none;
	}
}
</style>
