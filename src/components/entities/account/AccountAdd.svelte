<script lang="ts">
import { derived } from 'svelte/store'
import type { AccountOption } from '../../../types/types'
import LoginFormButtons from './LoginFormButtons.svelte'
import FilterInput from '$components/shared/FilterInput/FilterInput.svelte'
import * as Dialog from '$components/ui/dialog'
import * as m from '$lib/paraglide/messages.js'
import { LoginForm } from '$stores/store'
import { hasOptions } from '$utils/utils'

const Login = derived(LoginForm, ($store) => Object.values($store) as AccountOption[])
</script>

<Dialog.Root>
  <Dialog.Trigger
    class="inline-flex h-10 items-center justify-center rounded-md border border-green-500 bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-green-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  >
    {`+ ${m.addAccount()}`}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title class="flex items-center">
        <h2 class="mb-2 text-[28px] text-white">{m.addAccount()}</h2>
      </Dialog.Title>
      <Dialog.Description>Какая-то важная и нужная приписка к информации</Dialog.Description>
    </Dialog.Header>
    <form action="" class="mt-3 flex flex-col gap-3">
      {#each $Login as login}
        <div class="item">
          <FilterInput
            placeholder={login.placeholder}
            name={login.name}
            selected={login.selected}
            value={hasOptions(login) ? login.options : undefined}
            variant={login.variant}
            check={LoginForm}
          />
        </div>
      {/each}
      <LoginFormButtons />
    </form>
  </Dialog.Content>
</Dialog.Root>
