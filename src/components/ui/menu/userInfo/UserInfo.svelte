<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { currentModal, currentUser, logout, modalComponent, openModal } from '$src/stores/modalStore';
import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';
import { useUserProfile } from '$src/services/auth/useProfile';

import Button from '../../button/button.svelte';

import { goto } from '$app/navigation';

onMount(() => {
	initializeScreenWidthListener();
});
const { query } = useUserProfile();

$: if ($query.data) {
	currentUser.set($query.data);
}

const handleLogout = () => {
	currentUser.set(null);
	if ($isMobile) {
		currentModal.set('login');
		goto('/authorization');
	} else {
		logout();
		modalComponent.set('authModal');
	}
};
</script>

<div class="userContainer">
	{#if $query.isLoading}
		<p>Загрузка профиля...</p>
	{:else if $currentUser}
		<div class="user_flex">
			<div class="user_info">
				<span>{$t('menu.YourProfile')}</span>
				<div class="userName">{$currentUser.login || 'Email'}</div>
				<!-- <div class="user_wrapper">

									<span>ID:</span> <span>1231234</span>
				</div> -->
			</div>
			<div class="quitBtn">
				<button
					on:click="{handleLogout}"
					class="quit_button">
					<img
						src="assets/menu/leave.png"
						alt="Выйти" />
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
.userContainer {
	height: 7vh;
	padding: 5px;
	width: 100%;
	margin-top: 10px;
	background-color: #0d111d;
	border-radius: 5px;
}
.user_flex {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 98%;
	margin: 0 auto;
}
.user_info {
	width: 90%;
	display: flex;
	flex-direction: column;
}
.userName {
	font-size: 13px;
	color: #718096;
}
/* .user_info span {
	color: rgba(128, 128, 128, 0.383);
} */
.quitBtn {
	display: flex;
	justify-content: center;
	align-items: center;
}
.quit_button {
	height: 15px;
	width: 15px;
}
.quit_button img {
	height: 100%;
	width: 100%;
	user-select: none;
}
</style>
