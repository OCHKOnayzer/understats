<script lang="ts">
import BetsFilter from '$src/components/entities/stats/BetsFilter/BetsFilter.svelte';
import BetsSummary from '$src/components/entities/stats/BetsSummary/BetsSummary.svelte';
</script>

<div class="w-full">
	<div class="overflow-x-auto">
		<section class="wrapper">
			<BetsSummary />
			<BetsFilter />
		</section>
	</div>
</div>

<style>
.wrapper {
	display: flex;
	justify-content: space-between;
	flex: 1;
	white-space: nowrap;
}
</style>
