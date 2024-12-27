<script>
import LoginModal from '$src/components/ui/modal/authModal/loginModal/LoginModal.svelte';
import RegistrationModal from '$src/components/ui/modal/authModal/registrationModal/RegistrationModal.svelte';
import { currentModal } from '$src/stores/modalStore';
</script>

<div class="auth">
	{#if $currentModal === 'login'}
		<LoginModal />
	{:else if $currentModal === 'reg'}
		<RegistrationModal />
	{/if}
</div>

<style>
.auth {
	height: 100vh;
	display: flex;
	align-items: center;
	color: white;
}
</style>
