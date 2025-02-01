<script lang="ts">
import { onDestroy } from 'svelte';

import { isModalOpen, modalComponent } from '$src/stores/modalStore';

import authModal from './authModal/authModal.svelte';
import LeaveContainer from './leaveModal/LeaveContainer.svelte';
import FailedModal from './payModal/FailedModal.svelte';
import SuccessfulModal from './payModal/SuccessfulModal.svelte';
import SorryModal from './sorryModal/SorryModal.svelte';
import LangModal from './langModal/LangModal.svelte';
import SupportModal from './supportModal/SupportModal.svelte';
import ChatModal from './chatModal/ChatModal.svelte';
import PayTariffs from './payModal/PayTariffs.svelte';
import SocialModal from './supportModal/SocialModal.svelte';
import PaySupport from './payModal/PaySupport.svelte';
import PlanExpiredModal from './payModal/PlanExpiredModal.svelte';
import DemoModal from './demoModal/DemoModal.svelte';

onDestroy(() => {
	document.body.style.overflow = '';
});

const components = {
	authModal,
	LeaveContainer,
	FailedModal,
	SuccessfulModal,
	SorryModal,
	LangModal,
	SupportModal,
	ChatModal,
	PayTariffs,
	SocialModal,
	PaySupport,
	PlanExpiredModal,
	DemoModal
};
</script>

{#if $isModalOpen}
	<div class="modal_window {$modalComponent === 'authModal' ? 'auth-modal' : ''}">
		<svelte:component this="{components[$modalComponent]}" />
	</div>
{/if}

<style>
.modal_window {
	position: fixed;
	/* увеличен z-index чтобы модалка всегда была поверх других элементов */
	z-index: 20000;
	width: 100%;
	height: 100vh;
	background-color: var(--modal-background);
	overflow-y: unset;
	overflow-x: hidden;
	backdrop-filter: blur(3px);
}
.auth-modal {
	/* можно увеличить, если потребуется дополнительная глубина */
	z-index: 21000;
}
</style>
