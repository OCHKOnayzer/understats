<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { afterUrl } from '$src/stores/HeaderStores';
import { isDemoEnabled, toggleDemoMode } from '$src/stores/demo';
import { initializeScreenWidthListener, isMobile } from '$src/stores/isMobile';
import { currentModal, openModal } from '$src/stores/modalStore';

import { goto } from '$app/navigation';

onMount(() => {
	initializeScreenWidthListener();
});
const openAuth = (modal: string) => {
	currentModal.set(modal);
	openModal('authModal');
};
const authUser = (auth: string) => {
	currentModal.set(auth);
	if ($isMobile) {
		afterUrl.set(window.location.pathname);
		goto('/authorization');
	} else {
		openAuth(auth);
	}
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
				on:click="{() => authUser('reg')}">{$t('social.create_account')}</button>
			<button
				class="buttons-auth"
				on:click="{() => authUser('login')}">{$t('social.auth')}</button>
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
	margin-bottom: var(--elements-padding);
	width: 100%;
	min-height: 120px;
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
	background-color: var(--table-color);
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
	border: 2px solid var(--accent-color);
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
	.buttons {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.buttons button {
		width: 30%;
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
		align-items: center;
	}
	.buttons button {
		width: 50%;
	}
	.buttons-auth:nth-child(1) {
		display: none;
	}
}
</style>
