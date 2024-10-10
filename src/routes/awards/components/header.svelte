<svelte:options runes={false} />

<script>
import Progress from './widgets/progress.svelte'
</script>

<div class="header">
  <div class="progressWrapper">
    <Progress />
  </div>
</div>

<style>
.header {
  height: fit-content;
  box-sizing: border-box;
  padding: 20px;
}

.progressWrapper {
  height: 60%;
  box-sizing: border-box;
}

div.progressWrapper {
  margin: 0 !important;
}
</style>
