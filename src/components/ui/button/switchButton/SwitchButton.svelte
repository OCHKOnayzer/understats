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
		on:click="{() => {
			if (typeof switch_modal === 'function') {
				switch_modal();
			} else {
				console.error('switch_modal is not a function', switch_modal);
			}
		}}">
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
@media screen and (max-width: 768px) {
	.switch_wrapper {
		width: 100%;
		height: 8vh;
		margin-right: 0px;
	}
	.switch_wrapper button {
		height: 100%;
		width: 100%;
		border-radius: 16px;
		color: white;
		text-decoration: unset;
		background-color: #31384a;
		transition: 400ms;
		font-size: 15px;
	}
}
</style>
