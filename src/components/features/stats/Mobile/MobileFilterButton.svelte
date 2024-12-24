<script>
import Button from '$src/components/ui/button/button.svelte';
import { toggleSidebar } from '$src/utils/functions/toggleSidebar';
</script>

<div class="button">

	<Button variant='card' on:click={toggleSidebar}>
		<img src="/icons/filter.svg" alt="">
	</Button>
</div>


<style lang="scss">
	@media (min-width: 650px) {
		.button {
			display: none;
		}
	}
</style>