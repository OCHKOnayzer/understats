<script lang="ts" module>
import TileButton from '$components/shared/TileButton/TileButton.svelte'
import * as m from '$m'
import { TileChecked } from '$stores/store'
import toast, { Toaster } from 'svelte-french-toast'

const changeTile = (value: string) => {
  TileChecked.set(value)
  toast.success(m.showTypeAlert())
}
</script>

<div class="wrapper">
  <TileButton
    title={m.sortTable()}
    value="table"
    {changeTile}
    icon="iconamoon:menu-burger-horizontal"
  />
  <TileButton title={m.sortTile()} value="tile" {changeTile} icon="fe:tiled" />

  <Toaster />
</div>

<style>
.wrapper {
  @apply flex gap-5;
}
</style>
