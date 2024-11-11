<script lang="ts">
import { currentModal } from '$src/stores/modalStore';
</script>

<div class="image_current_wrapper">
	{#key currentModal}
		{#if $currentModal === 'reg'}
			<img
				src="assets/modal/Registartion.png"
				alt="" />
		{:else if $currentModal === 'login'}
			<img
				src="assets/modal/Auth.png"
				alt="" />
		{:else if $currentModal === 'recover'}
			<img
				src="assets/modal/Recover.png"
				alt="" />
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
