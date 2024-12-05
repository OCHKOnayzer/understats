<script lang="ts">
import { t } from 'svelte-i18n';

import { closeModal } from '$src/stores/modalStore';

import ModalTitle from '../ModalTitle.svelte';
</script>

<div
	class="chat-container"
	role="button"
	tabindex="0"
	on:click="{() => closeModal()}"
	on:keydown="{(e) => e.key === 'Enter'}">
	<div
		class="chat-modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Enter'}">
		<div class="chat-wrapper">
			<ModalTitle />
			<div class="chat-conetnt"> </div>
			<input
				type="text"
				name="message" />
		</div>
	</div>
</div>

<style>
.chat-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	z-index: 9998;
	cursor: default;
}
.chat-modal {
	width: 26vw;
	height: fit-content;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	position: relative;
	border: 1px solid #363a45;
	cursor: default;
}
.chat-wrapper {
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
}
.chat-conetnt {
	height: 60vh;
}
</style>
