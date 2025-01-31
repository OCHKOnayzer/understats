<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import MobileFilterButton from '$src/components/features/stats/FilterMobile/MobileFilterButton.svelte';
import CheckBox from '$src/components/widgets/demo/checkBox/CheckBox.svelte';
import { closeState, headerTitle } from '$src/stores/HeaderStores';
import { openMenu } from '$src/stores/menu';
import { closeModal, currentUser, modalComponent, openModal } from '$src/stores/modalStore';
import { openFaqMenu } from '$src/stores/faq';
import { initializeScreenWidthListener, isMobile } from '$src/stores/isMobile';

import LangButton from '../button/langButton/LangButton.svelte';

import { goto } from '$app/navigation';
import { page } from '$app/stores';

type ModalType = 'authModal' | 'LeaveContainer' | 'FailedModal' | 'SuccessfulModal' | 'SorryModal' | 'LangModal' | 'SupportModal' | 'SocialModal';

onMount(() => {
	initializeScreenWidthListener();
});
$: {
	if (!isHelp.includes($page.url.pathname)) {
		closeState.set(false);
	}
	console.log($closeState);
}
const openCurrentModal = (modal: ModalType) => {
	if ($modalComponent !== null && $modalComponent !== modal) {
		return;
	}
	if ($modalComponent === modal) {
		closeModal();
	} else {
		openModal(modal);
	}
};

const isTumbler = ['/', '/accounts', '/help', '/extensions'];
const isSettings = ['/settings'];
const isHelp = ['/help'];

function closeStateFunction() {
	closeState.set(false);
	openFaqMenu();
}
</script>

<header class="header">
	<div class="headerItem">
		<div class="flexConteiner">
			<div class="headerActions">
				<button on:click="{() => openMenu()}">
					<img
						src="assets/header/menu.svg"
						alt="" />
				</button>

				{#if $currentUser}
					{#if !isSettings.includes($page.url.pathname)}
						<a
							class="profile-container"
							href="/settings">
							<!-- <img src="" alt=""> -->
						</a>
					{/if}
				{:else}
					<button
						aria-label="auth"
						class="profile-container"
						on:click="{() => goto('/authorization')}"></button>
				{/if}
			</div>
			<div class="flex items-center">
				<div class="title">
					{#if $isMobile && $closeState && isHelp.includes($page.url.pathname)}
						<button
							class="help"
							on:click="{() => closeStateFunction()}"
							><img
								src="/icons/back_arrow.svg"
								alt="" /></button>
					{/if}
					<p>{$t($headerTitle)}</p>
				</div>
				{#if $headerTitle == 'menu.Stats'}
					<MobileFilterButton />
				{/if}
			</div>

			<div class="buttonConteiner">
				{#if isTumbler.includes($page.url.pathname)}
					<div class="btnWrapper check">
						<CheckBox />
					</div>
				{/if}
				<div class="btnWrapper lang {$modalComponent === 'LangModal' ? 'active' : ''}">
					<LangButton openCurrentModal="{openCurrentModal}" />
				</div>
				<div class="btnWrapper support {$modalComponent === 'SocialModal' ? 'active' : ''}">
					<button on:click="{() => openCurrentModal('SocialModal')}">
						<img
							src="assets/header/support.png"
							alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
.header {
	height: fit-content;
	box-sizing: border-box;
	padding-top: var(--elements-padding);
	padding-bottom: var(--elements-padding);
	width: 100%;
	margin: 0 auto;
	position: relative;
	z-index: 1;
}

.headerItem {
	height: 75px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: #171b26;
	border-radius: 8px;
}

.flexConteiner {
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
}
.headerActions {
	display: none;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 3vh;
}
.profile-container {
	width: 42px;
	height: 42px;
	border-radius: 20px;
	background-color: #d9d9d9;
}
/* .profile-container img{
		height: 100%;
		width: 100%;
	} */
.title {
	display: flex;
	align-items: center;
	padding-left: 16px;
}

.buttonConteiner {
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
}

.btnWrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(128, 128, 128, 0.582);
	border-radius: 12px;
	transition: 400ms;
	height: 48px;
}
.check {
	background-color: #363a45;
	border: 1px solid transparent;
}
.lang {
	border: 1px solid #9e9e9e;
	background-color: #0d111d;
	margin-right: 10px;
	margin-left: 10px;
}
.support {
	width: 48px;
	background-color: #171b26;
	margin-right: 16px;
}
.support img {
	height: 100%;
	width: 100%;
}
.btnWrapper:hover {
	background-color: #282d3b;
}
.btnWrapper button {
	height: 100%;
	width: 100%;
	padding: 10px;
	background: transparent;
	border: unset;
	display: flex;
	justify-content: center;
	align-items: center;
}
.headerItem p {
	font-size: 25px;
}
.active {
	border: 1px solid var(--accent-color);
	background-color: #6660ff40;
}
.help {
	padding-right: 12px;
}
@media screen and (max-height: 800px) {
	.title p {
		font-size: 20px;
	}
}
@media screen and (max-width: 800px) {
	.header {
		margin-bottom: 5vh;
	}
	.flexConteiner {
		display: flex;
		flex-direction: column;
		padding: 0;
	}
	.headerItem {
		background-color: transparent;
	}
	.buttonConteiner {
		display: none;
	}
	.headerActions {
		display: flex;
	}
	.title {
		padding-left: 0;
		width: 100%;
	}
	.title p {
		font-size: 36px;
	}
}
</style>
