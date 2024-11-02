<script lang="ts">
import Sort from '$components/features/sort/Sort.svelte';
import Tile from '$components/features/tile/Tile.svelte';
import BackgroundContainer from '$components/providers/backgroundContainer/BackgroundContainer.svelte';
</script>

<section>
	<BackgroundContainer>
		<Tile />
		<Sort />
	</BackgroundContainer>
</section>
