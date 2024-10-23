<script lang="ts">
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'

let currentPath: string = ''

onMount(() => {
  currentPath = window.location.pathname
  console.log('Current path:', currentPath)
})
</script>

<div class="menu_items">
  <a href="/" class="card_item" class:selected={currentPath === '/h1'}>
    <div class="image_box">
      <img src={currentPath === '/hl' ? 'assets/item1.png' : 'assets/item1.png'} alt="" />
    </div>
    <span class="item_name">{$t('menu.Place_bet')}</span>
  </a>

  <a href="/" class="card_item" class:selected={currentPath === '/'}>
    <div class="image_box">
      <img
        src={currentPath === '/' ? 'assets/active/home.png' : 'assets/home.png'}
        alt="Домашняя"
      />
    </div>
    <span class="item_name">{$t('menu.Main')}</span>
  </a>

  <a href="/stats" class="card_item" class:selected={currentPath === '/stats'}>
    <div class="image_box">
      <img
        src={currentPath === '/stats' ? 'assets/active/FAQ.png' : 'assets/FAQ.png'}
        alt="Статистика"
      />
    </div>
    <span class="item_name">{$t('menu.Stats')}</span>
  </a>

  <a href="/profile" class="card_item" class:selected={currentPath === '/profile'}>
    <div class="image_box">
      <img
        src={currentPath === '/profile' ? 'assets/active/users.png' : 'assets/users.png'}
        alt="Профиль"
      />
    </div>
    <span class="item_name">{$t('menu.Profile')}</span>
  </a>

  <a href="/mods" class="card_item" class:selected={currentPath === '/mods'}>
    <div class="image_box">
      <img src={currentPath === '/mods' ? 'assets/active/mod.png' : 'assets/mod.png'} alt="Моды" />
    </div>
    <span class="item_name">{$t('menu.Mods')}</span>
  </a>

  <a href="/setings" class="card_item" class:selected={currentPath === '/setings'}>
    <div class="image_box">
      <img
        src={currentPath === '/setings' ? 'assets/active/setings.png' : 'assets/setings.png'}
        alt="Настройки"
      />
    </div>
    <span class="item_name">{$t('menu.Setings')}</span>
  </a>
</div>

<style>
.menu_items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
.card_item {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  border-radius: 10px;
  transition: 300ms;
  color: gray;
  text-decoration: none;
}
.image_box {
  max-height: 25px;
  max-width: 25px;
  margin-right: 10px;
  padding-left: 10px;
}
.image_box img {
  height: 100%;
  width: 100%;
}
.card_item:hover {
  cursor: pointer;
}
.selected {
  background-color: #6660ff;
}
.selected span {
  color: white;
}
@media screen and (max-height: 800px) {
  .card_item {
    height: 40px;
    padding: 5px;
  }
  .image_box {
    max-height: 20px;
    max-width: 20px;
  }
}
</style>
