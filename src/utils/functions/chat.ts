let isChatOpen = false;

function waitForJivo(callback: () => void) {
	const checkInterval = setInterval(() => {
		if (window.jivo_api) {
			clearInterval(checkInterval);
			callback();
		}
	}, 500);
}

export function ifWindow() {
	waitForJivo(() => {
		window.jivo_api.hide();

		window.jivo_api.onOpen = () => {
			isChatOpen = true;
		};

		window.jivo_api.onClose = () => {
			isChatOpen = false;
		};
	});
}
export function toggleChat() {
	if (isChatOpen) {
		closeChat();
	} else {
		openChat();
	}
}

function openChat() {
	if (window.jivo_api) {
		window.jivo_api.show();
		window.jivo_api.open();
	}

	isChatOpen = true;
}

function closeChat() {
	if (window.jivo_api) {
		window.jivo_api.close();
		window.jivo_api.hide();
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
