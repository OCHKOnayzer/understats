<script lang="ts">
import { t } from 'svelte-i18n';
const download = () => {
	console.log('hello world');
};
</script>

<div class="button_wrapper">
	<button on:click="{download}">{$t('other.download_app')}</button>
</div>

<style>
.button_wrapper {
	min-width: 40%;
	height: 4vh;
	margin-right: 20px;
}
.button_wrapper button {
	height: 100%;
	min-width: 10vw;
	width: fit-content;
	background-color: transparent;
	border: 1px solid #5ec654;
	box-sizing: border-box;
	transition: 400ms;
	border-radius: 100px;
	padding-left: 10px;
	padding-right: 10px;
	text-align: center;
}
.button_wrapper button:hover {
	border: 1px solid #36be2a;
}
</style>
