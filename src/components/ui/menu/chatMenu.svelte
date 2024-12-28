<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

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
});

function openLiveChat() {
	if (typeof window.LC_API !== 'undefined') {
		window.LC_API.open_chat_window();
		isChatOpen = true;
	}
}
</script>

<button
	on:click="{openLiveChat}"
	class="flex h-auto w-full flex-col justify-center rounded-lg
    {isChatOpen ? 'bg-activeElements' : 'bg-[#363A45]'}">
	<div class="flex h-[60px] items-center rounded-lg text-gray-500 no-underline transition duration-300 hover:cursor-pointer">
		<div class="ml-[12px] mr-2.5 flex h-[20px] w-[20px] items-center justify-center">
			<img
				src="{isChatOpen ? 'assets/menu/active/chat.png' : 'assets/menu/menuElements/chat.png'}"
				alt="{$t('{item.title}')}"
				class="h-full w-full object-contain" />
		</div>
		<span class="flex items-center text-sm text-white">
			{$t('menu.OpenChat')}
		</span>
	</div>
</button>
