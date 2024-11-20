<script lang="ts">
import { onMount, onDestroy } from 'svelte';

import { isModalOpen, modalComponent } from '$src/stores/modalStore';

import authModal from './authModal/authModal.svelte';
import LeaveContainer from './leaveModal/LeaveContainer.svelte';
import FailedModal from './payModal/FailedModal.svelte';
import SuccessfulModal from './payModal/SuccessfulModal.svelte';
import SorryModal from './sorryModal/SorryModal.svelte';

onDestroy(() => {
	document.body.style.overflow = '';
});
const components = {
	authModal,
	LeaveContainer,
	FailedModal,
	SuccessfulModal,
	SorryModal
};
</script>

{#if $isModalOpen}
	<div class="modal_window">
		<svelte:component this="{components[$modalComponent]}" />
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
