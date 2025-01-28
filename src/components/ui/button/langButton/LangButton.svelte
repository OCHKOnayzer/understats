<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang } from '$src/stores/languageStore';

let { openCurrentModal } = $$props;
</script>

<button
	class="flex w-[120px] h-full items-center justify-center rounded"
	on:click="{() => openCurrentModal('LangModal')}">
	<img
		class="h-5 w-5"
		src="{`assets/langs/${$selectedLang}.svg`}"
		alt="{`${$selectedLang} flag`}" />
	<span class="flex h-full items-center justify-center border-none bg-transparent pl-2 focus:outline-none">
		{$t(`lang.${$selectedLang}`)}
	</span>
</button>
