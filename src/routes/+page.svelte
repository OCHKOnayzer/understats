<script lang="ts">
import { t } from 'svelte-i18n';

import Pagination from '$src/components/ui/pagination/Pagination.svelte';
import BetsTable from '$src/components/widgets/stats/BetsTable/BetsTable.svelte';
import StatsMenu from '$src/components/widgets/stats/StatsMenu/StatsMenu.svelte';
import { useUserProfile } from '$src/services/auth/useProfile';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
import { betsTableStore } from '$src/stores/betsTableStore';
import { currentUser } from '$src/stores/modalStore';

selectHeaderTitle('menu.Stats');
const { query } = useUserProfile();
let isAuthenticated = $derived(!!$currentUser);

let shouldShowPagination = $derived(isAuthenticated && !$betsTableStore.isLoading && $betsTableStore.data.length > 0);
let innerWidth = $state(0);
let isMobile = $derived(() => innerWidth < 740);
</script>

<svelte:head>
	<title>{$t('menu.Stats')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<svelte:window bind:innerWidth="{innerWidth}" />

<div class="flex h-full flex-col justify-between">
	<div>
		<StatsMenu />
		<BetsTable />
	</div>
	{#if shouldShowPagination || !isMobile}
		<Pagination />
	{/if}
</div>
