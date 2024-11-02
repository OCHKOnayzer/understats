<script lang="ts">
import { t } from 'svelte-i18n';

export let switch_modal: () => void;
export let switch_text: string;
</script>

<div class="switch_wrapper">
	<button on:click={switch_modal}>
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
}
</style>
