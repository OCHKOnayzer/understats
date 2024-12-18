<script>
import { t } from 'svelte-i18n';

import { isDemoEnabled } from '$src/stores/demo';
</script>

<div class="switch-wrapper {$isDemoEnabled ? 'demo-active' : ''}">
	<label class="switch">
		<input
			type="checkbox"
			bind:checked="{$isDemoEnabled}" />
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
}
.demo-active {
	background-color: #100e47;
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
</style>
