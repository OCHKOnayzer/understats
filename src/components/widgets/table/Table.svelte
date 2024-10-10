<script lang="ts">
import Icon from '@iconify/svelte'
import Button from '$components/ui/button/button.svelte'
import * as Table from '$components/ui/table'
import * as m from '$lib/paraglide/messages.js'
import { accounts } from '$stores/store'
import { cn } from '$utils/utils'

$: filteredAccounts = $accounts
</script>

<div class="mt-5">
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>{m.bookmaker()}</Table.Head>
        <Table.Head>{m.accountId()}</Table.Head>
        <Table.Head>{m.login()}</Table.Head>
        <Table.Head>{m.creationDate()}</Table.Head>
        <Table.Head>{m.currentBalance()}</Table.Head>
        <Table.Head>{m.totalBets()}</Table.Head>
        <Table.Head>{m.authorization()}</Table.Head>
        <Table.Head>{m.accountStatus()}</Table.Head>
        <Table.Head>{m.action()}</Table.Head>
      </Table.Row>
    </Table.Header>
    {#each filteredAccounts as account, index (account.id)}
      <Table.Body>
        <Table.Row class={cn(`${index % 2 === 1 ? 'bg-gray-500/20' : ''}`)}>
          <Table.Cell>{account.bookmaker ? account.bookmaker : 'N/A'}</Table.Cell>
          <Table.Cell>{account.id || 'N/A'}</Table.Cell>
          <Table.Cell>{account.login ? m.connected() : m.disconnected()}</Table.Cell>
          <Table.Cell>
            {account.createdAt}
          </Table.Cell>
          <Table.Cell>999</Table.Cell>
          <Table.Cell>999/999/999</Table.Cell>
          <Table.Cell>{m.extension()}</Table.Cell>
          <Table.Cell>
            {#if account.connected}
              <Button variant="cyberGreen">{m.active()}</Button>
            {:else}
              <Button variant="cyberGreen">Green</Button>
            {/if}
          </Table.Cell>
          <Table.Cell>
            <div class="flex cursor-pointer items-center gap-1">
              <Icon font-size="25px" icon="proicons:pencil" />
              <h2>{m.active()}</h2>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    {:else}
      <p>No accounts available</p>
    {/each}
  </Table.Root>
</div>
