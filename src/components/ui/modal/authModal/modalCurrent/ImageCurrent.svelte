<script lang="ts">
import { currentModal } from '$src/stores/modalStore';
let imageSrc = '';

$: {
	if ($currentModal === 'reg') {
		imageSrc = 'assets/modal/Registartion.webp';
	} else if ($currentModal === 'login') {
		imageSrc = 'assets/modal/Auth.webp';
	} else if ($currentModal === 'recover') {
		imageSrc = 'assets/modal/Recover.png';
	}
}
const preloadImage = (src: string) => {
	const img = new Image();
	img.src = src;
};

preloadImage(imageSrc);
</script>

<div class="image_current_wrapper">
	<img
		src="{imageSrc}"
		alt="" />
</div>

<style>
.image_current_wrapper {
	height: 92%;
	width: 92%;
	border-radius: 5px;
	overflow: hidden;
}
.image_current_wrapper img {
	height: 100%;
	width: 100%;
	user-select: unset;
	pointer-events: none;
}
</style>
