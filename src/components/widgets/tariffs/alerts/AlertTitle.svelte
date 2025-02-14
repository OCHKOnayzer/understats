<script>
import { t } from 'svelte-i18n';

let { title, description } = $$props;
</script>

<div class="alert_items">
	<img
		class="alert_lamp"
		src="icons/lamp.svg"
		alt="" />
	<div class="wrapper">
		<div class="alert_name">
			{$t(title)}
		</div>
		<div class="alert_content">
			{$t(description)}
		</div>
	</div>
</div>

<style>
.alert_items {
	display: flex;
	gap: 10px;
	align-items: center;
}
.wrapper {
	display: flex;
	flex-direction: column;
}
.alert_lamp {
	height: 24px;
	width: 24px;
}
.alert_name {
	color: var(--alert-color);
}
.alert_content {
	color: white;
}
@media screen and (max-width: 800px) {
	.alert_items {
		align-items: unset;
	}
}
</style>
