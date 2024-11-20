<script lang="ts">
import { useUserProfile } from '$src/services/auth/useProfile';
import { currentUser, logout, modalComponent, openModal } from '$src/stores/modalStore';

import Button from '../../button/button.svelte';

const { query } = useUserProfile();

$: if ($query.data) {
	currentUser.set($query.data);
}

const handleLogout = () => {
	logout();
	currentUser.set(null);
	modalComponent.set('authModal');
};
</script>

<div class="userContainer">
	{#if $query.isLoading}
		<p>Загрузка профиля...</p>
	{:else if $currentUser}
		<div class="user_flex">
			<div class="avatar">
				<img
					class="image"
					src="assets/avatar.jpg"
					alt="user avatar" />
			</div>
			<div class="user_info">
				<div class="user_wrapper">
					<div class="userName">{$currentUser.login || 'Email'}</div>
					<!--					<span>ID:</span> <span>1231234</span>-->
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
		</div>
	{:else}
		<p>Вы не авторизованы.</p>
		<Button
			on:click="{() => openModal('authModal')}"
			variant="default">Войти</Button>
	{/if}
</div>

<style>
.userContainer {
	height: fit-content;
	padding: 5px;
	width: 100%;
	margin: 0 auto;
	background-color: #0d111d;
	border-radius: 5px;
}
.user_flex {
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatar {
	border-radius: 50%;
	height: 30px;
	width: 30px;
	overflow: hidden;
}
.image {
	height: 100%;
	width: 100%;
}
.user_info {
	width: 80%;
	margin-left: 10px;
	display: flex;
	justify-content: space-between;
}
.userName {
	font-size: 15px;
}
.user_info span {
	color: rgba(128, 128, 128, 0.383);
}
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
