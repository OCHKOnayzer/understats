<!-- <script
	lang="ts"
	module>
import toast, { Toaster } from 'svelte-french-toast';

import TileButton from '$components/shared/TileButton/TileButton.svelte';
import * as m from '$m';
import { TileChecked } from '$stores/store';

const changeTile = (value: string) => {
	TileChecked.set(value);
	toast.success(m.showTypeAlert());
};
</script>

<div class="wrapper">
	<TileButton
		title="{m.sortTable()}"
		value="table"
		changeTile="{changeTile}"
		icon="iconamoon:menu-burger-horizontal" />
	<TileButton
		title="{m.sortTile()}"
		value="tile"
		changeTile="{changeTile}"
		icon="fe:tiled" />

	<Toaster />
</div>

<style>
.wrapper {
	@apply flex gap-5;
}
</style> -->
