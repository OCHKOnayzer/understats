<script>
import UserAprove from '../../button/userAprove/UserAprove.svelte';
import CancelButton from '../../button/userAprove/CancelButton.svelte';
import ModalTitle from '../ModalTitle.svelte';

import LeaveModalContent from './leaveContent/LeaveModalContent.svelte';

const LeaveAprove = () => {
	console.log('hello world');
};
</script>

<div class="leave_container">
	<div class="leave_modal">
		<div class="leave_wrapper">
			<ModalTitle />
			<LeaveModalContent />
			<div class="button_wrapper">
				<CancelButton onUserText="other.cancel" />
				<UserAprove
					onUserText={'Выйти из профиля'}
					onUserAction={LeaveAprove} />
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
