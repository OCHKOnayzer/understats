<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { user, fetchUser, updateUser } from '$stores/menu';

import SettingsSections from '../settingsSections/SettingsSections.svelte';
import SettingsTitle from '../settingsSections/SettingsTitle.svelte';

let newPassword = '';
let oldPassword = '';
let password = '';

let isInitialized = false;

onMount(() => {
	fetchUser();
});

$: if ($user && !isInitialized) {
	password = $user.password || '';
	isInitialized = true;
}

const changePass = async () => {
	if (!$user) {
		console.error('Данные пользователя не загружены.');
		return;
	}

	let updatedPassword = $user.password;
	if (oldPassword === $user.password && newPassword.length >= 10) {
		updatedPassword = newPassword;
	} else if (oldPassword !== '' || newPassword !== '') {
		console.error('Ошибка: старый пароль неверен или новый пароль слишком короткий.');
		return;
	}

	const updatedUser = {
		id: $user.id,
		password: updatedPassword,
		image: $user.image,
		email: $user.email,
		date: $user.date,
		awards: $user.awards,
		level: $user.level,
		add_account: $user.add_account
	};

	try {
		console.log('Данные пользователя успешно обновлены:', updatedUser);

		clearInputs();
	} catch (error) {
		console.error('Ошибка при обновлении данных пользователя:', error);
	}
};

const clearInputs = () => {
	oldPassword = '';
	newPassword = '';
};

type FieldType = 'username' | 'oldPassword' | 'newPassword';

const clearField = (field: FieldType) => {
	switch (field) {
		case 'username':
			break;
		case 'oldPassword':
			oldPassword = '';
			break;
		case 'newPassword':
			newPassword = '';
			break;
		default:
			break;
	}
};
</script>

<SettingsSections>
	<SettingsTitle title="{'settings.pass_change'}" />
	<div class="setings">
		<div class="setings_item item-w old-pass">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.old_pass')}</p>
				<button
					class="clear_curr max--w"
					on:click="{() => clearField('oldPassword')}">{$t('other.clear')}</button>
				<button
					class="clear_curr min--w"
					on:click="{() => clearField('oldPassword')}">X</button>
			</div>
			<input
				class="selected_element input_element"
				type="password"
				bind:value="{oldPassword}"
				placeholder="*****" />
		</div>
		<div class="setings_item item-w new-pass">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.new_pass')}</p>
				<button
					class="clear_curr max--w"
					on:click="{() => clearField('newPassword')}">{$t('other.clear')}</button>
				<button
					class="clear_curr min--w"
					on:click="{() => clearField('oldPassword')}">X</button>
			</div>
			<input
				class="selected_element input_element"
				type="password"
				bind:value="{newPassword}"
				placeholder="*****" />
		</div>
	</div>
	<div class="updataBtn">
		<button
			class="btn_upd"
			on:click="{changePass}">
			{$t('other.save')}
		</button>
	</div>
</SettingsSections>

<style>
.settings_name {
	margin-top: 10px;
	margin-bottom: 10px;
}

.input_element {
	border: unset;
	font-size: 20px;
	padding-left: 10px;
}

.setings {
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	align-items: center;
	height: fit-content;
	width: 100%;
	position: relative;
	padding-bottom: 10px;
}
.setings_item {
	height: 12vh;
	border-radius: 10px;
}
.item-w {
	width: 33%;
}
.min--w {
	display: none;
}
.setings_item:nth-child(1),
.setings_item:nth-child(2) {
	margin-right: 15px;
}
.setings_item:last-child {
	margin-right: 0;
}
/* .pass_sett .selected_element {
	background-color: #1c202b;
} */
.selected_element {
	background-color: #20242f;
	color: #707f96;
	width: 98%;
	border-radius: 10px;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.selected_element:nth-child(1),
.selected_element:nth-child(2) {
	margin-right: 15px;
}
/* .selected_menu_element {
	padding-right: 10px;
	padding-left: 10px;
} */
.item_settings_info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.clear_curr {
	background: transparent;
	border: unset;
	color: #6660ff;
	cursor: pointer;
}
/* .user_email {
	font-size: 20px;
} */
.btn_upd {
	border: 1px solid;
	border-radius: 80px;
	height: 40px;
	width: 9vh;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: unset;
}
.updataBtn {
	display: flex;
	padding-top: 20px;
	padding-bottom: 20px;
	font-size: 20px;
}
.btn_upd:nth-child(1) {
	margin-right: 10px;
	background-color: #5cc451;
	color: #0f1f23;
	font-size: 15px;
	width: 8vw;
}
.btn_upd:nth-child(2) {
	background-color: #707f95;
	color: white;
}
@media (max-width: 1300px) {
	.btn_upd:nth-child(1) {
		width: 97px;
	}
	.btn_upd:nth-child(2) {
		width: 80px;
	}
}
@media (max-width: 1100px) {
	/* .user_email, */
	.input_element,
	.item_settings_info p:nth-child(1) {
		font-size: 15px;
	}
	.min--w {
		display: block;
	}
	.max--w {
		display: none;
	}
	.selected_element {
		height: 50%;
	}
}
@media screen and (max-height: 600px) {
	.setings {
		padding-bottom: 4%;
	}
	.selected_element {
		height: 70%;
	}
	/* .email {
		padding-bottom: 14px;
	} */
}
@media (max-width: 768px) {
	.max--w {
		display: block;
	}
	.min--w {
		display: none;
	}
	.setings {
		padding: 0;
	}
	.new-pass {
		display: none;
	}
	.setings {
		width: 100%;
	}
	.item-w {
		width: 100%;
	}
	.selected_element {
		height: 9vh;
	}
	.setings_item:nth-child(1) {
		margin-right: 0;
	}
	.updataBtn {
		padding-top: 6vh;
	}
	.btn_upd {
		border-radius: 12px;
	}
	.btn_upd:nth-child(1) {
		background-color: transparent;
		border: 1px solid white;
		color: white;
		height: 9vh;
		width: 100%;
	}
}
</style>
