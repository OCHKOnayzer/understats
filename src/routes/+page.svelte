<script>
import Container from '$src/components/providers/container/Container.svelte';
import Pagination from '$src/components/ui/pagination/Pagination.svelte';
import BetsOverview from '$src/components/widgets/stats/BetsOverview/BetsOverview.svelte';
import StatsMenu from '$src/components/widgets/stats/StatsMenu/StatsMenu.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('menu.Stats');
</script>

<div>
	<Container>
		<StatsMenu />
		<BetsOverview />
		<Pagination />
	</Container>
</div>
