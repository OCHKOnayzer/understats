<script lang="ts">
interface SwitchInterface {
	switch_modal: () => void;
	switch_text: string;
}
import { t } from 'svelte-i18n';

export let switch_modal: () => void;
export let switch_text: string;
</script>

<div class="switch_wrapper">
	<button
		on:click={() => {
			if (typeof switch_modal === 'function') {
				switch_modal();
			} else {
				console.error('switch_modal is not a function', switch_modal);
			}
		}}>
		{$t(switch_text)}
	</button>
</div>

<style>
.switch_wrapper button {
	color: #01d2f9;
	text-decoration: underline;
	background: none;
	border: none;
	cursor: pointer;
	transition: 400ms;
	padding-right: 5px;
	font-size: 14px;
}
</style>
