<script lang="ts">
import { t } from 'svelte-i18n';

import { isDemoEnabled } from '$src/stores/demo';
import { handleDemoToggle } from '$src/utils/functions/handleDemoToggle';
</script>

<button
	class="demo-switch"
	class:active="{$isDemoEnabled}"
	on:click="{handleDemoToggle}"
	type="button"
	aria-pressed="{$isDemoEnabled}">
	<div class="switch">
		<div class="thumb"></div>
	</div>
	<span class="label">{$t('other.demo')}</span>
</button>

<style>
.demo-switch {
	all: unset;
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 14px 16px;
	border-radius: 12px;
	background-color: #363a45;
	cursor: pointer;

	transition: background-color 0.3s ease;
	min-width: 170px;
}

.demo-switch.active {
	background-color: #100e47;
}

.switch {
	position: relative;
	width: 32px;
	height: 20px;
	background-color: #ccc;
	border-radius: 34px;
	transition: background-color 0.3s ease;
}

.active .switch {
	background-color: var(--accent-color);
}

.thumb {
	position: absolute;
	left: 2px;
	top: 4px;
	width: 12px;
	height: 12px;
	background-color: white;
	border-radius: 50%;
	transition: transform 0.3s ease;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.active .thumb {
	transform: translateX(16px);
}

.label {
	color: white;
	font-size: 14px;
}

@media screen and (max-width: 800px) {
	.demo-switch {
		width: 100%;
		padding: 0;
		height: 48px;
		justify-content: center;
	}
}
</style>
