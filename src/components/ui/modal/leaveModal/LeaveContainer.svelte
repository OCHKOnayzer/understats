<script>
import UserAprove from '../../button/userAprove/UserAprove.svelte';
import CancelButton from '../../button/userAprove/CancelButton.svelte';

import LeaveModalTitle from './title/LeaveModalTitle.svelte';
import LeaveModalContent from './leaveContent/LeaveModalContent.svelte';

const LeaveAprove = () => {
	console.log('hello world');
};
</script>

<div class="leave_modal">
	<div class="leave_wrapper">
		<LeaveModalTitle />
		<LeaveModalContent />
		<div class="button_wrapper">
			<CancelButton onUserText="other.cancel" />
			<UserAprove
				onUserText={'Выйти из профиля'}
				onUserAction={LeaveAprove} />
		</div>
	</div>
</div>

<style>
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
</style>
