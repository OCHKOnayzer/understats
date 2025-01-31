<script>
import { onMount } from 'svelte';

let isMobile = false;

function checkScreenWidth() {
	isMobile = window.innerWidth <= 768;
}

onMount(() => {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => window.removeEventListener('resize', checkScreenWidth);
});
</script>

<div class="section_title">
	<div class="section_item_container">
		<!-- {$t('extensions.ext')} -->
		<!-- {#if !isMobile}
			<Stats />
		{/if} -->
	</div>
</div>

<style>
.section_title {
	margin-top: 2vh;
	display: flex;
	align-items: center;
	width: 100%;
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 2vh;
}
.section_item_container {
	display: flex;
	flex-direction: column;
}
@media (max-width: 800px) {
	.section_title {
		font-size: 20px;
		font-weight: 500;
		margin: 0;
	}
}
</style>
