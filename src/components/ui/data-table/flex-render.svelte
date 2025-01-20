<script lang="ts">
import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';
import type { IAccountResponse } from '$src/types/accounts';
import type { CellContext, ColumnDefTemplate, HeaderContext } from '@tanstack/table-core';

type Context = HeaderContext<Bet | IAccountResponse, unknown> | CellContext<Bet, unknown>;
type Content = string | ColumnDefTemplate<CellContext<Bet | IAccountResponse, unknown>> | ColumnDefTemplate<HeaderContext<Bet | IAccountResponse, unknown>>;

interface Props {
	content: Content;
	context: Context;
}

let props = $props();
</script>

{#if typeof props.content === 'string'}
  {props.content}
{:else if props.content instanceof Function}
  {@const result = props.content(props.context as any)}
  {result}
{/if}
