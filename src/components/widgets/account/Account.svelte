<script lang="ts">
import AccountAddButton from '$components/entities/account/AccountAdd.svelte';
// import FilterAccountButton from '$components/entities/account/FilterAccountButton.svelte'
import BackgroundContainer from '$components/providers/backgroundContainer/BackgroundContainer.svelte';
import * as m from '$m';
import { filteredAccounts } from '$stores/store';
console.log($filteredAccounts);
</script>

<BackgroundContainer>
	<h2 class="text-[28px] text-white">
		{#if $filteredAccounts.length}
			{$filteredAccounts.length} {m.countAccount()}
		{/if}
	</h2>
	<div class="flex items-center gap-2">
		<!-- <FilterAccountButton /> -->
		<AccountAddButton />
	</div>
</BackgroundContainer>
