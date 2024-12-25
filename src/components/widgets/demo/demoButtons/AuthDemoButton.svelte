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
		</div>
		<button
			class="button-demo"
			class:demo-active="{$isDemoEnabled}"
			on:click="{() => toggleDemoMode()}">
			{$t('other.demo')}
		</button>
	</div>
</div>

<style>
.buttons-wrapper {
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.buttons-container {
	width: 98%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.buttons-desc{ 
	display: flex;
	flex-direction: column;
	align-items: center;
}
.buttons-desc img {
	height: 50px;
	width: 50px;
}
.desc-content{ 
	display: flex;
	flex-direction: column;
	color: white;
	text-align: center;
	width: 80%;
}
.desc-content span:nth-child(1){ 
	font-size: 25px;
	margin-bottom: 10px;
}
.desc-content span:nth-child(2){ 
	font-size: 14px;
	margin-bottom: 20px;
}
.buttons button {
	height: 56px;
	color: white;
	border-radius: 16px;
	margin-bottom: 10px;
}

.buttons-auth {
	width: 200px;
	background-color: #31384a;
	margin-right: 10px;
}

.button-demo {
	width: 232px;
	background-color: transparent;
	border: 2px solid #363a45;
	transition: 400ms;
	height: 56px;
	color: white;
	border-radius: 16px;
}

.button-demo.demo-active {
	border: 2px solid #6660ff;
}
@media screen and (max-width: 800px) {
	.buttons-container {
		justify-content: unset;
	}
	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 0;
	}
	.buttons button {
		width: 80vw;
		margin-bottom: 10px;
	}
	.buttons-auth{ 
		margin-right: 0;
	}
	.button-demo {
		width: 80vw;
	}
}
</style>
