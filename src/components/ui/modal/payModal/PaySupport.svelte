<script>
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { toggleChat, ifWindow } from '$src/utils/functions/chat';
import { closeModal } from '$src/stores/modalStore';

onMount(() => {
	ifWindow();
});

const PayFunction = () => {
	closeModal();
	toggleChat();
};
</script>

<div
	class="pay_support_container"
	on:click="{closeModal}"
	role="button"
	tabindex="0"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<div
		class="pay_support_modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
		<div class="title">
			<span>{$t('tariffs.pay_support_title')}</span>
		</div>
		<div class="support_content">
			{$t('tariffs.pay_support_content')}
		</div>
		<div class="button_wrapper">
			<button on:click="{PayFunction}">
				{$t('tariffs.go_pay')}
			</button>
			<button on:click="{closeModal}">
				{$t('other.close')}
			</button>
		</div>
	</div>
</div>

<style>
.pay_support_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	color: white;
	cursor: default;
	animation: fade-in 0.3s ease-out;
}
.pay_support_modal {
	background-color: #20242f;
	width: 525px;
	min-height: 342px;
	border-radius: 36px;
	cursor: default;
	transform: translateY(-20px);
	animation: slide-in 0.3s ease-out forwards;
}
.title {
	margin-top: 32px;
	height: fit-content;
	width: 100%;
	font-weight: 700;
	font-size: 24px;
	text-align: center;
}
.support_content {
	margin-left: 32px;
	margin-right: 32px;
	text-align: center;
}
.button_wrapper {
	margin-left: 32px;
	margin-right: 32px;
}
.button_wrapper button {
	width: 100%;
	background-color: #0d111d;
	height: 56px;
	border-radius: 12px;
}
.button_wrapper button:nth-child(1) {
	background-color: var(--accent-color);
	margin-top: 24px;
	margin-bottom: 12px;
	transition: 300ms;
}
.button_wrapper button:nth-child(1):hover {
	background-color: hsl(242, 76%, 67%);
}
.button_wrapper button:nth-child(2) {
	background-color: #0d111d;
	margin-bottom: 32px;
	transition: 300ms;
}
.button_wrapper button:nth-child(2):hover {
	background-color: #0d0f16;
}
@media screen and (max-width: 800px) {
	.pay_support_container {
		height: 100dvh;
		align-items: flex-end;
	}
	.pay_support_modal {
		width: 100vw;
		border-radius: 20px 20px 0 0;
		min-height: 300px;
		height: fit-content;
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
