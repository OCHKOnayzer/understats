<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { isDemoEnabled } from '$src/stores/demo';

let isMobile = false;

function checkScreenWidth() {
	isMobile = window.innerWidth <= 768;
}

onMount(() => {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => window.removeEventListener('resize', checkScreenWidth);
});

const toggleDemo = () => {
	$isDemoEnabled = !$isDemoEnabled;
};
</script>

<div
	class="switch-wrapper"
	style="background-color: {$isDemoEnabled ? '#100e47' : '#363A45'}"
	on:click="{() => toggleDemo()}">
	<label class="switch">
		<input
			type="checkbox"
			bind:checked="{$isDemoEnabled}"
			on:click="{() => toggleDemo()}" />
		<span class="slider"></span>
	</label>
	<div class="demo-title">
		{$t('other.demo')}
	</div>
</div>

<style>
.switch-wrapper {
	min-width: 200px;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.4s ease;
	height: 100%;
	border-radius: inherit;
	cursor: pointer;
}

.switch {
	position: relative;
	display: inline-block;
	width: 32px;
	height: 20px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: all 0.4s ease;
	border-radius: 34px;
	z-index: 3;
}

.slider:before {
	position: absolute;
	content: '';
	height: 12px;
	width: 12px;
	left: 2px;
	bottom: 4px;
	background-color: white;
	transition: all 0.4s ease;
	border-radius: 50%;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

input:checked + .slider {
	background-color: #6660ff;
}

input:checked + .slider:before {
	transform: translateX(16px);
}

.demo-title {
	color: white;
	margin-left: 10px;
}

@media screen and (max-width: 800px) {
	.switch-wrapper {
		width: 100%;
		height: 48px;
		border-radius: 12px;
	}
}
</style>
