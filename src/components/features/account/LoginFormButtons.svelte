<script lang="ts">
import Button from '$components/ui/button/button.svelte'
import * as m from '$m'
import { accountIsSuccess, accounts, LoginForm } from '$stores/store'
import { formatDate } from '$utils/utils'
import { Dialog } from 'bits-ui'
import { tick } from 'svelte'
import { get } from 'svelte/store'

const handleConnect = async () => {
  const { login, bookmaker, password } = get(LoginForm)

  if (!login?.selected?.value || !bookmaker?.selected?.label || !password?.selected?.value) {
    accountIsSuccess.set(false)

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
  setTimeout(() => {
    accountIsSuccess.set(true)
  }, 0)

  await tick()

  console.log(accountIsSuccess)
  console.log(get(accountIsSuccess))
}
</script>

<div class="mt-5 flex items-center gap-3">
  <Button variant="outlineRoundedGreen" on:click={handleConnect}>{m.connect()}</Button>
  <Dialog.Close>
    <Button variant="outlineRoundedWhite">{m.cancel()}</Button>
  </Dialog.Close>
</div>
