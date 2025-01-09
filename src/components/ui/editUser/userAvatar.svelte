<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { user, fetchUser, updateUser } from '$stores/menu';

import { AllAvatar } from './image.ts';

let showSelectAvatar = false;
let isColorChanged = false;

let selectedAvatar = '';
let newAvatar: File | null = null;

let avatars = AllAvatar;

const changeUserAvatar = () => {
	showSelectAvatar = !showSelectAvatar;
	isColorChanged = !isColorChanged;
};

const selectAvatar = (avatarPath: string) => {
	selectedAvatar = avatarPath;

	if ($user) {
		const updatedUser = {
			...$user,
			image: selectedAvatar
		};

		updateUser(updatedUser)
			.then(() => {
				console.log('Аватар пользователя успешно обновлен.');
			})
			.catch((err: any) => {
				console.error('Ошибка при обновлении аватара:', err);
			});

		showSelectAvatar = false;
	}
};

const handleFileUpload = async (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files.length > 0) {
		newAvatar = target.files[0];

		if (newAvatar) {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.result) {
					const newAvatarPath = reader.result.toString();

					avatars = [...avatars, { name: newAvatar.name, path: newAvatarPath }];
				}
			};

			reader.readAsDataURL(newAvatar);
		}
	}
};

onMount(() => {
	fetchUser();
});
</script>

<div class="avatarWidgets">
	<div class="avatarWidget_wrapper">
		<div class="curr_user_avatar">
			<div class="us_av">
				{#if $user}
					<img
						src="{$user.image}"
						alt="Текущий аватар" />
				{/if}
			</div>
		</div>

		<div
			class="select_avatar"
			class:block="{showSelectAvatar}">
			<div class="all_avatar">
				<div class="image usingAvatar">
					{#if $user}
						<img
							src="{$user.image}"
							alt="Текущий аватар" />
					{/if}
				</div>

				{#each avatars as item}
					<div
						class="image nActive"
						tabindex="0"
						role="button"
						on:click="{() => selectAvatar(item.path)}"
						on:keydown="{(event) => {
							if (event.key === 'Enter' || event.key === ' ') selectAvatar(item.path);
						}}">
						<img
							src="{item.path}"
							alt="Выбор аватара" />
					</div>
				{/each}
			</div>
		</div>

		<div class="avatar_elements_menu">
			<span class="avatar--text">{$t('settings.avatar')}</span>
			<div class="avatar_elements_btn">
				<button
					class="btn_avatar"
					class:changedColor="{showSelectAvatar}"
					on:click="{changeUserAvatar}">
					<span>{$t('other.select')}</span>
				</button>

				<label
					class="btn_avatar"
					for="fileUpload">
					<span>{$t('other.upload')}</span>
					<input
						id="fileUpload"
						type="file"
						accept="image/*"
						on:change="{handleFileUpload}"
						style="display: none;" />
				</label>
			</div>
		</div>
	</div>
</div>

<style>
.avatarWidgets {
	background: #171b26;
	color: white;
	border-radius: 8px;
	box-sizing: border-box;
	height: 20vh;
	transition: background 0.3s ease;
	width: 98%;
	margin: 0 auto;
	padding: 0 20px;
}

.avatarWidget_wrapper {
	width: 98%;
	margin: 0 auto;
	height: 100%;
	display: flex;
}

.curr_user_avatar {
	height: 100%;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
}

.us_av {
	height: 13vh;
	width: 13vh;
	border-radius: 50%;
	overflow: hidden;
}

.us_av img {
	height: 100%;
	width: 100%;
}

.avatar_elements_menu {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 30px;
}

.avatar--text {
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-size: 25px;
	height: 5vh;
	min-width: 9vw;
	width: fit-content;
	padding-bottom: 10px;
}

.avatar_elements_btn {
	display: flex;
	align-items: left;
	width: 100%;
}

.btn_avatar {
	border: 1px solid;
	border-radius: 80px;
	height: 40px;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background 0.3s ease;
	background: transparent;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.btn_avatar:nth-child(1) {
	margin-right: 10px;
	border-color: #6660ff;
	color: white;
}

.btn_avatar:nth-child(2) {
	border-color: #5cc451;
	color: white;
	background: transparent;
}
.btn_avatar:hover {
	background: rgba(255, 255, 255, 0.1);
}
.changedColor {
	background: #6660ff;
}
.select_avatar {
	width: 20vw;
	display: none;
	justify-content: center;
	align-items: center;
}
.block {
	display: flex;
}
.all_avatar {
	width: 90%;
	height: 80%;
	border: 1px solid #50545f;
	border-radius: 8px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
}
.image {
	width: 55px;
	height: 55px;
	border-radius: 50%;
	margin-right: 10px;
	overflow: hidden;
	box-sizing: border-box;
	transition: 600ms;
	border: 3px solid transparent;
}
.nActive:hover {
	border-color: gray;
}
.usingAvatar {
	border-color: #6660ff;
}
.image img {
	height: 100%;
	width: 100%;
}
@media (max-width: 1200px) {
	.avatar--text {
		font-size: 20px;
	}
	.btn_avatar {
		height: 30px;
		font-size: 15px;
	}
}
</style>
