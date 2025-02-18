<script>
import AlertLayout from './AlertLayout.svelte';
import AlertTitle from './AlertTitle.svelte';
import AlertGoto from './AlertGoto.svelte';
</script>

<AlertLayout>
	<AlertTitle
		title="alerts.tariff_end_three_day"
		description="alerts.tariff_end_three_day_desc" />
	<AlertGoto
		href="tariffs"
		content="alerts.to_extend" />
</AlertLayout>

<style></style>
