<script lang="ts">
import { onMount } from 'svelte'
import { fetchUser, user } from '$stores/menu'
import { t } from 'svelte-i18n'
import RouteMenu from './routeMenu.svelte'
import RouteHelp from './routeHelp.svelte'

onMount(() => {
  fetchUser()
})

let currentPath: string = ''

onMount(() => {
  currentPath = window.location.pathname
})

$: isActive = (href: string): boolean => currentPath === href
</script>

<div class="menu">
  <div class="menuWrapper">
    <div class="menu_flex_up">
      <div class="logo">
        <div class="imgLogo">
          <img src={'/assets/menu/logo.png'} alt="Лого" />
        </div>
        UnderStat
      </div>

      <!-- <div class="userAwards">
          <div class="userAwardsConteiner" class:usAwardDs={isActive('/awards')}>
            <span>{$t('other.awards')}</span>
            <div class="user_award">
              <div>
                <img src="/assets/awards/gold/goldTrophLvl1.png" alt="Трофей" />
                <p>4</p>
              </div>
              <div>
                <img src="/assets/awards/gold/goldTrophLvl2.png" alt="Трофей" />
                <p>0</p>
              </div>
              <div>
                <img src="/assets/awards/gold/goldTrophLvl2.png" alt="Трофей" />
                <p>0</p>
              </div>
            </div>
          </div>
        </div> -->
      <RouteMenu />
    </div>
    <div class="menu_flex_dwn">
      <RouteHelp />
      {#if $user}
        <div class="userConteiner">
          <div class="user_flex">
            <div class="avatar">
              <img class="image" src={$user.image || 'assets/avatar.jpg'} alt="user avatar" />
            </div>
            <div class="user_info">
              <div class="user_wrapper">
                <div class="userName">{$user.name}</div>
                <span>ID: {$user.id}</span>
              </div>
              <div class="quitBtn">
                <img src="assets/leave.svg" alt="" />
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
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
  height: 100vh;
  background-color: #171b26;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
  right:2%;
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
  max-height: 60px;
  max-width: 60px;
}
.imgLogo img {
  height: 100%;
  width: 100%;
}
.userAwards {
  margin: 20px 0px 20px 0px;
}
.userAwardsConteiner {
  background-color: #0d111d;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #9a9bbc;
  font-size: 15px;
}
.usAwardDs {
  background-color: #2a2b5b;
  border: 2px solid #424482;
}
.user_award {
  margin-left: 10px;
  height: 90%;
  display: flex;
  align-items: center;
  width: fit-content;
}
.user_award div {
  margin-right: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.user_award div img {
  height: 100%;
  width: 100%;
}
.userAwardsConteiner span {
  padding-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
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

/* @media screen and (max-width: 1600px) {
  .menu {
    width: 20vw;
  }
  .menuWrapper {
    width: 85%;
  }
}
@media screen and (max-width: 1370px) {
  .userAwards {
    margin: 0px 0px 0px 0px;
  }
}
@media screen and (max-width: 1176px) {
  .menu {
    width: 25vw;
  }
  .menuWrapper {
    width: 85%;
  }
}
@media screen and (max-width: 900px) {
  .userAwardsConteiner span {
    display: none;
  }
} */
@media screen and (max-height: 600px) {
  .menu {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .menu::-webkit-scrollbar {
    border-radius: 30px;
    width: 3px;
  }
  .menu::-webkit-scrollbar-track {
    background: rgba(45, 48, 68, 0.692);
  }
  .menu::-webkit-scrollbar-thumb {
    background: rgba(135, 138, 160, 0.507);
  }
}
</style>
