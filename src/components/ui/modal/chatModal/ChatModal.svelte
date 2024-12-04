<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang, langSel } from '$src/stores/HeaderStores';
import { setLanguage } from '$src/lib/i18n';
import { closeModal } from '$src/stores/modalStore';
</script>

<div
	class="inset-0 z-[9998] flex h-screen cursor-default items-center justify-center"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Enter' && closeModal()}">
	<div
		class="flex h-fit max-w-[26vw] cursor-default items-center justify-center rounded-md border border-[#363a45] bg-[#0d111d] p-4"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Enter'}">
		<div class="my-2.5 h-auto w-[90%]">
			<div class="mt-5 flex flex-wrap justify-between gap-2.5 text-white">
				<!-- Ваш контент -->
			</div>
		</div>
	</div>
</div>
