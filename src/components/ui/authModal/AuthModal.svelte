<script lang="{ts}">
import Modal from './Modal/Modal.svelte'
import { onMount, onDestroy } from 'svelte'

export let isOpen = false

onMount(() => {
  if (isOpen) document.body.style.overflow = 'hidden'
})

onDestroy(() => {
  document.body.style.overflow = ''
})

const closeModal = () => {
  document.body.style.overflow = ''
  isOpen = false
}
</script>

<!-- on:click={closeModal} -->
{#if isOpen}
  <div class="modal_window">
    <Modal {closeModal} />
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
