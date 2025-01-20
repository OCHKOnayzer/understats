<script lang="ts">
import { t } from 'svelte-i18n';

type ImageProps = {
	image: string;
	name: string;
	description: string;
};

let { image, name, description } = $$props as ImageProps;
</script>

<div class="image_article">
	{#if image}
		<div class="image-wrapper">
			<div
				class="blurred-background"
				style="background-image: url('{image}');"></div>

			<img
				src="{image}"
				alt="{$t(name)}" />
		</div>
	{/if}
	<div class="image-name">
		{$t(description)}
	</div>
</div>

<style>
.image_article {
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
	max-height: 550px;
	width: auto;
	max-width: 45%;
	position: relative;
	z-index: 1;
}
.image-name {
	display: flex;
	justify-content: center;
	font-size: 13px;
	padding: 5px;
	color: #a3a4ab;
}
</style>
