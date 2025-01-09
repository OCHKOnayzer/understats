<!-- <script lang="ts">
import { fade } from 'svelte/transition';

import * as Dialog from '$components/ui/dialog';
import Default from '$src/components/ui/accountModal/Default.svelte';
import Success from '$src/components/ui/accountModal/Result.svelte';
import { accountModal } from '$src/utils/functions/accountModal';
import { accountIsSuccess } from '$stores/store';
import * as m from '$m';
</script>

<Dialog.Root>
	<Dialog.Trigger
		on:click="{accountModal}"
		class="inline-flex h-10 items-center justify-center rounded-md border border-green-500 bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-green-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
		{`+ ${m.addAccount()}`}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title class="flex items-center">
				<h2 class="mb-2 text-[28px] text-white">{m.addAccount()}</h2>
			</Dialog.Title>
			<Dialog.Description>Поля ввода не должны быть пусты.</Dialog.Description>
		</Dialog.Header>
		<div class="content-wrapper">
			{#if $accountIsSuccess === null}
				<div transition:fade="{{ duration: 200 }}">
					<Default />
				</div>
			{:else if $accountIsSuccess}
				<div transition:fade="{{ duration: 200 }}">
					<Success
						title="Аккаунт подключен!"
						description="Дополнительный текст"
						icon="icons/trophy.svg" />
				</div>
			{:else}
				<div transition:fade="{{ duration: 200 }}">
					<Success
						title="Аккаунт не подключен!"
						description="Проверьте введенные данные"
						icon="icons/unluck.svg" />
				</div>
			{/if}
		</div>
	</Dialog.Content>
</Dialog.Root>

<style>
.content-wrapper {
	position: relative;
	min-height: 330px;
}

.content-wrapper > div {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style> -->
