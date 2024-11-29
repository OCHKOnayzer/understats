<script lang="ts">
    import { t } from 'svelte-i18n';
    import * as Table from '$components/ui/table';
    import { onMount } from 'svelte';

    export let betId: string;

    interface DetailedData {
        id: string;
        data: any;
        availableColumns: string[];
    }

    let selectedColumns: string[] = [];
    let detailedData: DetailedData | null = null;
    let isLoading = false;
    let error = '';

    const defaultColumns = [
        'date',
        'bookmaker',
        'sport',
        'event',
        'bet_type',
        'coefficient',
        'amount',
        'result'
    ];

    // Column options for the checkboxes
    let columnOptions = defaultColumns.map(col => ({
        id: col,
        label: col,
        checked: true
    }));

    function toggleColumn(columnId: string) {
        const index = selectedColumns.indexOf(columnId);
        if (index === -1) {
            selectedColumns = [...selectedColumns, columnId];
        } else {
            selectedColumns = selectedColumns.filter(id => id !== columnId);
        }
    }

    async function fetchDetailedData() {
        isLoading = true;
        error = '';
        try {
            // TODO: Replace with actual API call
            const response = await fetch(`/api/bets/${betId}/details`);
            const data = await response.json();
            detailedData = data;
            // Initialize with default columns if none selected
            if (selectedColumns.length === 0) {
                selectedColumns = defaultColumns;
            }
        } catch (e) {
            error = e.message;
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        fetchDetailedData();
    });
</script>

<div class="p-4">
    <!-- Column Selection -->
    <div class="mb-4 flex flex-wrap gap-2">
        {#each columnOptions as option}
            <label class="inline-flex items-center">
                <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-indigo-600"
                    checked={selectedColumns.includes(option.id)}
                    on:change={() => toggleColumn(option.id)}
                />
                <span class="ml-2 text-gray-700">{option.label}</span>
            </label>
        {/each}
    </div>

    <!-- Detailed Table -->
    {#if isLoading}
        <div class="flex justify-center items-center h-40">
            <div class="loading-spinner" />
        </div>
    {:else if error}
        <div class="text-red-500 p-4">
            {error}
        </div>
    {:else if detailedData}
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    {#each selectedColumns as column}
                        <Table.Head>
                            <div class="flex items-center gap-1">
                                <img src="icons/bk/table.svg" alt="table" />
                                <span class="whitespace-pre-line">{column}</span>
                            </div>
                        </Table.Head>
                    {/each}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    {#each selectedColumns as column}
                        <Table.Cell>
                            {detailedData.data[column]}
                        </Table.Cell>
                    {/each}
                </Table.Row>
            </Table.Body>
        </Table.Root>
    {:else}
        <div class="text-center p-4">
            Нет данных
        </div>
    {/if}
</div>
