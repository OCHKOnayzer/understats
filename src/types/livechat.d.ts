interface LC_API {
	open_chat_window: () => void;
	hide_chat_window?: () => void;
	minimize_chat_window?: () => void;
	maximize_chat_window?: () => void;
	set_language?: (lang: string) => void;
	on?: (event: string, callback: (...args: any[]) => void) => void;
	off?: (event: string, callback?: (...args: any[]) => void) => void;
	on_chat_window_opened?: () => void;
	on_chat_window_hidden?: () => void;
	on_chat_window_minimized?: () => void;
}
