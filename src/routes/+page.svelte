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

let shouldShowPagination = $derived($query.data && isAuthenticated && !$betsTableStore.isLoading && $betsTableStore.data.length > 0);
</script>

<svelte:head>
	<title>{$t('menu.Stats')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="flex h-full flex-col justify-between">
	<div>
		<StatsMenu />
		<BetsTable />
	</div>
	{#if shouldShowPagination}
		<Pagination />
	{/if}
</div>
