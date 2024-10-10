<svelte:options runes={false} />

<script lang="ts">
import './i18n'
import { waitLocale } from 'svelte-i18n'
import Header from './components/header.svelte'
import Section from './components/section/section.svelte'

let isLocaleReady = false

waitLocale().then(() => {
  isLocaleReady = true
})
</script>

<main>
  {#if isLocaleReady}
    <Header />
    <Section />
  {:else}
    <p style="color: white; text-align: center; margin-top: 20%;">Loading translations...</p>
  {/if}
</main>
