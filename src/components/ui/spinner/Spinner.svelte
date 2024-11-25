<script lang="ts">
import { Loader } from 'lucide-svelte';
import { writable } from 'svelte/store';

export let color = '#718096';
export let size = 24;

const spinning = writable(true);

setInterval(() => {
	spinning.update((n) => !n);
}, 3000);
</script>

<div
	class="spinner-wrapper"
	class:spin="{$spinning}">
	<Loader
		size="{size}"
		color="{color}"
		strokeWidth="{2}"
		class="animate-spin" />
</div>

<style>
.spinner-wrapper {
	display: inline-block;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}

.spinner-wrapper.spin {
	opacity: 1;
}

:global(.animate-spin) {
	animation: spin 1s linear infinite;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
