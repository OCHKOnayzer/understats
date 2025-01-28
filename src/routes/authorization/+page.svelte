<script>
import LoginModal from '$src/components/ui/modal/authModal/loginModal/LoginModal.svelte';
import RegistrationModal from '$src/components/ui/modal/authModal/registrationModal/RegistrationModal.svelte';
import { afterUrl } from '$src/stores/HeaderStores';
import { currentModal } from '$src/stores/modalStore';

import { goto } from '$app/navigation';
const backToApp = () => {
	goto($afterUrl);
};
</script>

<div class="auth">
	<button
		on:click="{backToApp}"
		class="back-app">
		<img
			src="assets/toApp.svg"
			alt="" />
	</button>
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
.back-app {
	position: absolute;
	top: 10px;
}
</style>
