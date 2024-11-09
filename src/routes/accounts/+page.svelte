<script>
import Account from '$components/widgets/account/Account.svelte';
import SortContainer from '$components/widgets/sortContainer/SortContainer.svelte';
import Table from '$components/widgets/table/Table.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('other.accounts')
</script>

<div>
	<SortContainer />
	<Account />
	<!-- <Filter /> -->
	<Table />
</div>
