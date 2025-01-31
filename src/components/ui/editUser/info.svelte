<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';
import { currentUser } from '$src/stores/modalStore';
import { formatDate } from '$src/utils/functions/formatDate';

import Lang from '../settingsSections/lang.svelte';
import SettingsSections from '../settingsSections/SettingsSections.svelte';
import SettingsTitle from '../settingsSections/SettingsTitle.svelte';

onMount(() => {
	initializeScreenWidthListener();
});
$: date = $currentUser?.dateReg ? formatDate($currentUser.dateReg) : '';
</script>

<SettingsSections>
	{#if $currentUser}
		<SettingsTitle title="{'settings.my_acc'}" />
	{/if}
	<div class="settings">
		{#if $currentUser}
			<div class="setings_item item-w">
				<div class="item_settings_info">
					<p class="settings_name">{$t('settings.create_data')}</p>
				</div>
				<input
					class="selected_element input_element"
					type="text"
					readonly
					value="{date}" />
			</div>
			<div class="setings_item item-w">
				<div class="item_settings_info">
					<p class="settings_name">{$t('settings.create_email')}</p>
				</div>
				<input
					class="selected_element input_element"
					type="text"
					readonly
					value="{$currentUser?.login ?? ''}" />
			</div>
		{/if}
		{#if !$isMobile}
			<Lang />
		{/if}
	</div>
</SettingsSections>

<style>
.settings {
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	align-items: center;
	width: 100%;
	position: relative;
}
.settings_name {
	margin-top: 10px;
	margin-bottom: 10px;
}

.input_element {
	border: unset;
	font-size: 20px;
	padding-left: 10px;
	outline: none;
}
.setings_item {
	border-radius: 10px;
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
.selected_element:nth-child(1),
.selected_element:nth-child(2) {
	margin-right: 15px;
}
.item_settings_info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
@media (max-width: 1100px) {
	/* .user_email, */
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
	.item-w {
		width: 100%;
	}
	.setings_item:nth-child(1),
	.setings_item:nth-child(2) {
		margin-right: 0px;
	}
	.settings {
		padding: 0;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
/* @media screen and (max-height: 600px) {
	.email {
			padding-bottom: 14px;
		}
} */
@media (max-width: 768px) {
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
	.selected_element:nth-child(1) {
		margin: 0;
	}
	.setings_item:nth-child(1),
	.selected_element:nth-child(2) {
		margin-right: 0;
	}
}
</style>
