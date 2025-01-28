let isChatOpen = false;

export function ifWindow() {
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
}

export function toggleChat() {
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

		const liveChatScript = document.createElement('script');
		liveChatScript.src = 'https://cdn.livechatinc.com/widget.js';
		liveChatScript.async = true;
		liveChatScript.onload = function () {
			window.LiveChatWidget.call('set_language', 'ru');
		};
		document.head.appendChild(liveChatScript);

		window.LC_API.open_chat_window();
	}
}
