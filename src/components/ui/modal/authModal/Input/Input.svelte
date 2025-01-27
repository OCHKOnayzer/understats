<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { useBreakpoint } from '$src/hooks/useBreakpoint';
export let input_type: string;
export let value = '';
export let input_name: string;
export let show_clear: boolean;
export let show_function: () => void;

const { isMobile } = useBreakpoint(768);
</script>

{#if $isMobile}
	<div class="placeholderContainer">
		<input
			class="int"
			type="{input_type}"
			bind:value="{value}"
			placeholder=" " />
		<label>{input_name}</label>
		{#if show_clear}
			<button
				class="showEye"
				on:click="{show_function}"
				tabindex="-1">
				<img
					src="assets/modal/glaz.png"
					alt="{$t('other.show')}" />
			</button>
		{/if}
	</div>
{:else}
	<div class="input_conteiner">
		<input
			type="{input_type}"
			bind:value="{value}" />
		{#if show_clear}
			<button
				class="showEye"
				on:click="{show_function}"
				tabindex="-1">
				<img
					src="assets/modal/glaz.png"
					alt="{$t('other.show')}" />
			</button>
		{/if}
	</div>
{/if}

<style>
.input_conteiner {
	width: 100%;
	height: 60px;
	position: relative;
}
input {
	background-color: #20242f;
	border-radius: 5px;
	color: white;
	border: unset;
	transition: border-color 0.3s ease;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	font-size: 16px;
	border: 2px solid transparent;
	outline: none;
	padding-left: 10px;
}

.placeholderContainer {
	position: relative;
	width: 100%;
	margin-bottom: 10px;
}

.placeholderContainer .int {
	padding: 20px 10px 5px;
	border-radius: 12px;
	color: white;
	height: 56px;
}
.placeholderContainer .int:focus {
	outline: none;
	border: 2px solid #6660ff;
}

.placeholderContainer label {
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	color: #718096;
	font-size: 16px;
	line-height: 1;
	pointer-events: none;
	transition: all 0.2s ease-in-out;
}

.placeholderContainer input:focus + label,
.placeholderContainer input:not(:placeholder-shown) + label {
	top: 18px;
	left: 10px;
	font-size: 12px;
}
.showEye {
	height: 20px;
	width: 20px;
	position: absolute;
	top: 20px;
	right: 10px;
}
.showEye img {
	height: 100%;
	width: 100%;
}
</style>
