<script lang="ts">
import FilterInput from '$components/shared/FilterInput/FilterInput.svelte'
import LoginFormButtons from '$src/components/features/account/LoginFormButtons.svelte'
import { LoginForm } from '$stores/store'
import type { AccountOption } from '$types/types'
import { hasOptions } from '$utils/utils'
import { derived } from 'svelte/store'
const Login = derived(LoginForm, ($store) => Object.values($store) as AccountOption[])
</script>

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
