<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { useUserProfile } from '$src/services/auth/useProfile';
import { initializeScreenWidthListener, isMobile } from '$src/stores/isMobile';
import { currentModal, currentUser, logout, modalComponent } from '$src/stores/modalStore';

import { goto } from '$app/navigation';

onMount(() => {
	initializeScreenWidthListener();
});

const { query } = useUserProfile();
let isAuthenticated = $derived(!!$currentUser && !!$query.data);

$effect(() => {
	if ($query.data) {
		currentUser.set($query.data);
	}
});

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

{#if isAuthenticated}
	<div class="userContainer">
		<div class="user_flex">
			<div class="user_info">
				<span>{$t('menu.your_profile')}</span>
				<div class="userName">{$currentUser?.login || 'Email'}</div>
			</div>
			<div class="quitBtn">
				<button
					on:click="{handleLogout}"
					class="quit_button">
					<img
						src="assets/menu/leave.png"
						alt="{$t('menu.leave')}" />
				</button>
			</div>
		</div>
	</div>
{/if}

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
