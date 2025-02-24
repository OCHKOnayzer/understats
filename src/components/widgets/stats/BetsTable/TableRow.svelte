<script lang="ts">
import * as Table from '$components/ui/table';

import type { Bet } from '$src/types/bet';
import type { SvelteComponentTyped } from 'svelte';

type RowProps = Record<string, any>;
type TableRowType = new (...args: any) => SvelteComponentTyped<RowProps>;
const TableRowComponent = Table.Row as unknown as TableRowType;

let {
	row,
	onExpressClick,
	index = 0
} = $props<{
	row: {
		original: Bet;
		getIsSelected: () => boolean;
	};
	onExpressClick: (bet: Bet) => void;
	index?: number;
}>();

function handleClick() {
	if (row.original.type === 'Express') {
		onExpressClick(row.original);
	}
}

const bgClass = index % 2 === 1 ? 'bg-[#252935]' : 'bg-[#171B26]';
</script>

<TableRowComponent
	data-express="{row.original.type === 'Express'}"
	data-state="{row.getIsSelected() && 'selected'}"
	class="{bgClass} transition-all duration-300 ease-in-out hover:bg-[#3D3A8540]">
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
