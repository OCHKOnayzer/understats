<script lang="ts">
import * as Dialog from '$components/ui/dialog'
import * as m from '$m'
import Default from '$src/components/ui/accountModal/Default.svelte'
import { accountModal } from '$src/utils/functions/accountModal'
import { accountIsSuccess } from '$stores/store'
</script>

<Dialog.Root>
  <Dialog.Trigger
    on:click={accountModal}
    class="inline-flex h-10 items-center justify-center rounded-md border border-green-500 bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-green-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  >
    {`+ ${m.addAccount()}`}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title class="flex items-center">
        <h2 class="mb-2 text-[28px] text-white">{m.addAccount()}</h2>
      </Dialog.Title>
      <Dialog.Description>Поля ввода не должны быть пусты.</Dialog.Description>
    </Dialog.Header>
    {#if $accountIsSuccess === null}
      <Default />
    {:else if $accountIsSuccess}
      SUCCESSSSSSSSSS
    {/if}
  </Dialog.Content>
</Dialog.Root>
