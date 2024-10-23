<script>
import FaqMenu from './FaqMenu.svelte'
</script>

<div class="faqSection">
  <FaqMenu />
  <div class="faqChapter"></div>
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
}
</style>
