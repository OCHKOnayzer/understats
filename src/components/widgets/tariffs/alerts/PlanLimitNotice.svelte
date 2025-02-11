<script>
import { t } from 'svelte-i18n';

import AlertLayout from './AlertLayout.svelte';
</script>

<AlertLayout>
	<div class="alert_items">
		<div class="alert_name">
			{$t('alerts.tariffs_inactive')}
		</div>
		<div class="alert_content">
			{$t('alerts.choose_tariff')}
		</div>
	</div>
	<div class="to_tariffs">
		<a href="/">
			{$t('alerts.go_tariffs')}
		</a>
	</div>
</AlertLayout>

<style>
.alert_items {
	display: flex;
	flex-direction: column;
}
.alert_name {
	color: var(--alert-color);
}
.alert_content {
	color: white;
}
.to_tariffs {
	height: 40px;
	width: fit-content;
	border: 1px solid var(--accent-color);
	border-radius: 5px;
}
.to_tariffs a {
	padding-left: 10px;
	padding-right: 10px;
	display: flex;
	align-items: center;
	color: white;
	height: 100%;
	width: 100%;
}
/* .to_tariffs a:hover{

    } */
</style>
