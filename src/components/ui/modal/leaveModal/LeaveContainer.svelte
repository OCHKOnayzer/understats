<script>
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { modalComponent, currentModal, logout, currentUser, closeModal } from '$src/stores/modalStore';
import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';

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
	on:click="{closeModal}"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<div
		class="leave_modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape'}">
		<div class="leave_wrapper">
			<LeaveModalContent />
			<div class="button_wrapper">
				<button
					class="logout_btn"
					on:click="{handleLogout}">
					{$t('other.leave_acc')}
				</button>
				<button
					class="cancel_btn"
					on:click="{closeModal}">
					{$t('other.cancel')}
				</button>
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
	width: 100vw;
	animation: fade-in 0.3s ease-out;
}
.leave_modal {
	width: 420px;
	min-height: 250px;
	background: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	cursor: default;
	transform: translateY(-20px);
	animation: slide-in 0.3s ease-out forwards;
	position: relative;
}
.leave_wrapper {
	width: 100%;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.button_wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}
.logout_btn,
.cancel_btn {
	width: 100%;
	color: white;
	font-size: 16px;
	font-weight: 600;
	border-radius: 16px;
	height: 56px;
	border: none;
	cursor: pointer;
	transition: 0.4s ease-in-out;
}
.logout_btn {
	background: var(--accent-color);
	margin-bottom: var(--elements-padding);
}
.cancel_btn {
	background-color: #20242f;
}
.cancel_btn:hover {
	background-color: #191a1b;
}
.logout_btn:hover {
	background: #ff5252;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slide-in {
	from {
		transform: translateY(-20px);
	}
	to {
		transform: translateY(0);
	}
}

@media screen and (max-width: 800px) {
	.leave_container {
		height: 100dvh;
		align-items: flex-end;
	}

	.leave_modal {
		width: 100vw;
		border-radius: 20px 20px 0 0;
		transform: translateY(100%);
		animation: slideUp 0.3s ease-out forwards;
	}

	@keyframes slideUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
}
</style>
