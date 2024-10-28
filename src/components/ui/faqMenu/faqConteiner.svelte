<script lang="ts">
import { t } from 'svelte-i18n'
import FaqMenu from './FaqMenu.svelte'

let selectedItemName = ''
let article: string | null = null
let ArticleComponent: typeof import('svelte').SvelteComponent | null = null

// Функция для обработки выбора из меню
const handleSelectItemFromFaqMenu = async (event: any) => {
  selectedItemName = event.detail.name
  article = event.detail.articleId
  if (article !== null) {
    // Подгрузка компонента статьи
    await loadArticleComponent(article)
  }
}

// Асинхронная функция для динамической подгрузки нужного компонента
async function loadArticleComponent(article: string) {
  try {
    // Импорт нужного компонента статьи
    const module = await import(`./article/state/${article}.svelte`)
    ArticleComponent = module.default
  } catch (error) {
    console.error(`Не удалось загрузить статью с ${article}`, error)
    ArticleComponent = null // Обработка отсутствующего компонента
  }
}
</script>

<div class="faqSection">
  <FaqMenu on:selectItemFromFaqMenu={handleSelectItemFromFaqMenu} />

  <div class="faqChapter">
    {#if selectedItemName && ArticleComponent}
      <div class="selected_state_wrapper">
        <header class="state_header">
          <span class="selected_title">{selectedItemName}</span>
          <button class="repost">{$t('faq.repost')}</button>
        </header>
        <!-- Рендер динамически подгруженного компонента статьи -->
        <svelte:component this={ArticleComponent} title={selectedItemName} content="Текст статьи" />
      </div>
    {:else}
      <div class="faq_null">
        <span>{$t('faq.select_state')}</span>
        <span>{$t('faq.select_razdel')}...</span>
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
.selected_title {
  font-size: 36px;
}
.selected_state_wrapper {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.state_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.repost {
  width: 120px;
  height: 44px;
  background-color: #171b26;
  border: 1px solid #363a45;
  box-sizing: border-box;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}
.repost:hover {
  background-color: #1f232f;
}
.selected_state_wrapper::-webkit-scrollbar {
  border-radius: 30px;
  width: 3px;
}
.selected_state_wrapper::-webkit-scrollbar-track {
  background: rgba(45, 48, 68, 0.692);
}
.selected_state_wrapper::-webkit-scrollbar-thumb {
  background: rgba(135, 138, 160, 0.507);
}
</style>
