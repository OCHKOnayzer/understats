<script lang="ts">
import { cn } from '$src/utils/utils';
import { Drawer as DrawerPrimitive } from 'vaul-svelte';

let { ref = $bindable(null), class: className, ...restProps }: DrawerPrimitive.DescriptionProps = $props();
</script>

<DrawerPrimitive.Description
	bind:ref="{ref}"
	class="{cn('text-sm text-muted-foreground', className)}"
	{...restProps} />
