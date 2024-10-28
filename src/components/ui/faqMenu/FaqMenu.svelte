<script lang="ts">
import FaqMenuElements from './faqMenuElements.svelte'
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

const handleSelectItemFromMenu = (event: any) => {
  dispatch('selectItemFromFaqMenu', { name: event.detail.name, articleId: event.detail.articleId })
}
</script>

<div class="faqMenu">
  <FaqMenuElements on:selectItemFromMenu={handleSelectItemFromMenu} />
</div>

<style>
.faqMenu {
  width: 25%;
  border-radius: 5px;
  background-color: #171b26;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
