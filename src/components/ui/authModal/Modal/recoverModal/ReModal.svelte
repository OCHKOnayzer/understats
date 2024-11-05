<script lang="ts">
interface ReModalProps {
	switchNext: () => void;
	switchBack: () => void;
	closeModal: () => void;
	switchReFinish: () => void;
}

import { t } from 'svelte-i18n';

import ApproveButton from '$src/components/ui/button/approveButton/ApproveButton.svelte';
import SwitchButton from '$src/components/ui/button/switchButton/SwitchButton.svelte';
import UserAprove from '$src/components/ui/button/userAprove/UserAprove.svelte';
import CancelButton from '$src/components/ui/button/userAprove/CancelButton.svelte';

import FormTitle from '../FormTitle.svelte';
import SocialContainer from '../social/SocialContainer.svelte';
import InputWrapper from '../Input/InputWrapper.svelte';

const { switchNext, switchBack, closeModal, switchReFinish } = $$props as ReModalProps;
</script>

<form class="form_wrapper">
	<FormTitle modalActie={'social.recover_title'} />
	<InputWrapper
		input_type={'text'}
		title_wrapper={$t('social.send_email')}
		show_clear={false} />
	<SocialContainer />
	<div class="switch_container">
		<SwitchButton
			switch_text={'social.have_acc'}
			switch_modal={switchNext} />
		<SwitchButton
			switch_text={'social.cHave_acc'}
			switch_modal={switchBack} />
	</div>
	<div class="aprove_wrapper">
		<UserAprove
			onUserAction={switchReFinish}
			onUserText={'social.post_email'} />
		<CancelButton
			onUserText={'other.cancel'}
			{closeModal} />
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
}
</style>
