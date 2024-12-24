<script lang="ts">
import { cn } from '$src/utils/utils';
import { Drawer as DrawerPrimitive } from 'vaul-svelte';

let { ref = $bindable(null), class: className, ...restProps }: DrawerPrimitive.TitleProps = $props();
</script>

<DrawerPrimitive.Title
	bind:ref="{ref}"
	class="{cn('text-lg font-semibold leading-none tracking-tight', className)}"
	{...restProps} />
