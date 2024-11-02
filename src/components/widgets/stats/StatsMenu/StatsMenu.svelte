<script lang="ts">
import BetsFilter from '$src/components/entities/stats/BetsFilter/BetsFilter.svelte';
import BetsSummary from '$src/components/entities/stats/BetsSummary/BetsSummary.svelte';
</script>

<section class="wrapper">
	<BetsSummary />
	<BetsFilter />
</section>

<style>
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
