<script>
import { t } from 'svelte-i18n';

import { selectHeaderTitle } from '$src/stores/HeaderStores';
import TariffsSection from '$src/components/ui/tariffsSection/tariffsSection.svelte';
import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import { useUserProfile } from '$src/services/auth/useProfile';
let isAuthenticated = useUserProfile();

selectHeaderTitle('tariffs.tariffs');
</script>

<svelte:head>
	<title>{$t('tariffs.tariffs')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="pageContent">
	{#if !isAuthenticated}
		<DemoButtons />
	{/if}
	<!-- <div class="tariff-title">
		<div>{$t('tariffs.choose')}</div>
		<div>{$t('tariffs.accountLimits')}</div>
	</div> -->
	<TariffsSection />
</div>

<style>
.pageContent {
	width: 100%;
}
/* .tariff-title {
	margin-top: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	color: white;
}
.tariff-title div:nth-child(1) {
	color: white;
	font-size: 24px;
}
.tariff-title div:nth-child(2) {
	color: #718096;
}
@media screen and (max-width: 768px) {
	.tariff-title {
		display: none;
	}
} */
</style>
