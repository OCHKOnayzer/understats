<script lang="ts">
import { t } from 'svelte-i18n'
export let onUserText: string
export let onUserAction: () => void
export let active: boolean = false
</script>

<div class="button_wrapper">
  <button on:click={onUserAction}>{$t(onUserText)}</button>
</div>

<style>
.button_wrapper {
  min-width: 40%;
  margin-top: 20px;
  height: 4vh;
  margin-right: 20px;
}
.button_wrapper button {
  height: 100%;
  width: fit-content;
  background-color: #6660ff;
  transition: 400ms;
  border-radius: 100px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
.button_wrapper button:hover {
  background-color: #3e38fa;
}
.cActive {
  background-color: #6560ff7e;
}
</style>
