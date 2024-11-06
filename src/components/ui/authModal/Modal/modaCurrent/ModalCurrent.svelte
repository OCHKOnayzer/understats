<script lang="ts">
import { currentModal } from '$src/stores/modalStore';

import LoginModal from '../loginModal/LoginModal.svelte';
import RegistrationModal from '../registrationModal/RegistrationModal.svelte';
import RecoverModal from '../recoverModal/ReModal.svelte';
</script>

<div class="current_wrapper">
	{#key currentModal}
		{#if $currentModal === 'reg'}
			<RegistrationModal />
		{:else if $currentModal === 'login'}
			<LoginModal />
		{:else if $currentModal === 'recover'}
			<RecoverModal />
		{:else if $currentModal === 'reFinish'}
			<!-- <RecoverModal switchNext={switchLogin} switchBack={switchReg} /> -->
		{/if}
	{/key}
</div>

<style>
.current_wrapper {
	height: 100%;
}
</style>
