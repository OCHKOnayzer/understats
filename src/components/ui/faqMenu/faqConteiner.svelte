<script lang="ts">
import FaqMenu from './FaqMenu.svelte'
let selectedItemName = ''

const handleSelectItemFromFaqMenu = (event: any) => {
  selectedItemName = event.detail.name
}
</script>

<div class="faqSection">
  <FaqMenu on:selectItemFromFaqMenu={handleSelectItemFromFaqMenu} />
  <div class="faqChapter">
    {#if selectedItemName}
      <p>Selected FAQ: {selectedItemName}</p>
    {:else}
      <div class="faq_null">
        <span>Выберите раздел</span>
        <span> и статью...</span>
      </div>
    {/if}
  </div>
</div>

<style>
.faqSection {
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 82vh;
}

.faqChapter {
  width: 74%;
  border-radius: 5px;
  background-color: #252935;
  padding: 20px;
  color: white;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}
.faq_null {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  font-size: 14px;
  flex-direction: column;
}
</style>
