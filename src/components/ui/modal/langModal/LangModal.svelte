<script>
import UserAprove from '../../button/userAprove/UserAprove.svelte';
import CancelButton from '../../button/userAprove/CancelButton.svelte';
import ModalTitle from '../ModalTitle.svelte';

const LeaveAprove = () => {
	console.log('hello world');
};
</script>

<div class="lang-container">
	<div class="lang-modal">
		<div class="lang-wrapper">
			<ModalTitle />
			<div class="button_wrapper">
				<CancelButton onUserText="other.cancel" />
				<UserAprove
					onUserText="{'Выйти из профиля'}"
					onUserAction="{LeaveAprove}" />
			</div>
		</div>
	</div>
</div>

<style>
.lang-container {
	display: flex;
	justify-content: right;
	height: 100vh;
	z-index: 9998;
}
.lang-modal {
	width: 22vw;
	height: 27vh;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	position: relative;
	top: 10vh;
	right: 2vh;
}
.lang-wrapper {
	width: 90%;
	height: 80%;
}
.button_wrapper {
	color: white;
	height: fit-content;
	display: flex;
}
</style>
