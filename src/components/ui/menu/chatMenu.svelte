<script lang="ts">
import { t } from 'svelte-i18n';

import { openModal, modalComponent } from '$src/stores/modalStore';
</script>

<button
	on:click="{() => openModal('ChatModal')}"
	class="flex h-auto w-full flex-col justify-center rounded-lg
    {$modalComponent === 'ChatModal' ? 'bg-activeElements' : 'bg-[#363A45]'}">
	<div class="flex h-[60px] items-center rounded-lg text-gray-500 no-underline transition duration-300 hover:cursor-pointer">
		<div class="ml-2 mr-2.5 flex h-[20px] w-[20px] items-center justify-center">
			<img
				src="{$modalComponent === 'ChatModal' ? 'assets/menu/active/chat.png' : 'assets/menu/menuElements/chat.png'}"
				alt="{$t('{item.title}')}"
				class="h-full w-full object-contain" />
		</div>
		<span class="flex items-center text-sm text-white">
			{$t('menu.OpenChat')}
		</span>
	</div>
</button>
