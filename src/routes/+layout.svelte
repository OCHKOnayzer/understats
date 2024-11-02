<script>
import { ParaglideJS } from '@inlang/paraglide-sveltekit'
import { waitLocale } from 'svelte-i18n'
import Container from '$components/providers/container/Container.svelte'
import Menu from '$components/ui/menu/Menu.svelte'
import Header from '$components/widgets/header/Header.svelte'
import AuthModal from '$src/components/ui/authModal/AuthModal.svelte'
import { i18n } from '$lib/i18n'
import '../app.css'

let isLocaleReady = false
let isAuthModalOpen = false

waitLocale().then(() => {
  isLocaleReady = true
})
</script>

<ParaglideJS {i18n}>
  <Container>
    <main>
      {#if isLocaleReady}
        <Menu />

        <div class="mainContent">
          <AuthModal isOpen={isAuthModalOpen} />
          <Header />

          <slot></slot>
        </div>
      {:else}
        <p style="color: white; text-align: center; margin-top: 20%;">Loading translations...</p>
      {/if}
    </main>
  </Container>
</ParaglideJS>

<style>
main {
  min-height: 100vh;
  height: fit-content;
  background-color: #0d111d;
  display: flex;
  gap: 1rem;
}
.mainContent {
  position: relative;
  width: 87vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
@media screen and (max-width: 1024px) {
  .mainContent {
    margin-left: 30vw;
  }
}
</style>
