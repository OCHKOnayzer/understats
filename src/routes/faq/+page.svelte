<script>
import Header from '../../components/ui/header/header.svelte'

import { t } from 'svelte-i18n'
const headerProps = $t('faq.faq')
</script>

<svelte:head>
  <title>{headerProps}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <div class="mainContent">
    <Header {headerProps} />
    <div class="progressWrapper">
      <Setings />
    </div>
  </div>
</div>

<style>
.progressWrapper {
  width: 98%;
  margin: 0 auto;
  padding-bottom: 10px;
  box-sizing: border-box;
}
</style>
