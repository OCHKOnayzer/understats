<script lang="ts">
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import ErrorMessage from '$src/components/ui/errorMessage/ErrorMessage.svelte';

import WrapperTitle from './WrapperTitle.svelte';
import Input from './Input.svelte';

let Open = false;
let showPassword = false;
export let title_wrapper = '';
export let show_clear = false;
export let input_type = 'password';

function togglePasswordVisibility() {
	showPassword = !showPassword;
	input_type = showPassword ? 'text' : 'password';
}
</script>

<div class="input_wrapper">
	<div class="title_info">
		<WrapperTitle {title_wrapper} />
		{#if show_clear}
			<button
				class="clear"
				on:click={togglePasswordVisibility}>
				{showPassword ? get(t)('social.hide_passw') : get(t)('social.show_pass')}
			</button>
		{/if}
	</div>
	<Input {input_type} />
	{#if Open}
		<ErrorMessage />
	{/if}
</div>

<style>
.input_wrapper {
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 20px;
}
.title_info {
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-bottom: 5px;
}
.clear {
	width: 50%;
	text-align: right;
	color: #6660ff;
	font-size: 14px;
	background: none;
	border: none;
	cursor: pointer;
}
</style>
