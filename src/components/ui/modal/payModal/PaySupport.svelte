<script>
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { closeModal } from '$src/stores/modalStore';
let isChatOpen = false;

onMount(() => {
	if (window.LC_API) {
		window.LC_API.on_chat_window_opened = () => {
			isChatOpen = true;
		};

		window.LC_API.on_chat_window_hidden = () => {
			isChatOpen = false;
		};
	}

	if (window.jivo_onOpen) {
		window.jivo_onOpen = () => {
			isChatOpen = true;
		};
	}

	if (window.jivo_onClose) {
		window.jivo_onClose = () => {
			isChatOpen = false;
		};
	}

	if (window.jivo_destroy) {
		window.jivo_destroy();
	}
});

function toggleChat() {
	if (isChatOpen) {
		closeChat();
	} else {
		openChat();
	}
}

function openChat() {
	openJivositeChat();
	// openLiveChat();

	isChatOpen = true;
}

function openJivositeChat() {
	if (window.jivo_api) {
		window.jivo_api.open({});
	}
}

function closeChat() {
	if (window.jivo_api) {
		window.jivo_api.close();
	}

	isChatOpen = false;
}

function openLiveChat() {
	if (typeof window.LC_API !== 'undefined') {
		// window.LiveChatWidget.call('set_language', 'ru');

		var liveChatScript = document.createElement('script');
		liveChatScript.src = 'https://cdn.livechatinc.com/widget.js';
		liveChatScript.async = true;
		liveChatScript.onload = function () {
			window.LiveChatWidget.call('set_language', 'ru');
		};
		document.head.appendChild(liveChatScript);

		window.LC_API.open_chat_window();
	}
}
</script>

<div class="pay_support_container">
	<div class="pay_support_modal">
		<div class="title">
			<span>{$t('tariffs.pay_support_title')}</span>
		</div>
		<div class="support_content">
			{$t('tariffs.pay_support_content')}
		</div>
		<div class="button_wrapper">
			<button on:click="{toggleChat}">
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
}
.pay_support_modal {
	background-color: #20242f;
	width: 525px;
	min-height: 342px;
	border-radius: 36px;
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
}
.button_wrapper button:nth-child(1):hover {
	background-color: hsl(242, 76%, 67%);
	transition: 300ms;
}
.button_wrapper button:nth-child(2) {
	background-color: #0d111d;
	margin-bottom: 32px;
}
@media screen and (max-width: 800px) {
	.pay_support_container {
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
@keyframes slideUp {
	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
}
</style>
