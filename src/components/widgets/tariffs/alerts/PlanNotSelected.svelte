<script>
import AlertLayout from './AlertLayout.svelte';
import AlertTitle from './AlertTitle.svelte';
import AlertGoto from './AlertGoto.svelte';
</script>

<AlertLayout>
	<AlertTitle
		title="alerts.tariffs_inactive"
		description="alerts.choose_tariff" />
	<AlertGoto
		href="tariffs"
		content="alerts.go_tariffs" />
</AlertLayout>

<style></style>
