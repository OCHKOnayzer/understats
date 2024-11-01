<script>
import Account from '$components/widgets/account/Account.svelte'
import SortContainer from '$components/widgets/sortContainer/SortContainer.svelte'
import Table from '$components/widgets/table/Table.svelte'
import Header from '$src/components/widgets/account/header/Header.svelte'
</script>

<div>
  <Header />
  <SortContainer />
  <Account />
  <!-- <Filter /> -->
  <Table />
</div>
