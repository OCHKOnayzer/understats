<script lang="ts">
import Container from '$src/components/providers/container/Container.svelte';
import Pagination from '$src/components/ui/pagination/Pagination.svelte';
import BetsTable from '$src/components/widgets/stats/BetsTable/BetsTable.svelte';
import StatsMenu from '$src/components/widgets/stats/StatsMenu/StatsMenu.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('menu.Stats');
</script>

<div>
	<Container>
		<StatsMenu />
		<BetsTable />
	</Container>
	<Pagination />
</div>
