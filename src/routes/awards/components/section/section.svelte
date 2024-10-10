<svelte:options runes={false} />

<script lang="ts">
import { get } from 'svelte/store'
import { t } from 'svelte-i18n'
import { allAwards, awards } from '../other/card'
import UTrophies from './uTrophies.svelte'

let receivedTitle = get(t)('awards.received')
let futureTitle = get(t)('awards.future')
let remaining = get(t)('awards.remaining')

$: receivedTitle = get(t)('awards.received')
$: futureTitle = get(t)('awards.future')
$: remaining = get(t)('awards.remaining')
</script>

<section class="mainSection">
  <div class="tropheys">
    <span class="trTtitle">
      {receivedTitle}
      <span class="count">({awards.length})</span>
    </span>
    <UTrophies {awards} />

    <span class="trTtitle">
      {futureTitle}
      <span class="more">
        ({remaining}&nbsp;{allAwards.length})
      </span>
    </span>
    <UTrophies awards={allAwards} />
  </div>
</section>

<style>
.mainSection {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}
.mainSection div {
  width: 100%;
}
.tropheys span {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin: 10px;
}
.trTtitle {
  color: white;
  padding-bottom: 5px;
  display: block;
}
.count {
  color: gold;
}
.more {
  color: #71747d;
}
</style>
