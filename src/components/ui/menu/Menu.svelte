<script lang="ts">
import { onMount, onDestroy } from 'svelte';

import { isMenuOpen, closeMenu } from '$src/stores/menu';

import UserContainer from './userInfo/UserContainer.svelte';
import RouteMenu from './routeMenu.svelte';
import RouteHelp from './routeHelp.svelte';

let isMobile = window.innerWidth <= 768;
let scrollbarWidth = 0;

const getScrollbarWidth = () => {
	return window.innerWidth - document.documentElement.clientWidth;
};

const handleResize = () => {
	isMobile = window.innerWidth <= 768;
	scrollbarWidth = getScrollbarWidth();
};

onMount(() => {
	scrollbarWidth = getScrollbarWidth();
	window.addEventListener('resize', handleResize);
});

onDestroy(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

{#if !isMobile || $isMenuOpen}
	<div class="fixedContainer">
		<div class="menu">
			<div class="menuWrapper">
				<div class="menu_flex_up">
					<div class="logo">
						<div class="imgLogo">
							<img
								src="/assets/menu/logo.png"
								alt="Logo" />
							OneKeepBet
						</div>
						<button
							on:click="{() => closeMenu()}"
							class="closeMenu">
							<img
								src="assets/menu/close.svg"
								alt="" />
						</button>
					</div>
					<!-- <UserContainer /> -->
					<RouteMenu />
				</div>

				<div class="menu_flex_dwn">
					<RouteHelp />
				</div>
			</div>
		</div>
	</div>
{/if}

<div class="mainContent">
	<!-- Ваш основной контент здесь -->
</div>

<style>
.fixedContainer {
	position: fixed; /* Изменено с sticky на fixed */
	top: 0;
	left: 0;
	width: 13vw;
	z-index: 10000;
	height: 100vh;
}

.menu {
	width: 100%;
	height: 100%;
	background-color: #171b26;
	color: white;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	box-sizing: border-box;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
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
	font-weight: 600;
}
.imgLogo {
	max-height: 34px;
	max-width: 34px;
	padding: 1px;
	display: flex;
}
.imgLogo img {
	height: 100%;
	width: 100%;
}
.closeMenu {
	display: none;
}
@media screen and (max-width: 768px) {
	.fixedContainer {
		position: absolute; /* Можно оставить или изменить на fixed, если требуется */
		z-index: 9999;
		width: 100vw;
	}
	.logo {
		display: flex;
		justify-content: space-between;
	}
	.closeMenu {
		display: block;
	}
}

.mainContent {
	padding-left: 13vw; /* Соответствует ширине меню */
	transition: padding-left 0.3s ease;
}

@media screen and (max-width: 768px) {
	.mainContent {
		padding-left: 0;
	}
}
</style>
