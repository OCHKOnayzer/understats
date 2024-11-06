<script lang="ts">
import { t } from 'svelte-i18n';

import ErrorMessage from '$src/components/ui/errorMessage/ErrorMessage.svelte';

import Input from './Input.svelte';
import WrapperTitle from './WrapperTitle.svelte';

interface InputProps {
	title_wrapper: string;
	show_clear: boolean;
	default_type: string;
}

let Open = false;
let showPassword = false;
let { title_wrapper = '', show_clear = false, default_type = 'password' } = $$props as InputProps;

let input_type = default_type;
let button_text = 'social.show_pass';

function togglePasswordVisibility() {
	showPassword = !showPassword;
	input_type = showPassword ? 'text' : 'password';
	button_text = showPassword ? 'social.hide_passw' : 'social.show_pass';
}
</script>

<div class="input_wrapper">
	<div class="title_info">
		<WrapperTitle {title_wrapper} />
		{#if show_clear}
			<button
				class="clear"
				on:click={togglePasswordVisibility}>
				{$t(button_text)}
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
