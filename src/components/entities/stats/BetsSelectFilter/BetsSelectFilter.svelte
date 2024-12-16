<script>
import Accordion from '$src/components/ui/accordion/Accordion.svelte';
import SportsList from '$src/components/ui/sportsList/SportsList.svelte';
import { accountsList, accountsListMain, bookmakersList, bookmakersListMain, filterStore, sportList, sportListMain } from '$src/stores/filterStore';
import { t } from 'svelte-i18n';
</script>

<Accordion title="{$t('filter.accordion.sports')}">
	<SportsList
		setFilter="{filterStore.setSelectedSports}"
		selectedFilter="{filterStore.toggleSport}"
		selectedList="{$filterStore.selectedSports}"
		allItemsStore="{sportList}"
		mainItemsStore="{sportListMain}" />
</Accordion>

<Accordion title="{$t('filter.accordion.bookmakers')}">
	<SportsList
		setFilter="{filterStore.setSelectedBookmakers}"
		selectedFilter="{filterStore.toggleBookmaker}"
		allItemsStore="{bookmakersList}"
		selectedList="{$filterStore.selectedBookmakers}"
		mainItemsStore="{bookmakersListMain}" />
</Accordion>

<Accordion title="{$t('filter.accordion.accounts')}">
	<SportsList
		setFilter="{filterStore.setSelectedAccounts}"
		selectedFilter="{filterStore.toggleAccount}"
		selectedList="{$filterStore.selectedAccounts}"
		allItemsStore="{accountsList}"
		mainItemsStore="{accountsListMain}" />
</Accordion>

<!--
<Accordion title="{$t('filter.accordion.teams')}">
	<SportsList
		setFilter="{filterStore.setSelectedComands}"
		selectedFilter="{filterStore.toggleComand}"
		selectedList="{$filterStore.selectedComands}"
		allItemsStore="{comandList}"
		mainItemsStore="{comandListMain}" />
</Accordion>

<Accordion title="{$t('filter.accordion.leagues')}">
	<SportsList
		setFilter="{filterStore.setSelectedTours}"
		selectedFilter="{filterStore.toggleTour}"
		selectedList="{$filterStore.selectedTours}"
		allItemsStore="{tourList}"
		mainItemsStore="{tourListMain}" />
</Accordion> -->
