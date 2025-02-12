<script>
import AlertLayout from './AlertLayout.svelte';
import AlertTitle from './AlertTitle.svelte';
import AlertGoto from './AlertGoto.svelte';

import { page } from '$app/stores';

// import { currentUserActiveTariff } from '$src/stores/tariffsStore';

const isTariffsPage = ['/tariffs'];
</script>

<AlertLayout>
	<AlertTitle
		title="alerts.tariff_end_three_day"
		description="alerts.tariff_end_three_day_desc" />
	{#if !isTariffsPage.includes($page.url.pathname)}
		<AlertGoto
			href="tariffs"
			content="alerts.to_extend" />
	{/if}
</AlertLayout>

<style></style>
