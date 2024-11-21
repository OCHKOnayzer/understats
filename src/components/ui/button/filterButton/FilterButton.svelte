<script>
import Button from '../button.svelte';

let { text = '', className = '', func, active: active = () => {}, children } = $$props;
</script>

<button on:click="{func}">
	<Button
		variant="{active ? 'filterButtonActive' : 'filterButton'}"
		class="mb-2 mr-2">
		{children ? children : text}
	</Button>
</button>

<!-- Временно не используется -->
