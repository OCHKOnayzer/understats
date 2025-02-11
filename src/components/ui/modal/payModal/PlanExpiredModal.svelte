<script>
import { t } from 'svelte-i18n';

import { closeModal } from '$src/stores/modalStore';

import { goto } from '$app/navigation';

function goTariff() {
	goto('/tariffs');
	closeModal();
}
</script>

<div
	class="expired_container"
	on:click="{closeModal}"
	role="button"
	tabindex="0"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<div
		class="expired_modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
		<div class="modal_logo">
			<img
				src="assets/modal/info.png"
				alt="" />
		</div>
		<div class="container">
			<div class="title">
				{$t('social.limit_end')}
			</div>
			<div>
				{$t('social.tariff_end')}
			</div>
		</div>
		<div class="button_container">
			<button on:click="{() => goTariff()}">{$t('other.choose_plan')}</button>
			<button on:click="{() => closeModal()}">{$t('other.close')}</button>
		</div>
	</div>
</div>

<style>
.expired_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	animation: fade-in 0.3s ease-out;
	cursor: default;
	color: white;
}
.expired_modal {
	@apply bg-input;

	width: 525px;
	min-height: 491px;
	border-radius: 36px;
	animation: slide-in 0.3s ease-out;
	cursor: default;
}
.modal_logo {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 22px;
	margin-bottom: 24px;
}
.modal_logo img {
	width: 145px;
	height: 145px;
}
.container {
	text-align: center;
}
.title {
	margin-bottom: 4px;
	font-weight: 700;
	font-size: 24px;
}
.button_container {
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 24px;
	flex-direction: column;
	gap: var(--elements-padding);
}
.button_container button {
	height: 56px;
	width: 90%;
	border-radius: 12px;
}
.button_container button:nth-child(1) {
	background-color: var(--accent-color);
}
.button_container button:nth-child(2) {
	background-color: #0d111d;
}
@media screen and (max-width: 800px) {
	.expired_container {
		align-items: flex-end;
	}
	.expired_modal {
		width: 100vw;
		border-radius: 20px 20px 0 0;
		transform: translateY(100%);
		animation: slideUp 0.3s ease-out forwards;
	}
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
@keyframes slideUp {
	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
}
</style>
