<script lang="ts">
import { onDestroy, onMount } from 'svelte';

import { closeMenu, isMenuOpen } from '$src/stores/menu';

import RouteHelp from './routeHelp.svelte';
import RouteMenu from './routeMenu.svelte';

let isMobile = window.innerWidth <= 800;
let scrollbarWidth = 0;

const getScrollbarWidth = () => {
	return window.innerWidth - document.documentElement.clientWidth;
};

const handleResize = () => {
	isMobile = window.innerWidth <= 800;
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
		<div
			class="close-mobile-menu"
			on:click="{closeMenu}"></div>
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
						<!-- <button
							on:click="{() => closeMenu()}"
							class="closeMenu">
							<img
								src="assets/menu/close.svg"
								alt="" />
						</button> -->
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

<div class="mainContent"> </div>

<style>
.fixedContainer {
	position: fixed;
	top: 0;
	left: 0;
	width: 13vw;
	z-index: 9997;
	height: 100vh;
}

.menu {
	width: 100%;
	height: 100%;
	background-color: #171b26;
	color: white;
	box-sizing: border-box;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateX(0);
}
.menuWrapper {
	height: 100%;
	width: 100%;
	padding-top: 16px;
	padding-bottom: 16px;
	padding-right: var(--elements-padding);
	padding-left: var(--elements-padding);
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
.mainContent {
	padding-left: 13vw;
	transition: padding-left 0.3s ease;
}
@media screen and (max-width: 1300px) {
	.fixedContainer {
		width: 16vw;
	}
	.mainContent {
		padding-left: 16vw;
	}
}
@media screen and (max-width: 1050px) {
	.fixedContainer {
		width: 20vw;
	}
	.mainContent {
		padding-left: 20vw;
	}
}
@media screen and (max-width: 800px) {
	.close-mobile-menu {
		position: absolute;
		background-color: #000000ab;
		width: 100vw;
		height: 100vh;
	}
	.fixedContainer {
		position: fixed;
		z-index: 9999;
		width: 80vw;
		height: 100dvh;
	}
	.menu {
		width: 100%;
		border-radius: 0 24px 24px 0;
		transform: translateX(0%);
		animation: slideRight 180ms ease-out forwards;
	}
	.menuWrapper {
		overflow-y: auto;
		height: 90%;
	}
	.menuWrapper::-webkit-scrollbar {
		border-radius: 30px;
		width: 3px;
	}
	.menuWrapper::-webkit-scrollbar-thumb {
		background: rgba(135, 138, 160, 0.507);
	}
	.logo {
		display: flex;
		justify-content: space-between;
	}
	.mainContent {
		padding-left: 0;
	}
}
@keyframes slideRight {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0%);
	}
}
</style>
