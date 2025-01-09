<script lang="ts">
interface ProgressCircle {
	proccent: number;
	count: number;
}
import { onMount } from 'svelte';

let { proccent = 0, count = 1 } = $$props as ProgressCircle;

let progressElement: SVGCircleElement;

let svgSize = 50;
let radius = 20;
let circumference = 2 * Math.PI * radius;

$: progressColor = computedProgress < 50 ? '#6660FF' : computedProgress < 80 ? '#F3BF55' : '#5EC654';

$: computedProgress = count === 0 ? 0 : Math.min((proccent / count) * 100, 100);

$: strokeDashoffset = circumference - (computedProgress / 100) * circumference;

const progressMath = () => {
	if (progressElement) {
		circumference = 2 * Math.PI * radius;
		strokeDashoffset = circumference - (computedProgress / 100) * circumference;
	}
};

onMount(() => {
	progressMath();
});
</script>

<div class="cicle__conteiner">
	<div class="progress_count">
		<span>{proccent}</span>/<span>{count}</span>
	</div>
	<svg
		width="{svgSize}"
		height="{svgSize}">
		<circle
			class="Progress_bar"
			fill="transparent"
			stroke="#b6b6b64a"
			stroke-width="{4}"
			cx="{svgSize / 2}"
			cy="{svgSize / 2}"
			r="{radius}"></circle>

		<circle
			class="Progress_bar user_progress"
			bind:this="{progressElement}"
			fill="transparent"
			stroke="{progressColor}"
			stroke-width="{4}"
			cx="{svgSize / 2}"
			cy="{svgSize / 2}"
			r="{radius}"
			stroke-dasharray="{circumference}"
			stroke-dashoffset="{strokeDashoffset}"></circle>
	</svg>
</div>

<style>
.cicle__conteiner {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
	width: 50px;
	height: 50px;
}

.progress_count {
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	top: 17px;
	text-align: center;
	font-size: 12px;
	color: white;
	padding: 0;
}

.Progress_bar {
	transform-origin: center;
	transform: rotate(90deg);
	transition: stroke-dashoffset 600ms, stroke 300ms;
}
</style>
