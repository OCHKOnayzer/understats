<script lang="ts">
  import * as Select from '$components/ui/select/index.ts';
  import { filterStore } from '$src/stores/filterStore';
  import { ITEMS_PER_PAGE_OPTIONS } from '$src/utils/constants/constants';

  function handleValueChange(value: string) {
  	filterStore.setItemsPerPage(parseInt(value));
  }
</script>

<Select.Root
  type="single"
  value={String($filterStore.pagination.itemsPerPage)}
  onValueChange={handleValueChange}
>
  <Select.Trigger class="w-20 bg-[#20242f] text-white text-sm rounded-lg px-2 py-2">
    {$filterStore.pagination.itemsPerPage}
  </Select.Trigger>
  <Select.Content class="bg-[#20242f] text-white">
    {#each ITEMS_PER_PAGE_OPTIONS as option}
      <Select.Item value={String(option)} class="cursor-pointer hover:bg-[#2f3241] px-2 py-1">
        {option}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>