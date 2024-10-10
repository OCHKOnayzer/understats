<script lang="ts">
import Icon from '@iconify/svelte'
import BackgroundContainer from '$components/providers/backgroundContainer/BackgroundContainer.svelte'
import Button from '$components/ui/button/button.svelte'
import * as m from '$lib/paraglide/messages.js'

</script>

<header class="header">
  <BackgroundContainer>
    <div class="logo">
      <a href="home">{m.myAccounts()}</a>
    </div>

    <div class="nav">
      <Button variant="outline">{m.report()}</Button>
      <Button variant="outlineGray" class="message">
        <Icon icon="mdi:message-arrow-right-outline" font-size="30" color="gray" />
      </Button>
    </div>
  </BackgroundContainer>
</header>

<style>
.logo {
  font-size: 24px;

  a {
    text-decoration: none;
    color: #fff;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
