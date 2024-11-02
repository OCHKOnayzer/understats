<script lang="ts">
import LoginModal from '../loginModal/LoginModal.svelte';
import RegistrationModal from '../registrationModal/RegistrationModal.svelte';
import RecoverModal from '../recoverModal/ReModal.svelte';

export let switchLogin: () => void;
export let switchReg: () => void;
export let switchRecover: () => void;
export let switchReFinish: () => void;
export let closeModal: () => void;
export let current_modal: string;
</script>

<div class="current_wrapper">
	{#key current_modal}
		{#if current_modal === 'reg'}
			<RegistrationModal
				switchNext={switchLogin}
				switchBack={switchRecover}
				{closeModal} />
		{:else if current_modal === 'login'}
			<LoginModal
				switchNext={switchReg}
				switchBack={switchRecover}
				{closeModal} />
		{:else if current_modal === 'recover'}
			<RecoverModal
				switchNext={switchLogin}
				switchBack={switchReg}
				{switchReFinish}
				{closeModal} />
			<!-- Для восстановления, если доступен -->
		{:else if current_modal === 'reFinish'}
			<!-- <RecoverModal switchNext={switchLogin} switchBack={switchReg} /> -->
		{/if}
	{/key}
</div>

<style>
.current_wrapper {
	height: 100%;
}
</style>
