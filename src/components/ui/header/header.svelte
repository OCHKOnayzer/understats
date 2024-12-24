<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { headerTitle } from '$src/stores/HeaderStores';
import { openMenu } from '$src/stores/menu';
import { closeModal, currentUser, modalComponent, openModal } from '$src/stores/modalStore';

import Button from '../button/button.svelte';
import LangButton from '../button/langButton/LangButton.svelte';
import MobileFilterButton from '$src/components/features/stats/FilterMobile/MobileFilterButton.svelte';

type ModalType = 'authModal' | 'LeaveContainer' | 'FailedModal' | 'SuccessfulModal' | 'SorryModal' | 'LangModal' | 'SupportModal';

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

let isHelpPage = false;

function checkHelpPage() {
	isHelpPage = window.location.pathname.includes('/help');
}

onMount(() => {
	checkHelpPage();
	window.addEventListener('popstate', checkHelpPage);
	return () => window.removeEventListener('popstate', checkHelpPage);
});
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
					<a
						class="profile-container"
						href="/setings">
						<!-- <img src="" alt=""> -->
					</a>
				{:else}
					<button
						aria-label="auth"
						class="profile-container"
						on:click="{() => openCurrentModal('authModal')}"></button>
				{/if}
			</div>
			<div class="flex items-center">
				<div class="title">
					<p>{$t($headerTitle)}</p>
				</div>
				{#if $headerTitle == 'menu.Stats'}
					<MobileFilterButton />
				{/if}
			</div>

			<div class="buttonConteiner">
				<div class="btnWrapper {$modalComponent === 'LangModal' ? 'active' : ''}">
					<LangButton openCurrentModal="{openCurrentModal}" />
				</div>
				<div class="btnWrapper {$modalComponent === 'SupportModal' ? 'active' : ''}">
					<button on:click="{() => openCurrentModal('SupportModal')}">
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
	padding-top: 10px;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 50px;
	position: relative;
	z-index: 1;
}

.headerItem {
	height: 8vh;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: white;
	background: #171b26;
	border-radius: 8px;
}

.flexConteiner {
	display: flex;
	height: 100%;
	width: 100%;
	padding: 0 0.05% 0 1%;
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
	padding-left: 10px;
}

.buttonConteiner {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1%;
	width: fit-content;
}
.btnWrapper {
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(128, 128, 128, 0.582);
	border-radius: 4px;
	transition: 400ms;
	height: 40px;
}
.btnWrapper:nth-child(1) {
	width: fit-content;
}

.btnWrapper:nth-child(2) {
	margin-right: 10px;
	margin-left: 10px;
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
	border: 1px solid #6660ff;
	background-color: #6660ff40;
}
@media screen and (max-height: 800px) {
	.title p {
		font-size: 20px;
	}
}
@media screen and (max-width: 768px) {
	.header {
		padding-bottom: 30px;
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
