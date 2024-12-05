<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import SwitchButton from '$src/components/ui/button/switchButton/SwitchButton.svelte';
import CancelButton from '$src/components/ui/button/userAprove/CancelButton.svelte';
import UserAprove from '$src/components/ui/button/userAprove/UserAprove.svelte';
import { useAuth } from '$src/services/auth/useAuth';
import { switchRecover, switchReg } from '$src/stores/modalStore';

import FormTitle from '../FormTitle.svelte';
import InputWrapper from '../Input/InputWrapper.svelte';
import SocialContainer from '../social/SocialContainer.svelte';

const { form, mutation } = useAuth(false);

let isMobile = false;

// Проверяем размер экрана
function checkScreenWidth() {
	isMobile = window.innerWidth <= 768; // Считаем "мобильным" экран шириной 768px или меньше
}

onMount(() => {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => window.removeEventListener('resize', checkScreenWidth);
});

const loginUser = () => {
	$mutation.mutateAsync($form);
};
</script>

<form class="form_wrapper">
	<FormTitle modalActie="{'social.sign_in_title'}" />
	<InputWrapper
		default_type="{'text'}"
		title_wrapper="{$t('social.send_email')}"
		show_clear="{false}"
		bind:value="{$form.login}" />
	<InputWrapper
		default_type="{'password'}"
		title_wrapper="{$t('social.send_password')}"
		show_clear="{true}"
		bind:value="{$form.password}" />
	<SocialContainer />
	<div class="switch_container">
		<!-- <SwitchButton
			switch_text="{'social.unBlock_acc'}"
			switch_modal="{switchRecover}" /> -->
		{#if !isMobile}
			<SwitchButton
				switch_text="{'social.cHave_acc'}"
				switch_modal="{switchReg}" />
		{/if}
	</div>
	<div class="aprove_wrapper">
		{#if isMobile}
			<SwitchButton
				switch_text="{'social.cHave_acc'}"
				switch_modal="{switchReg}" />
		{:else}
			<CancelButton onUserText="{'other.cancel'}" />
		{/if}
		<UserAprove
			onUserText="{'social.sign_in'}"
			onUserAction="{loginUser}" />
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
@media screen and (max-width: 768px) {
	.aprove_wrapper {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
}
</style>
