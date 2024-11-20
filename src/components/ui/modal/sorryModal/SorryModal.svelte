<script>
import { t } from 'svelte-i18n';

import CancelButton from '../../button/userAprove/CancelButton.svelte';
import ModalTitle from '../ModalTitle.svelte';
</script>

<div class="leave_container">
	<div class="leave_modal">
		<div class="leave_wrapper">
			<ModalTitle />
			<div class="info_wrapper">
				<div>{$t('sorry_modal.info')}</div>
				<div>{$t('sorry_modal.tnx')}</div>
			</div>
			<div class="button_wrapper">
				<CancelButton onUserText="other.okay" />
			</div>
		</div>
	</div>
</div>

<style>
.leave_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.info_wrapper {
	margin-top: 10px;
	color: #718096;
	font-size: 16px;
}
.leave_modal {
	width: 22vw;
	height: 27vh;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
}
.leave_wrapper {
	width: 90%;
	height: 80%;
}
.button_wrapper {
	color: white;
	height: fit-content;
	display: flex;
}
</style>
