<script>
import { ParaglideJS } from '@inlang/paraglide-sveltekit'
import Container from '$components/providers/container/Container.svelte'
import Header from '$components/widgets/header/Header.svelte'
import { i18n } from '$lib/i18n'
import '../app.css'
</script>

<ParaglideJS {i18n}>
  <Container>
    <Header />
    <main>
      <slot></slot>
    </main>
  </Container>
</ParaglideJS>

<style>
</style>
