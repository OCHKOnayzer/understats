<script lang="ts">
import { Label, Select } from 'flowbite-svelte'
export let title: string
export let value: string
export let items
</script>

<Label class="flex cursor-pointer items-center gap-1">
  <Select
    placeholder={title}
    size="lg"
    class="rounded-sm border-none bg-gray-500/10 px-3 py-2 text-white"
    {items}
    bind:value
  />
</Label>
