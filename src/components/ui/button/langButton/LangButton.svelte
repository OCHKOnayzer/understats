<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang } from '$src/stores/languageStore';

let { openCurrentModal } = $$props;
</script>

<div class="flex h-10 w-[120px] items-center justify-center rounded">
	<button
		class="flex h-full items-center justify-center border-none bg-transparent px-3 focus:outline-none"
		on:click="{() => openCurrentModal('LangModal')}">
		{$t(`lang.${$selectedLang}`)}
		<img
			class="ml-2 h-5 w-5"
			src="{`assets/langs/${$selectedLang}.svg`}"
			alt="{`${$selectedLang} flag`}" />
	</button>
</div>
