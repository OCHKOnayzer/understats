<!-- <script lang="ts">
import { Dialog } from 'bits-ui';

import { accountIsSuccess } from '$src/stores/store';

import Button from '../button/button.svelte';

import * as m from '$m';
export let title: string;
export let description: string;
export let icon: string;
</script>

<div class="wrapper">
	<div class="mt-3 flex h-[290px] justify-center gap-3">
		<div class="flex flex-col items-center justify-center">
			<img
				class=""
				src="{icon}"
				alt="trophy" />
			<h2 class="mb-1 text-2xl text-white">{title}</h2>
			<p class="text-sm text-[#718096]">{description}</p>
		</div>
	</div>
	<Dialog.Close>
		<Button variant="outlineRoundedWhite">{$accountIsSuccess === null ? m.cancel() : m.accountsBack()}</Button>
	</Dialog.Close>
</div> -->
