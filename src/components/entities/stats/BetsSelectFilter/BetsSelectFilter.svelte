<script>
import Accordion from '$src/components/ui/accordion/Accordion.svelte';
import SportsList from '$src/components/ui/sportsList/SportsList.svelte';
import { accountsList, accountsListMain, bookmakersList, bookmakersListMain, comandList, comandListMain, filterStore, sportList, sportListMain, tourList, tourListMain } from '$src/stores/filterStore';


</script>

<Accordion title={'Спорт'}>
	<SportsList
		setFilter={filterStore.setSelectedSports}
		selectedFilter={filterStore.toggleSport}
		selectedList={$filterStore.selectedSports}
		allItemsStore={sportList}
		mainItemsStore={sportListMain} />
</Accordion>


<Accordion title={'Букмекеры'}>
	<SportsList
		setFilter={filterStore.setSelectedBookmakers}
		selectedFilter={filterStore.toggleBookmaker}
		allItemsStore={bookmakersList}
		selectedList={$filterStore.selectedBookmakers}
		mainItemsStore={bookmakersListMain}
		title={'Букмекеры'} />
</Accordion>

<Accordion title={'Аккаунты'}>
	<SportsList
		setFilter={filterStore.setSelectedAccounts}
		selectedFilter={filterStore.toggleAccount}
		selectedList={$filterStore.selectedAccounts}
		allItemsStore={accountsList}
		mainItemsStore={accountsListMain}
		title={'Аккаунты'} />
</Accordion>

<Accordion title={'Команды'}>
	<SportsList
		setFilter={filterStore.setSelectedComands}
		selectedFilter={filterStore.toggleComand}
		selectedList={$filterStore.selectedComands}
		allItemsStore={comandList}
		mainItemsStore={comandListMain}
		title={'Команды'} />
</Accordion>

<Accordion title={'Турниры'}>
	<SportsList
		setFilter={filterStore.setSelectedTours}
		selectedFilter={filterStore.toggleTour}
		selectedList={$filterStore.selectedTours}
		allItemsStore={tourList}
		mainItemsStore={tourListMain}
		title={'Турниры'} />
</Accordion>



