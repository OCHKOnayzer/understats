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
</style>
