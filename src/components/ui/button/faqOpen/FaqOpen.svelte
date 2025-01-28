<script>
import { t } from 'svelte-i18n';
import toast from 'svelte-french-toast';
import { get } from 'svelte/store';

import { openModal, modalComponent } from '$src/stores/modalStore';
import { supportClick } from '$src/utils/functions/supportClick';

import { page } from '$app/stores';
import { goto } from '$app/navigation';


// const hello = toast.error('hello world');


// const sorryOpen = () => {
// 	if ($modalComponent === null) {
// 		openModal('SorryModal');
// 	}
// };

</script>

<button
	class="info_buttons"
	on:click="{supportClick}">
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
	font-size: 15px;
}
@media (max-height: 770px) {
	.info_buttons {
		height: 35px;
	}
}
@media screen and (max-width: 1200px){
	.info_buttons {
		min-width: 50%;
		width: fit-content;
	}
}
@media screen and (max-width: 800px) {
	.info_buttons {
		margin-top: 20px;
		margin-bottom: 40px;
		width: 100%;
		border-radius: 16px;
		height: 56px;
	}
}
</style>
