<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang } from '$src/stores/languageStore';
import { setLanguage } from '$src/lib/i18n';
import { closeModal } from '$src/stores/modalStore';

import LangTitle from './title/langTitle.svelte';
import { LangArr } from './lang';

const setLang = (lang: string) => {
	setLanguage(lang);
	closeModal();
};
</script>

<div
	class="inset-0 z-[9998] flex h-screen cursor-default justify-end"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<!-- Добавлен класс 'slide-in' для анимации -->
	<div
		class="slide-in relative right-4 top-[10vh] flex h-fit max-w-[454px] cursor-default items-center justify-center rounded-md border border-[#363a45] bg-[#0d111d] p-4"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape'}">
		<div class="h-auto w-[100%]">
			<LangTitle />
			<div class="mt-5 flex flex-wrap gap-[12px] text-white">
				{#each LangArr as item}
					<button
						class="{`box-border flex min-w-[204px] items-center rounded border bg-[#171b26] p-2 text-sm ${
							item.lang === $selectedLang ? 'border-[#6660ff] bg-[#6660ff40]' : 'border-[#171b26]'
						}`}"
						on:click="{() => setLang(item.lang)}">
						<div class="mr-2.5">
							<img
								src="{item.image}"
								alt="" />
						</div>
						<span>{$t(item.name)}{item.flag}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
@keyframes slide-in-right {
	from {
		transform: translateX(100%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}

.slide-in {
	animation: slide-in-right 0.2s ease-out forwards;
}
</style>
