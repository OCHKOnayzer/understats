<script lang="ts">
import Input from '$components/ui/input/input.svelte'
import * as Select from '$components/ui/select'
import * as m from '$m'
import type { SelectedType } from '$types/types'
import { clearInput } from '$utils/functions/clearInputs'
import { onSelectedChange } from '$utils/functions/onSelectedChange'
import Icon from '@iconify/svelte'

export let placeholder: string
export let name: string
export let selected: SelectedType
export let value
export let variant: 'select' | 'input' = 'input'
export let check: any
</script>

<div class="flex flex-col justify-between">
  <div class="mb-3 flex items-center justify-between">
    <h2 class="text-[12px] text-white">{name}</h2>
    <button class="text-[12px] text-indigo-700" on:click={() => clearInput(check, name)}
      >{m.clear()}</button
    >
  </div>
  <div class="relative flex items-center justify-between">
    {#if variant === 'select'}
      <Select.Root
        bind:selected
        onSelectedChange={(value) => onSelectedChange(value, selected, check, name)}
      >
        <Select.Trigger class="bg-gray-500/10">
          <Select.Value class="text-white" {placeholder} />
        </Select.Trigger>
        <Select.Content>
          {#each value as item}
            <Select.Item value={item.value}>
              <div class="flex items-center gap-2">
                {#if item.icon}
                  <img class="h-4 w-4 rounded-full" src={item.icon} alt="icons" />
                  <span>{item.label}</span>
                {:else}
                  <span>{item.label}</span>
                {/if}
              </div>
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    {:else}
      <Input
        {placeholder}
        class="w-full bg-gray-500/10 text-white placeholder:text-white/50"
        bind:value={selected.value}
      />
      {#if name === m.filterPresetName()}
        <div class="absolute -right-5 flex translate-x-full items-center gap-5">
          {#each ['bx:save', 'material-symbols-light:delete-outline'] as icon}
            <div
              class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[3px] bg-gray-500/10"
            >
              <Icon {icon} color="6B7280" font-size="28px" />
            </div>
          {/each}
        </div>
      {/if}
    {/if}
  </div>
</div>
