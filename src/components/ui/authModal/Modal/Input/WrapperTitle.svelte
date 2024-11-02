<script lang="ts">
export let title_wrapper = '';
import { t } from 'svelte-i18n';
</script>

<div class="wrapper_title">
	<span>{$t(title_wrapper)}</span>
</div>

<style>
.wrapper_title {
	color: #fefefc;
	font-size: 14px;
	width: 100%;
}
</style>
