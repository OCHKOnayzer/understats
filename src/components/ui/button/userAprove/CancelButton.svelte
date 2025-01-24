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
	height: 40px;
	text-align: center;
	overflow: hidden;
	margin-right: 20px;
}
.button_wrapper button {
	height: 100%;
	width: 100%;
	background-color: #718096;
	transition: 400ms;
	border-radius: 100px;
}
.button_wrapper button:hover {
	background-color: #6b717a;
}
@media screen and (max-width: 800px) {
	.button_wrapper {
		width: 100%;
		height: 56px;
		margin-right: 0px;
	}
	.button_wrapper button {
		width: 100%;
		border-radius: 16px;
	}
}
</style>
