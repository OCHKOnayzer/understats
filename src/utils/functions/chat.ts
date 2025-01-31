let isChatOpen = false;

// Проверяем, доступен ли JivoChat или LiveChat
export function ifWindow() {
	if (window.jivo_api) {
		window.jivo_api.onOpen = () => {
			isChatOpen = true;
			console.log('JivoChat открыт');
		};

		window.jivo_api.onClose = () => {
			isChatOpen = false;
			console.log('JivoChat закрыт');
		};
	}

	if (window.LC_API) {
		window.LC_API.on_chat_window_opened = () => {
			isChatOpen = true;
			console.log('LiveChat открыт');
		};

		window.LC_API.on_chat_window_hidden = () => {
			isChatOpen = false;
			console.log('LiveChat закрыт');
		};
	}
}

// Функция для открытия/закрытия чата
export function toggleChat() {
	if (isChatOpen) {
		closeChat();
	} else {
		openChat();
	}
}

// Открыть чат
function openChat() {
	openJivositeChat();
	// openLiveChat(); // Оставь, если нужен LiveChat

	isChatOpen = true;
}

// Закрыть чат
function closeChat() {
	if (window.jivo_api) {
		window.jivo_api.close();
	}

	if (window.LC_API) {
		window.LC_API.minimize_chat_window();
	}

	isChatOpen = false;
}

// Открыть JivoChat
function openJivositeChat() {
	if (window.jivo_api) {
		window.jivo_api.open();
	}
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
