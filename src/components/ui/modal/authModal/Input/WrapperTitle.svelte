<script lang="ts">
interface TitleProps {
	title_wrapper: string;
}
import { t } from 'svelte-i18n';
let { title_wrapper = '' } = $$props as TitleProps;
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
@media screen and (max-width: 768px) {
	.wrapper_title {
		display: none;
	}
}
</style>
