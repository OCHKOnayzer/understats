<script lang="ts">
import Button from '$src/components/ui/button/button.svelte';

import type { ComponentProps } from 'svelte';

let { variant = 'ghost', ...restProps }: ComponentProps<typeof Button> = $props();
</script>

<button
	class="flex items-center gap-1 text-[14px]"
	{...restProps}>
	<img
		src="/icons/table-icon.svg"
		alt=""
		class="items-center" />
	ID
</button>
