<script lang="ts">
import Icon from '@iconify/svelte';

import Button from '$components/ui/button/button.svelte';
import * as Table from '$components/ui/table';
import * as m from '$m';
import { filteredAccounts } from '$stores/store';
import { cn } from '$utils/utils';
</script>

<div class="mt-5">
	<Table.Root>
		<Table.Header class="tect-[10px] bg-[#31384A]">
			<Table.Row class="border-none">
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.bookmaker()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.accountId()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.login()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.creationDate()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.currentBalance()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.totalBets()}
					</div>
				</Table.Head>
				<Table.Head>
					<div class="flex items-center gap-1">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.authorization()}
					</div>
				</Table.Head>
				<Table.Head class="text-center">
					<div class="flex items-center gap-1 text-center">
						<img
							src="icons/bk/table.svg"
							alt="table" />
						{m.accountStatus()}
					</div>
				</Table.Head>
				<Table.Head class="text-center">{m.action()}</Table.Head>
			</Table.Row>
		</Table.Header>

		{#if $filteredAccounts.length > 0}
			<Table.Body>
				{#each $filteredAccounts as account, index (account.id)}
					<Table.Row class="{cn(`${index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]'}`)}">
						<Table.Cell>{account.bookmaker || 'N/A'}</Table.Cell>
						<Table.Cell>{account.id || 'N/A'}</Table.Cell>
						<Table.Cell>
							{account.login ? m.connected() : m.disconnected()}
						</Table.Cell>
						<Table.Cell>{account.createdAt}</Table.Cell>
						<Table.Cell>999</Table.Cell>
						<Table.Cell>999/999/999</Table.Cell>
						<Table.Cell>{m.extension()}</Table.Cell>
						<Table.Cell class="px-2 text-center">
							{#if account.connected}
								<Button
									variant="cyberGreen"
									size="cyber">{m.active()}</Button>
							{:else}
								<Button
									variant="cyberRed"
									size="cyber">Green</Button>
							{/if}
						</Table.Cell>
						<Table.Cell class="px-4 text-center">
							<div class="flex cursor-pointer items-center gap-1">
								<Icon
									font-size="25px"
									icon="proicons:pencil" />
								<h2>{m.edit()}</h2>
							</div>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		{:else}
			<h2 class="text-center">No accounts available</h2>
		{/if}
	</Table.Root>
</div>
