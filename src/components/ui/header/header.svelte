<script lang="ts">
import { t } from 'svelte-i18n';

import { headerTitle, langImage } from '$src/stores/HeaderStores';
import { openModal, modalComponent, closeModal } from '$src/stores/modalStore';

type ModalType = 'authModal' | 'LeaveContainer' | 'FailedModal' | 'SuccessfulModal' | 'SorryModal' | 'LangModal' | 'SupportModal';

const openCurrentModal = (modal: ModalType) => {
	if ($modalComponent !== null && $modalComponent !== modal) {
		return;
	}
	if ($modalComponent === modal) {
		closeModal();
	} else {
		openModal(modal);
	}
};
</script>

<header class="relative z-[9998] box-border w-full pt-[10px]">
	<div class="flex h-[8vh] items-center justify-center rounded-lg bg-[#171b26] font-sans text-white">
		<div class="flex h-full w-full items-center justify-between px-[1%]">
			<div class="flex items-center pl-[10px]">
				<p class="text-[25px] md:text-[20px]">{$t($headerTitle)}</p>
			</div>

			<div class="mr-[1%] flex items-center justify-center space-x-[10px]">
				<div
					class="duration-400 flex h-[40px] w-fit items-center justify-center rounded border border-gray-400/50 transition
						{$modalComponent === 'LangModal' ? 'border-[#6660ff] bg-[#6660ff40]' : ''}
					">
					<button
						class="flex h-full w-full items-center justify-center bg-transparent p-[10px]"
						on:click="{() => openCurrentModal('LangModal')}">
						{$t(`lang.${$langImage}`)}
						<img
							class="ml-[10px] h-full w-full"
							src="{`assets/langs/${$langImage}.svg`}"
							alt="" />
					</button>
				</div>

				<div
					class="duration-400 flex h-[40px] w-[40px] items-center justify-center rounded border border-gray-400/50 transition
						{$modalComponent === 'SupportModal' ? 'border-[#6660ff] bg-[#6660ff40]' : ''}
					hover:bg-[#282d3b]">
					<button
						class="flex h-full w-full items-center justify-center bg-transparent p-[10px]"
						on:click="{() => openCurrentModal('SupportModal')}">
						<img
							src="assets/header/support.png"
							alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</header>
