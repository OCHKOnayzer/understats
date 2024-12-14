<script>
import Account from '$src/components/widgets/accounts/Account.svelte';
import Table from '$components/widgets/table/Table.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('other.accounts');
</script>

<div>
	<!--	<SortContainer />-->
	<Account />
	<!-- <Filter /> -->
	<Table />
</div>
