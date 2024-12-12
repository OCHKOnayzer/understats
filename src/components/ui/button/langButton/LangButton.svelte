<script>
import { t } from 'svelte-i18n';

import { modalComponent } from '$src/stores/modalStore';
import { langImage } from '$src/stores/HeaderStores';

let { openCurrentModal } = $$props;
</script>

<div class="flex h-10 items-center justify-center rounded">
	<button
		class="flex h-full w-full items-center justify-center border-none bg-transparent px-3 focus:outline-none"
		on:click="{() => openCurrentModal('LangModal')}">
		{$t(`lang.${$langImage}`)}
		<img
			class="ml-2 h-5 w-5"
			src="{`assets/langs/${$langImage}.svg`}"
			alt="" />
	</button>
</div>
