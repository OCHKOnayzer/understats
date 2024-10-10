<svelte:options runes={false} />

<script>
import { onMount } from 'svelte'
import { get } from 'svelte/store'
import { t } from 'svelte-i18n'
import { ItemInfo, ItemMenu } from './item'
import { fetchUser, user } from '$stores/menu'

onMount(() => {
  fetchUser()
})

$: translatedMenuItems = ItemMenu.map((item) => ({
  ...item,
  name: get(t)(item.name),
}))

$: translatedInfoItems = ItemInfo.map((item) => ({
  ...item,
  name: get(t)(item.name),
}))
</script>

<div class="menu">
  <div class="menuWrapper">
    <div class="menu_flex_up">
      <div class="logo">
        <div class="imgLogo">
          <img src={'/assets/logo.png'} alt="" />
        </div>
        UnderStat
      </div>

      <div class="userAwards">
        <a class="userAwardsConteiner" href="/awards">
          <span>{$t('other.awards')}</span>
        </a>
      </div>

      <div class="menu_items">
        {#each translatedMenuItems as item}
          <a class="card_item" href="/">
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </a>
        {/each}
      </div>
    </div>

    <div class="menu_flex_dwn">
      <div class="menu_items">
        {#each translatedInfoItems as item}
          <div class="card_item">
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        {/each}
      </div>
      
      {#if $user}
        <div class="userConteiner">
          <div class="user_flex">
            <div class="avatar">
              <img class="image" src={$user.image || '/assets/avatar.jpg'} alt="user avatar" />
            </div>
            <div class="user_info">
              <div class="user_wrapper">
                <div class="userName">{$user.name}</div>
                <span>ID: {$user.id}</span>
              </div>
              <div class="quitBtn">
                <img src={'/assets/quit.png'} alt="" />
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
.menu {
  width: 13vw;
  height: 100vh;
  background-color: #171b26;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.menuWrapper {
  height: 95%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.imgLogo {
  height: fit-content;
  width: fit-content;
}
.userAwards {
  margin: 20px 0px 20px 0px;
}
.userAwardsConteiner {
  background-color: #2a2b5b;
  border: 2px solid #424482;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #9a9bbc;
  font-size: 15px;
}
.userAwardsConteiner span {
  padding-left: 10px;
}
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
  width: 80%;
  color: #565f6e;
  transition: 300ms;
}
.card_item:hover {
  color: #697283;
  cursor: pointer;
}
.userConteiner {
  height: fit-content;
  padding: 5px;
  width: 95%;
  margin: 0 auto;
  background-color: #0d111d;
  border-radius: 5px;
}
.user_flex {
  display: flex;
}
.avatar {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  overflow: hidden;
  margin: 5px;
}
.image {
  height: 100%;
  width: 100%;
}
.user_info {
  width: 80%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
.userName {
  font-size: 15px;
}
.user_info span {
  color: rgba(128, 128, 128, 0.383);
}
.quitBtn {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .menu {
    width: 30vw;
  }
  .menuWrapper {
    width: 85%;
  }
}
</style>
