<script lang="ts">
import { isMobile,initializeScreenWidthListener } from '$src/stores/isMobile';
import { onDestroy,onMount } from 'svelte';

import { expressBetLegs } from '$src/stores/expressBetStore';
import { isModalOpen, modalComponent } from '$src/stores/modalStore';

import ExpressBetModal from '../../widgets/stats/ExpressBetModal.svelte';

import authModal from './authModal/authModal.svelte';
import ChatModal from './chatModal/ChatModal.svelte';
import DemoModal from './demoModal/DemoModal.svelte';
import LangModal from './langModal/LangModal.svelte';
import LeaveContainer from './leaveModal/LeaveContainer.svelte';
import FailedModal from './payModal/FailedModal.svelte';
import PaySupport from './payModal/PaySupport.svelte';
import PayTariffs from './payModal/PayTariffs.svelte';
import PlanExpiredModal from './payModal/PlanExpiredModal.svelte';
import SuccessfulModal from './payModal/SuccessfulModal.svelte';
import SorryModal from './sorryModal/SorryModal.svelte';
import SocialModal from './supportModal/SocialModal.svelte';
import SupportModal from './supportModal/SupportModal.svelte';
import { CloseBack } from '$src/utils/functions/modalMobileClose';

window.onpopstate = function(event: any) {
    console.log('onpopstate triggered:', event.state);
    if (event.state && event.state.modalOpen) {
        console.log('Закрываем модалку через CloseBack');
        CloseBack();
    }
};

onMount(()=>{ 
	initializeScreenWidthListener()
})

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
	DemoModal,
	ExpressBetModal
};
</script>

{#if $isModalOpen}
	<div class="modal_window {$modalComponent === 'authModal' ? 'auth-modal' : ''}">
		{#if $modalComponent === 'ExpressBetModal'}
			<ExpressBetModal legs="{$expressBetLegs}" />
		{:else}
			<svelte:component this="{components[$modalComponent]}" />
		{/if}
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
