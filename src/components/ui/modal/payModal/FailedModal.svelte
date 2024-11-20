<script>
import UserAprove from '../../button/userAprove/UserAprove.svelte';
import CancelButton from '../../button/userAprove/CancelButton.svelte';
import ModalTitle from '../ModalTitle.svelte';

import PayTitle from './payTitle/PayTitle.svelte';
const RetryPay = () => {
	console.log('retry');
};
</script>

<div class="leave_container">
	<div class="leave_modal">
		<div class="leave_wrapper">
			<ModalTitle />
			<div class="pay_status">
				<img
					src="assets/pay/Fail.svg"
					alt="" />
				<PayTitle PayText="{'other.payFail'}" />
			</div>
			<div class="button_wrapper">
				<CancelButton onUserText="other.cancel" />
				<UserAprove
					onUserText="other.retry"
					onUserAction="{RetryPay}" />
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
.leave_modal {
	width: 22vw;
	height: 27vh;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
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
.pay_status {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 15px;
}
</style>
