<script lang="ts">
interface ModalCurrentInterface {
	switchLogin: () => void;
	switchReg: () => void;
	switchRecover: () => void;
	switchReFinish: () => void;
	closeModal: () => void;
	current_modal: string;
}
import LoginModal from '../loginModal/LoginModal.svelte';
import RegistrationModal from '../registrationModal/RegistrationModal.svelte';
import RecoverModal from '../recoverModal/ReModal.svelte';

const { switchLogin, switchReg, switchRecover, switchReFinish, closeModal, current_modal } = $$props as ModalCurrentInterface;
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
