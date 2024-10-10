<script lang="ts">
import { get } from 'svelte/store'
import SortButton from '$components/entities/sort/SortButton/SortButton.svelte'
import * as m from '$lib/paraglide/messages.js'
import {
  AccountCreate,
  AccountCreateSelect,
  AccountStatus,
  AccountStatusSelect,
} from '$stores/store'
</script>

<div class="flex items-center gap-3">
  <SortButton title={m.preset()} items={get(AccountCreate)} value={get(AccountCreateSelect)} />

  <SortButton title={m.display()} items={get(AccountStatus)} value={get(AccountStatusSelect)} />
</div>

<style>
</style>
