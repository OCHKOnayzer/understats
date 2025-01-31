<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { user, fetchUser, updateUser } from '$stores/menu';
import { changeService } from '$src/services/auth/changePass.service';

import SettingsSections from '../settingsSections/SettingsSections.svelte';
import SettingsTitle from '../settingsSections/SettingsTitle.svelte';

let newPassword = '';
let oldPassword = '';

let newField = false;
let oldField = false;

onMount(() => {
	fetchUser();
});

const changePass = async () => {
	try {
		await changeService.changePassword(oldPassword, newPassword);
	} catch (error) {
		console.error('Failed to change password:', error);
	}
};

const clearField = (field: 'oldPassword' | 'newPassword') => {
	if (field === 'oldPassword') {
		oldPassword = '';
	} else if (field === 'newPassword') {
		newPassword = '';
	}
};

const showField = (field: string) => {
	return field === 'newPass' ? (newField = !newField) : (oldField = !oldField);
};
</script>

<SettingsSections>
	<SettingsTitle title="{'settings.pass_change'}" />
	<div class="settings">
		<div class="setings_item item-w old-pass">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.old_pass')}</p>
				<button
					class="clear_curr max--w"
					on:click="{() => clearField('oldPassword')}">{$t('other.clear')}</button>
			</div>
			<input
				class="selected_element input_element"
				type="{newField ? 'text' : 'password'}"
				autocomplete="new-password"
				bind:value="{oldPassword}"
				placeholder="••••••••••••••••••••" />
			<button
				class="show_pass"
				on:click="{() => showField('newPass')}">
				<img
					src="assets/modal/glaz.png"
					alt="" />
			</button>
		</div>
		<div class="setings_item item-w new-pass">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.new_pass')}</p>
				<button
					class="clear_curr max--w"
					on:click="{() => clearField('newPassword')}">{$t('other.clear')}</button>
			</div>
			<input
				class="selected_element input_element"
				type="{oldField ? 'text' : 'password'}"
				autocomplete="new-password"
				bind:value="{newPassword}"
				placeholder="••••••••••••••••••••" />
			<button
				class="show_pass"
				on:click="{() => showField('oldPass')}">
				<img
					src="assets/modal/glaz.png"
					alt="" />
			</button>
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

.settings {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: fit-content;
	width: 100%;
	position: relative;
	padding-bottom: var(--elements-padding);
}
.setings_item {
	border-radius: 10px;
	position: relative;
}
.item-w {
	width: 33%;
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
	width: 100%;
	border-radius: 10px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.show_pass {
	position: absolute;
	right: 10px;
	top: 60%;
	background: transparent;
	border: none;
	cursor: pointer;
	height: 20px;
	width: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
}
.show_pass img {
	height: 100%;
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
	color: var(--accent-color);
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
	.item-w {
		width: 50%;
	}
}
@media (max-width: 1100px) {
	/* .user_email, */
	.settings {
		flex-direction: column;
	}
	.input_element,
	.item_settings_info p:nth-child(1) {
		font-size: 15px;
	}
	.selected_element {
		height: 60px;
	}
	.setings_item {
		height: fit-content;
	}
	.btn_upd {
		border-radius: 12px;
	}
	.item-w {
		width: 100%;
	}
	.setings_item:nth-child(1),
	.setings_item:nth-child(2) {
		margin-right: 0px;
	}
	.btn_upd:nth-child(1) {
		background-color: transparent;
		border: 1px solid white;
		color: white;
		width: 100%;
		margin-right: 0px;
	}
	.updataBtn {
		padding-top: 0px;
		margin-top: 0vh;
	}
	.btn_upd {
		height: 60px;
	}
}
/* @media screen and (max-height: 780px) {
	.updataBtn {
		margin-top: 3vh;
	}
} */
/* @media screen and (max-height: 600px) {
	.settings {
		padding-bottom: 4%;
	}
} */
@media (max-width: 768px) {
	.show_pass {
		right: 40px;
	}
	.setings_item {
		display: flex;
		flex-direction: column;
		height: fit-content;
		align-items: center;
		padding-left: 28px;
		padding-right: 28px;
	}
	.settings {
		padding: 0;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.item-w {
		width: 100%;
	}
	.selected_element {
		height: 60px;
		width: 100%;
		margin: 0;
	}
	.max--w {
		display: block;
	}
	.settings {
		padding: 0;
	}
	.setings_item:nth-child(1) {
		margin-right: 0;
	}
	.updataBtn {
		justify-content: center;
		padding-top: 20px;
		padding-left: 28px;
		padding-right: 28px;
	}
	.setings_item:nth-child(1),
	.selected_element:nth-child(2) {
		margin-right: 0;
	}
	.btn_upd:nth-child(1) {
		width: 100%;
		margin: 0px;
	}
}
</style>
