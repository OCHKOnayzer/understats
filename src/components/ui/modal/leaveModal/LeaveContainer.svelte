<script>
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { modalComponent, currentModal, logout, currentUser, closeModal } from '$src/stores/modalStore';
import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';

import UserAprove from '../../button/userAprove/UserAprove.svelte';
import CancelButton from '../../button/userAprove/CancelButton.svelte';
import ModalTitle from '../ModalTitle.svelte';

import LeaveModalContent from './leaveContent/LeaveModalContent.svelte';

import { goto } from '$app/navigation';

onMount(() => {
	initializeScreenWidthListener();
});

const handleLogout = () => {
	currentUser.set(null);
	if ($isMobile) {
		currentModal.set('login');
		goto('/authorization');
	} else {
		logout();
		modalComponent.set('authModal');
	}
};
</script>

<div
	class="leave_container"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<div
		class="leave_modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape'}">
		<div class="leave_wrapper">
			<ModalTitle />
			<LeaveModalContent />
			<div class="button_wrapper">
				<CancelButton onUserText="other.cancel" />
				<UserAprove
					onUserText="{$t('other.leave_acc')}"
					onUserAction="{handleLogout}" />
			</div>
		</div>
	</div>
</div>

<style>
.leave_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	cursor: default;
}
.leave_modal {
	width: 420px;
	height: 230px;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	cursor: default;
}
.leave_wrapper {
	width: 90%;
	height: 80%;
}
.button_wrapper {
	color: white;
	height: fit-content;
	display: flex;
	padding-bottom: 20px;
	gap: 10px;
}
@media screen and (max-width: 800px) {
	.leave_container {
		height: 100dvh;
		align-items: flex-end;
	}
	.leave_modal {
		height: 250px;
		width: 100vw;
		border-radius: 20px 20px 0 0;
		transform: translateY(100%);
		animation: slideUp 0.1s ease-out forwards;
	}
}
@keyframes slideUp {
	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
}
</style>
