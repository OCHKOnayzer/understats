<script lang="ts">
interface UserAproveInterface {
	onUserText: string;
	onUserAction: () => void;
	active: boolean;
}
import { t } from 'svelte-i18n';
let { onUserText, onUserAction, active } = $$props as UserAproveInterface;
</script>

<div class="button_wrapper">
	<button
		type="submit"
		on:click="{onUserAction}">{$t(onUserText)}</button>
</div>

<style>
.button_wrapper {
	min-width: 40%;
	margin-top: 20px;
	height: 40px;
}
.button_wrapper button {
	height: 100%;
	width: fit-content;
	background-color: var(--accent-color);
	transition: 400ms;
	border-radius: 100px;
	padding-left: 10px;
	padding-right: 10px;
	text-align: center;
}
.button_wrapper button:hover {
	background-color: #3e38fa;
}
/* .cActive {
	background-color: #6560ff7e;
} */
@media screen and (max-width: 800px) {
	.button_wrapper {
		width: 100%;
		height: 56px;
	}
	.button_wrapper button {
		width: 100%;
		border-radius: 16px;
	}
}
</style>
