<script lang="ts">
import Button from '$components/ui/button/button.svelte'
import * as m from '$m'
import { accounts, LoginForm } from '$stores/store'
import { formatDate } from '$utils/utils'
import { Dialog } from 'bits-ui'
import { get } from 'svelte/store'

const handleConnect = () => {
  const loginFormData = get(LoginForm)
  accounts.update((store) => {
    const newItem = {
      id: store.length + 1,
      name: loginFormData.login.selected.value,
      connected: true,
      createdAt: formatDate(new Date()),
      bookmaker: loginFormData.bookmaker.selected.label,
      login: loginFormData.login.selected.value,
      password: loginFormData.password.selected.value,
    }
    return [...store, newItem]
  })
}
</script>

<div class="mt-5 flex items-center gap-3">
  <Button variant="outlineRoundedGreen" on:click={handleConnect}>{m.connect()}</Button>
  <Dialog.Close>
    <Button variant="outlineRoundedWhite">{m.cancel()}</Button>
  </Dialog.Close>
</div>
