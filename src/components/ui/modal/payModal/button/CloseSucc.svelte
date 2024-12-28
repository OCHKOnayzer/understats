<script lang="ts">
interface SwitchInterface {
	onUserText: string;
}
import { t } from 'svelte-i18n';

import { closeModal } from '$src/stores/modalStore';
let { onUserText } = $$props as SwitchInterface;
</script>

<div class="button_wrapper">
	<button on:click="{() => closeModal()}">{$t(onUserText)}</button>
</div>

<style>
.button_wrapper {
	width: 25%;
	margin-top: 20px;
	height: 4vh;
	text-align: center;
	border-radius: 100px;
	overflow: hidden;
	margin-right: 20px;
}
.button_wrapper button {
	height: 100%;
	width: 100%;
	background-color: var(--accent-color);
	transition: 400ms;
}
.button_wrapper button:hover {
	background-color: #3e38fa;
}
</style>
