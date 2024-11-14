<script lang="ts">
	import { t } from 'svelte-i18n';
	
	import SwitchButton from '$src/components/ui/button/switchButton/SwitchButton.svelte';
	import CancelButton from '$src/components/ui/button/userAprove/CancelButton.svelte';
	import UserAprove from '$src/components/ui/button/userAprove/UserAprove.svelte';
	import { useAuth } from '$src/services/auth/useAuth';
	import { switchRecover, switchReg } from '$src/stores/modalStore';
	
	import FormTitle from '../FormTitle.svelte';
	import InputWrapper from '../Input/InputWrapper.svelte';
	import SocialContainer from '../social/SocialContainer.svelte';
	
	import type { IAuthForm } from '$src/types/types';
	const { form, mutation } = useAuth(false);
	
	const loginUser = () => {
		const data: IAuthForm = {
			login,
			password
		};

		console.log('data',data);
		$mutation.mutate(data);
	};
	
	let login = 'qweqwe';
	let password = 'qweqwe';

	</script>
	
	<form
		class="form_wrapper"
		on:submit|preventDefault={loginUser}>
		<FormTitle modalActie={'social.sign_in_title'} />
		<InputWrapper
			default_type={'text'}
			title_wrapper={$t('social.send_email')}
			show_clear={false}
			bind:input={login} />
		<InputWrapper
			default_type={'password'}
			title_wrapper={$t('social.send_password')}
			show_clear={true}
			bind:input={password} />
		<SocialContainer />
		<div class="switch_container">
			<SwitchButton
				switch_text={'social.unBlock_acc'}
				switch_modal={switchRecover} />
			<SwitchButton
				switch_text={'social.cHave_acc'}
				switch_modal={switchReg} />
		</div>
		<div class="aprove_wrapper">
			<CancelButton onUserText={'other.cancel'} />
			<UserAprove
				onUserAction={loginUser}
				onUserText={'social.sign_in'} />
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
	