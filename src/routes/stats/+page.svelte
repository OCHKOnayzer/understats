<script>
import Container from '$src/components/providers/container/Container.svelte';
import BetsOverview from '$src/components/widgets/stats/BetsOverview/BetsOverview.svelte';
import Header from '$src/components/widgets/stats/header/Header.svelte';
import StatsMenu from '$src/components/widgets/stats/StatsMenu/StatsMenu.svelte';
</script>

<div>
	<Container>
		<Header />
		<StatsMenu />
		<BetsOverview />
	</Container>
</div>
