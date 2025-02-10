<script lang="ts">
import * as Table from '$components/ui/table';
import type { SvelteComponentTyped } from 'svelte';
import type { Bet } from './columns';

type RowProps = Record<string, any>;
type TableRowType = new (...args: any) => SvelteComponentTyped<RowProps>;
const TableRowComponent = Table.Row as unknown as TableRowType;

export let row: any;
export let onExpressClick: (bet: Bet) => void;

function handleClick() {
	if (row.original.type === 'Express') {
		onExpressClick(row.original);
	}
}
</script>

<TableRowComponent
	data-express="{row.original.type === 'Express'}"
	data-state="{row.getIsSelected() && 'selected'}">
	<div
		class="row-wrapper"
		on:click="{handleClick}">
		<slot />
	</div>
</TableRowComponent>

<style>
:global(tr[data-express='true']) {
	cursor: pointer;
}

:global(tr[data-express='true']:hover) {
	background-color: rgba(102, 96, 255, 0.1);
}

.row-wrapper {
	display: contents;
}
</style>
