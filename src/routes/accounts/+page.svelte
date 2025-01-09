<script>
import Table from '$components/widgets/table/Table.svelte';
import Account from '$src/components/widgets/accounts/Account.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('other.accounts');
</script>

<div class="px-[2rem]">
	<!--	<SortContainer />-->
	<Account />
	<!-- <Filter /> -->
	<Table />
</div>
