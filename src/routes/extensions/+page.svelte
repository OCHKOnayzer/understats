<script>
import Header from '../../components/ui/header/header.svelte'
import Slider from '../../components/ui/slider/extensionsSlider/Slider.svelte'
import DownloadElement from '../../components/ui/downloadElement/DownloadElement.svelte'
import DownloadInfo from '../../components/ui/downloadInfo/DownloadInfo.svelte'
import FunctionalSection from '../../components/ui/functional/FunctionalSection.svelte'
import Exp from '../../components/ui/exp/Exp.svelte'
import { t } from 'svelte-i18n'
const headerProps = $t('extensions.extensions')
</script>

<svelte:head>
  <title>{headerProps}</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <div class="mainContent">
    <Header {headerProps} />
    <Slider />
    <div class="extensionsInfo">
      <div class="extensionsInfo_wrapper">
        <div class="extensionInfo_element all_extension">
          <DownloadElement Title={$t('extensions.Google_Chrome')} />
          <DownloadElement Title={$t('extensions.Mozila_Firefox')} />
          <DownloadElement Title={$t('extensions.Opera')} />
          <DownloadInfo />
        </div>
        <div class="extensionInfo_element functional">
          <FunctionalSection />
        </div>
        <div class="extensionInfo_element experience">
          <Exp />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.text-column {
  width: fit-content;
  padding-bottom: 1%;
}
.extensionsInfo {
  width: 98%;
  margin: 0 auto;
}
.extensionsInfo_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
.extensionInfo_element {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.all_extension {
  width: 30%;
  position: relative;
  padding-top: 15%;
  display: flex;
  align-items: left;
  justify-content: end;
}
.functional {
  width: 40%;
}
.experience {
  width: 30%;
}
</style>
