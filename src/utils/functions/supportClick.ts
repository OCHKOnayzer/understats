import toast from 'svelte-french-toast';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { goto } from '$app/navigation';

let browserName = '';
const userAgent = navigator.userAgent;

if (userAgent.includes('YaBrowser')) {
	browserName = 'DownloadYandex';
} else if (userAgent.includes('Firefox')) {
	browserName = 'DownloadFirefox';
} else if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
	browserName = 'DownloadOpera';
} else if (userAgent.includes('Chrome') && !userAgent.includes('OPR') && !userAgent.includes('YaBrowser')) {
	browserName = 'DownloadGoogle';
} else {
	browserName = 'unsupported';
}

function navigate() {
	goto(`/help?browser=${browserName}`);
}

export const supportClick = () => {
	if (browserName === 'unsupported') {
		toast.error(get(t)('error.ext'));
	} else {
		navigate();
	}
};
