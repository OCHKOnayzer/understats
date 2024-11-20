<script lang="ts">
import { t } from 'svelte-i18n';

import SwitchButton from '$src/components/ui/button/switchButton/SwitchButton.svelte';
import UserAprove from '$src/components/ui/button/userAprove/UserAprove.svelte';
import CancelButton from '$src/components/ui/button/userAprove/CancelButton.svelte';
import { switchLogin, switchReg, switchReFinish } from '$src/stores/modalStore';

import FormTitle from '../FormTitle.svelte';
import SocialContainer from '../social/SocialContainer.svelte';
import InputWrapper from '../Input/InputWrapper.svelte';
</script>

<form class="form_wrapper">
	<FormTitle modalActie="{'social.recover_title'}" />
	<InputWrapper
		input_type="{'text'}"
		title_wrapper="{$t('social.send_email')}"
		show_clear="{false}" />
	<SocialContainer />
	<div class="switch_container">
		<SwitchButton
			switch_text="{'social.have_acc'}"
			switch_modal="{switchLogin}" />
		<SwitchButton
			switch_text="{'social.cHave_acc'}"
			switch_modal="{switchReg}" />
	</div>
	<div class="aprove_wrapper">
		<CancelButton onUserText="{'other.cancel'}" />
		<UserAprove
			onUserAction="{switchReFinish}"
			onUserText="{'social.post_email'}" />
	</div>
</form>

<style>
.form_wrapper {
	height: 100%;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-top: 10px;
	padding-bottom: 10px;
}
.switch_container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 1%;
}
.aprove_wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
