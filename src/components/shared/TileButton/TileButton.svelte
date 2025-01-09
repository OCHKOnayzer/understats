<script lang="ts">
import Icon from '@iconify/svelte';

import Button from '$components/ui/button/button.svelte';
import { TileChecked } from '$stores/store';

export let title: string;
export let value: string;
export let icon: string;
export let changeTile: (value: string) => void;
</script>

<Button
	variant="{$TileChecked === value ? 'tileChecked' : 'tile'}"
	on:click="{() => changeTile(value)}"
	disabled="{$TileChecked === value}">
	<Icon
		icon="{icon}"
		font-size="30px" />
	<h2 class="title">{title}</h2>
</Button>

<style>
.title {
	@apply ml-2 text-[17px];
}
</style>
