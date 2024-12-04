<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang, langSel } from '$src/stores/HeaderStores';
import { setLanguage } from '$src/lib/i18n';
import { closeModal } from '$src/stores/modalStore';

import LangTitle from './title/langTitle.svelte';
import { LangArr } from './lang';

const setLang = (lang: string) => {
	setLanguage(lang);
	selectedLang(lang);
};
</script>

<div
	class="inset-0 z-[9998] flex h-screen cursor-default justify-end"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Enter' && closeModal()}">
	<div
		class="relative right-4 top-[10vh] flex h-fit max-w-[26vw] cursor-default items-center justify-center rounded-md border border-[#363a45] bg-[#0d111d] p-4"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Enter'}">
		<div class="my-2.5 h-auto w-[90%]">
			<LangTitle />
			<div class="mt-5 flex flex-wrap justify-between gap-2.5 text-white">
				{#each LangArr as item}
					<button
						class="{`box-border flex min-w-[150px] flex-[1_1_calc(33.33%-10px)] items-center rounded border bg-[#171b26] p-2 text-sm ${
							item.lang === $langSel ? 'border-[#6660ff] bg-[#6660ff40]' : 'border-[#171b26]'
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
