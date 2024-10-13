<script lang="ts">
import Button from '$components/ui/button/button.svelte'
import * as m from '$m'
import { accounts, LoginForm } from '$stores/store'
import { formatDate } from '$utils/utils'
import { Dialog } from 'bits-ui'
import { get } from 'svelte/store'

export let isSuccess = false

const handleConnect = () => {
  const { login, bookmaker, password } = get(LoginForm)

  if (!login?.selected?.value || !bookmaker?.selected?.label || !password?.selected?.value) {
    isSuccess = false
    return
  }

  accounts.update((store) => [
    ...store,
    {
      id: store.length + 1,
      name: login.selected.value,
      connected: true,
      createdAt: formatDate(new Date()),
      bookmaker: bookmaker.selected.label,
      login: login.selected.value,
      password: password.selected.value,
    },
  ])

  isSuccess = true
}
</script>

<div class="mt-5 flex items-center gap-3">
  <Button variant="outlineRoundedGreen" on:click={handleConnect}>{m.connect()}</Button>
  <Dialog.Close>
    <Button variant="outlineRoundedWhite">{m.cancel()}</Button>
  </Dialog.Close>
</div>
