<script lang="ts">
import { t } from 'svelte-i18n';

interface ImageProps {
	image: string;
	name: string;
}

let image = 'assets/faq/google.jpg';
let name = 'Sample Image';
</script>

<div class="image_article">
	{#if image}
		<div class="image-wrapper">
			<div
				class="blurred-background"
				style="background-image: url('{image}');"></div>

			<img
				src="{image}"
				alt="{name}" />
		</div>
	{/if}
</div>

<style>
.image_article {
	margin-bottom: 3%;
	position: relative;
}

.image-wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	overflow: hidden;
	border-radius: 5px;
}

.blurred-background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-size: cover;
	background-position: center;
	filter: blur(20px);
	z-index: 0;
}

.image-wrapper img {
	height: auto;
	width: 50%;
	position: relative;
	z-index: 1;
}
</style>
