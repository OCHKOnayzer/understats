<script>
import { t } from 'svelte-i18n';
</script>

<div class="leave_title">
	<div class="title_image">
		<img
			src="/assets/extension/global.svg"
			alt="" />
	</div>
	<div class="title_name">
		<span>{$t('lang.title')}</span>
	</div>
</div>

<style>
.leave_title {
	display: flex;
	color: white;
	flex-direction: row;
	align-items: center;
	font-size: 25px;
}
.title_image {
	height: 40px;
	width: 40px;
	margin-right: 10px;
}
.title_image img {
	height: 100%;
	width: 100%;
	user-select: none;
	pointer-events: none;
}
.title_name {
	font-weight: 600;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
