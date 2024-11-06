<script lang="ts">
import { onMount, onDestroy } from 'svelte';

import { isAuthModalOpen } from '$src/stores/modalStore';

import Modal from './Modal/Modal.svelte';

onMount(() => {
	if (isAuthModalOpen) document.body.style.overflow = 'hidden';
});

onDestroy(() => {
	document.body.style.overflow = '';
});
</script>

<!-- on:click={closeModal} -->
{#if $isAuthModalOpen}
	<div class="modal_window">
		<Modal />
	</div>
{/if}

<style>
.modal_window {
	position: absolute;
	z-index: 9999;
	width: 100%;
	height: 100vh;
	background-color: #171b26b2;
	overflow-y: unset;
	overflow-x: hidden;
	backdrop-filter: blur(3px);
}
</style>
