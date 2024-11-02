<script lang="ts">
export let current_modal: string
</script>

<div class="image_current_wrapper">
  {#key current_modal}
    {#if current_modal === 'reg'}
      <img src="assets/modal/Registartion.png" alt="" />
    {:else if current_modal === 'login'}
      <img src="assets/modal/Auth.png" alt="" />
    {:else if current_modal === 'recover'}
      <img src="assets/modal/Recover.png" alt="" />
    {/if}
  {/key}
</div>

<style>
.image_current_wrapper {
  height: 92%;
  width: 92%;
  border-radius: 5px;
  overflow: hidden;
}
.image_current_wrapper img {
  height: 100%;
  width: 100%;
  user-select: unset;
  pointer-events: none;
}
</style>
