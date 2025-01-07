<script lang="ts">
import Pagination from '$src/components/ui/pagination/Pagination.svelte';
import BetsTable from '$src/components/widgets/stats/BetsTable/BetsTable.svelte';
import StatsMenu from '$src/components/widgets/stats/StatsMenu/StatsMenu.svelte';
import { useUserProfile } from '$src/services/auth/useProfile';
import { selectHeaderTitle } from '$src/stores/HeaderStores';

selectHeaderTitle('menu.Stats');
const { query } = useUserProfile();
</script>

<div class="flex h-full flex-col justify-between">
	<div class="px-[2rem]">
		<StatsMenu />
		<BetsTable />
	</div>
	{#if $query.data}
		<Pagination />
	{/if}
</div>
