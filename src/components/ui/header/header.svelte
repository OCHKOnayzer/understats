<script lang="ts">
import { t } from 'svelte-i18n';

import { headerTitle, langImage } from '$src/stores/HeaderStores';
import { openModal, modalComponent, closeModal } from '$src/stores/modalStore';

type ModalType = 'AuthModal' | 'LeaveContainer' | 'FailedModal' | 'SuccessfulModal' | 'SorryModal' | 'LangModal' | 'SupportModal';

const openLangModal = (modal: ModalType) => {
	if ($modalComponent !== null && $modalComponent !== modal) {
		return;
	}
	if ($modalComponent === modal) {
		closeModal();
	} else {
		openModal(modal);
	}
};
</script>

<header class="header">
	<div class="headerItem">
		<div class="flexConteiner">
			<div class="title">
				<p>{$t($headerTitle)}</p>
			</div>
			<div class="buttonConteiner">
				<div class="btnWrapper {$modalComponent === 'LangModal' ? 'active' : ''}">
					<button on:click="{() => openLangModal('LangModal')}">
						{$t(`lang.${$langImage}`)}
						<img
							class="lang-image"
							src="{`assets/langs/${$langImage}.svg`}"
							alt="" />
					</button>
				</div>
				<div class="btnWrapper">
					<button>
						<img
							src="assets/header/bell.png"
							alt="" />
					</button>
				</div>
				<div class="btnWrapper {$modalComponent === 'SupportModal' ? 'active' : ''}">
					<button on:click="{() => openLangModal('SupportModal')}">
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
	position: relative;
	z-index: 9998;
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
.lang-image {
	height: 100%;
	width: 100%;
	margin-left: 10px;
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
</style>
