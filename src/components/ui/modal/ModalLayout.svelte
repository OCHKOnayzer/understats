<script lang="ts">
import { onMount, onDestroy } from 'svelte';

import { isModalOpen, modalComponent } from '$src/stores/modalStore';

import authModal from './authModal/authModal.svelte';
import LeaveContainer from './leaveModal/LeaveContainer.svelte';

onDestroy(() => {
	document.body.style.overflow = '';
});
const components = {
	authModal,
	LeaveContainer
};
</script>

{#if $isModalOpen}
	<div class="modal_window">
		<svelte:component this={components[$modalComponent]} />
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
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
