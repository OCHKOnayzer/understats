<script>
import { t } from 'svelte-i18n';

import Table from '$components/widgets/table/Table.svelte';
import Account from '$src/components/widgets/accounts/Account.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
selectHeaderTitle('other.accounts');
</script>

<svelte:head>
	<title>{$t('other.accounts')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div>
	<!--	<SortContainer />-->
	<Account />
	<!-- <Filter /> -->
	<Table />
</div>
