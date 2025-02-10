<script lang="ts">
  import * as Select from '$components/ui/select/index.ts';
  import { filterStore } from '$src/stores/filterStore';
  import { ITEMS_PER_PAGE_OPTIONS } from '$src/utils/constants/constants';

  function handleValueChange(value: string) {
  	filterStore.setItemsPerPage(parseInt(value));
  	filterStore.setPage(1);
  }

  let currentValue = $state(String($filterStore.pagination.itemsPerPage));
</script>

<Select.Root
  type="single"
  value={currentValue}
  onValueChange={handleValueChange}
>
  <Select.Trigger class="w-20 bg-input text-white text-sm rounded-lg px-2 py-2">
    {$filterStore.pagination.itemsPerPage}
  </Select.Trigger>
  <Select.Content class="bg-input text-white">
    {#each ITEMS_PER_PAGE_OPTIONS as option}
      <Select.Item value={String(option)} class="cursor-pointer hover:bg-[#2f3241] px-2 py-1">
        {option}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>