<!-- <script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

interface SlideItnerface {
	src: string;
	alt: string;
	title: string;
	description: string;
}

let slides: SlideItnerface[] = [
	{ src: 'assets/landing/slide.png', alt: 'Slide 1', title: 'landing.slide_1_title', description: 'landing.slide_1_description' },
	{ src: 'assets/landing/slide.png', alt: 'Slide 2', title: 'landing.slide_1_title', description: 'landing.slide_1_description' },
	{ src: 'assets/landing/slide.png', alt: 'Slide 3', title: 'landing.slide_1_title', description: 'landing.slide_1_description' }
];

let currentIndex = 0;
let interval;
const slideDuration = 5000;

const goToSlide = (index: number) => {
	currentIndex = index;
	resetInterval();
};

const nextSlide = () => {
	currentIndex = (currentIndex + 1) % slides.length;
};

const resetInterval = () => {
	clearInterval(interval);
	interval = setInterval(nextSlide, slideDuration);
};

onMount(() => {
	resetInterval();
	return () => clearInterval(interval);
});
</script>

<div class="slider-container">
	<div
		class="slider-wrapper"
		style="transform: translateX(-{currentIndex * 100}%);">
		{#each slides as slide}
			<div class="slider-item">
				<img
					src="{slide.src}"
					alt="{slide.alt}" />
			</div>
		{/each}
	</div>
	<div class="slider-description">
		<span class="slide-title">{$t(slides[currentIndex]?.title)}</span>
		<span class="slide-desc">{$t(slides[currentIndex]?.description)}</span>
	</div>
	<div class="slider-dots">
		{#each slides as _, index}
			<button
				type="button"
				class="slider-dot {index === currentIndex ? 'active' : ''}"
				on:click="{() => goToSlide(index)}"
				aria-label="{`Go to slide ${index + 1}`}"
				aria-current="{index === currentIndex ? 'true' : 'false'}">
			</button>
		{/each}
	</div>
</div>

<style>
.slider-container {
	width: 50%;
	margin: auto;
	margin-bottom: 1vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	position: relative;
}

.slider-wrapper {
	display: flex;
	transition: transform 1s ease-in-out;
	width: 100%;
	z-index: 3;
}

.slider-item {
	flex: 0 0 100%;
	width: 100%;
}

.slider-item img {
	width: 100%;
	height: auto;
	max-height: 550px;
}

.slider-description {
	margin-top: 10px;
	text-align: center;
	font-size: 16px;
	color: #4a5568;
	display: flex;
	flex-direction: column;
}

.slide-title {
	color: white;
}

.slider-dots {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 10px;
	z-index: 4;
}

.slider-dot {
	width: 10px;
	height: 10px;
	background-color: #718096;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
	padding: 0;
}

.slider-dot.active {
	background-color: #6660ff;
}

@media (max-height: 900px) {
	.slider-container {
		width: 50%;
	}

	.slider-item img {
		max-height: 450px;
	}

	.slider-description {
		font-size: 14px;
	}
}

@media (max-height: 600px) {
	.slider-container {
		width: 90%;
	}

	.slider-item img {
		max-height: 300px;
	}

	.slider-description {
		font-size: 12px;
	}
}

@media (max-width: 768px) {
	.slider-container {
		width: 90%;
	}

	.slider-item img {
		max-height: 400px;
	}

	.slider-description {
		font-size: 14px;
	}
}

@media (max-width: 480px) {
	.slider-container {
		width: 95%;
	}

	.slider-item img {
		max-height: 350px;
	}

	.slider-description {
		font-size: 12px;
	}
}
</style> -->
