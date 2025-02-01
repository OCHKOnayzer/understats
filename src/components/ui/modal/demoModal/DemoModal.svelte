<script lang="ts">
import { closeModal, openModal } from '$src/stores/modalStore';
import { t } from 'svelte-i18n';
import Button from '../../button/button.svelte';

const handleAuth = () => {
	closeModal();
	openModal('authModal');
};
</script>

<div class="flex h-screen items-center justify-center text-white">
	<div class="w-[100vw] sm:w-[75vw] lg:w-[45vw] rounded-[36px] bg-input p-[32px]">
		<div class="text-center">
			<div class="mb-[24px]">
				<h2 class="mb-[4px] text-2xl font-bold">{$t('demo_modal.title')}</h2>
				<h3 class="text-base font-normal">{$t('demo_modal.description')}</h3>
			</div>
			<div class="flex flex-col gap-[12px]">
				<Button
					variant="demoButton"
					onclick="{() => handleAuth()}"
					size="medium">{$t('faq.registr')}</Button>
				<Button
					onclick="{() => closeModal()}"
					variant="blackButton"
					size="medium">{$t('demo_modal.button')}</Button>
			</div>
		</div>
	</div>
</div>
