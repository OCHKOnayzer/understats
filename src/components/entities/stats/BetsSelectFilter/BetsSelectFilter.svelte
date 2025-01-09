<script lang="ts">
import { t } from 'svelte-i18n';
import { writable } from 'svelte/store';
import { createQuery } from '@tanstack/svelte-query';

import Accordion from '$src/components/ui/accordion/Accordion.svelte';
import SportsList from '$src/components/ui/sportsList/SportsList.svelte';
import { sportsService } from '$src/services/sports.service';
import { bookmakersList, bookmakersListMain, filterStore } from '$src/stores/filterStore';

const sports = createQuery({
	queryKey: ['sports'],
	queryFn: () => sportsService.getSports()
});

const allSportsStore = writable([]);
const mainSportsStore = writable([]);

$effect(() => {
	if ($sports.data) {
		allSportsStore.set($sports.data);
		mainSportsStore.set($sports.data?.slice(0, 8));
	}
});
</script>

<Accordion title="{$t('filter.accordion.sports')}">
	<SportsList
		setFilter="{filterStore.setSelectedSports}"
		selectedFilter="{filterStore.toggleSport}"
		selectedList="{$filterStore.selectedSports}"
		allItemsStore="{allSportsStore}"
		mainItemsStore="{mainSportsStore}" />
</Accordion>

<Accordion title="{$t('filter.accordion.bookmakers')}">
	<SportsList
		setFilter="{filterStore.setSelectedBookmakers}"
		selectedFilter="{filterStore.toggleBookmaker}"
		allItemsStore="{bookmakersList}"
		selectedList="{$filterStore.selectedBookmakers}"
		mainItemsStore="{bookmakersListMain}" />
</Accordion>

<!-- <Accordion title="{$t('filter.accordion.accounts')}">
    <SportsList
        setFilter="{filterStore.setSelectedAccounts}"
        selectedFilter="{filterStore.toggleAccount}"
        selectedList="{$filterStore.selectedAccounts}"
        allItemsStore="{accountsList}"
        mainItemsStore="{accountsListMain}" />
</Accordion> -->

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
