<script>
import { t } from 'svelte-i18n';

import { openModal, modalComponent } from '$src/stores/modalStore';

import { page } from '$app/stores';
import { goto } from '$app/navigation';

let browserName = '';
const userAgent = navigator.userAgent;

if (userAgent.includes('YaBrowser')) {
	browserName = 'DownloadYandex';
} else if (userAgent.includes('Firefox')) {
	browserName = 'DownloadFirefox';
} else if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
	browserName = 'DownloadOpera';
} else {
	browserName = 'unsupported';
}

function navigate() {
	goto(`/help?browser=${browserName}`);
}
const sorryOpen = () => {
	if ($modalComponent === null) {
		openModal('SorryModal');
	}
};
</script>

<button
	class="info_buttons"
	on:click="{browserName === 'unsupported' ? sorryOpen : navigate}">
	{$t('extensions.manual')}
</button>

<style>
.info_buttons {
	border: 1px solid #ececed;
	min-width: 30%;
	width: fit-content;
	height: 40px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
