<script lang="ts">
import { openModal, modalComponent } from '$src/stores/modalStore';
const LeaveModalOpen = () => {
	if ($modalComponent === null) {
		openModal('LeaveContainer');
	}
};
</script>

<div class="userContainer">
	<div class="user_flex">
		<div class="avatar">
			<img
				class="image"
				src="assets/avatar.jpg"
				alt="user avatar" />
		</div>
		<div class="user_info">
			<div class="user_wrapper">
				<div class="userName">hello world</div>
				<span>id </span> <span> 7990962</span>
			</div>
			<div class="quitBtn">
				<button
					on:click={LeaveModalOpen}
					class="quit_button">
					<img
						src={$modalComponent === 'LeaveContainer' ? 'assets/menu/activeLeave.png' : 'assets/menu/leave.png'}
						alt="" />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
.userContainer {
	height: fit-content;
	padding: 5px;
	width: 100%;
	margin: 0 auto;
	background-color: #0d111d;
	border-radius: 5px;
}
.user_flex {
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatar {
	border-radius: 50%;
	height: 30px;
	width: 30px;
	overflow: hidden;
}
.image {
	height: 100%;
	width: 100%;
}
.user_info {
	width: 80%;
	margin-left: 10px;
	display: flex;
	justify-content: space-between;
}
.userName {
	font-size: 15px;
}
.user_info span {
	color: rgba(128, 128, 128, 0.383);
}
.quitBtn {
	display: flex;
	justify-content: center;
	align-items: center;
}
.quit_button {
	height: 15px;
	width: 15px;
}
.quit_button img {
	height: 100%;
	width: 100%;
	user-select: none;
}
</style>
