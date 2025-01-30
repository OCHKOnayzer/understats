<script lang="ts">
import { Drawer as DrawerPrimitive } from 'vaul-svelte';

let { shouldScaleBackground = false, open = $bindable(false), activeSnapPoint = $bindable(null), ...restProps } = $props();
</script>

<DrawerPrimitive.Root
  shouldScaleBackground="{shouldScaleBackground}"
  bind:open="{open}"
  bind:activeSnapPoint="{activeSnapPoint}"
  style="--snap-point-height: unset; --snap-point: 95vh;"
  {...restProps}>
  <slot />
</DrawerPrimitive.Root>

<style>
:global(.vaul-drawer-content) {
  --snap-point-height: unset !important;
  height: var(--snap-point) !important;
}
</style>