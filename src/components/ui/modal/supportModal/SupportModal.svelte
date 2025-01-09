<script lang="ts">
import { t } from 'svelte-i18n';

import { closeModal } from '$src/stores/modalStore';

import { SupportItem } from './support';
import SupportTitle from './title/supportTitle.svelte';
</script>

<div
	class="inset-0 z-[9998] flex h-screen cursor-default justify-end"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Enter'}">
	<div
		class="relative right-4 top-[10vh] flex h-fit min-w-[450px] cursor-default items-center justify-center rounded-md border border-[#363a45] bg-[#0d111d] p-4"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Enter'}">
		<div class="w-[90%]">
			<SupportTitle />
			<div class="mt-4">
				<span class="text-[#718096]">
					{$t('support_modal.description')}
				</span>
				<!-- <div class="mt-5 flex w-full">
					{#each SupportItem as item}
						<a
							class="mr-2.5 flex h-[50px] w-[50px] items-center justify-center rounded-md border border-[#363a45] bg-[#171b26]"
							href="{item.href}">
							<img
								src="{item.image}"
								alt="{item.alt}"
								class="h-1/2 w-1/2" />
						</a>
					{/each}
				</div> -->
			</div>
		</div>
	</div>
</div>
