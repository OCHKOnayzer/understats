<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import SwitchButton from '$src/components/ui/button/switchButton/SwitchButton.svelte';
import CancelButton from '$src/components/ui/button/userAprove/CancelButton.svelte';
import UserAprove from '$src/components/ui/button/userAprove/UserAprove.svelte';
import { useAuth } from '$src/services/auth/useAuth';
import { isDemoEnabled, toggleDemoMode } from '$src/stores/demo';
import { initializeScreenWidthListener, isMobile } from '$src/stores/isMobile';
import { switchReg } from '$src/stores/modalStore';

import FormTitle from '../FormTitle.svelte';
import InputWrapper from '../Input/InputWrapper.svelte';

const { form, mutation } = useAuth(false);

onMount(() => {
	initializeScreenWidthListener();
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
	<!-- <SocialContainer /> -->
	<div class="switch_container">
		<!-- <SwitchButton
			switch_text="{'social.unBlock_acc'}"
			switch_modal="{switchRecover}" /> -->
		{#if !$isMobile}
			<SwitchButton
				switch_text="{'social.cHave_acc'}"
				switch_modal="{switchReg}" />
		{/if}
	</div>
	<div class="aprove_wrapper">
		{#if $isMobile}
			<button
				class="demo-btn"
				class:demo-active="{$isDemoEnabled}"
				on:click="{toggleDemoMode}">
				{$t('other.demo')}
			</button>
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
.demo-btn {
	width: 100%;
	height: 56px;
	border-radius: 16px;
	margin-top: 36px;
	transition: 400ms;
	border: 2px solid #00ff47;
}
.demo-btn.demo-active {
	border: 2px solid var(--accent-color);
}
@media screen and (max-width: 800px) {
	.aprove_wrapper {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
}
</style>
