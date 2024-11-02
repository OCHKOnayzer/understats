<script lang="ts">
import ImageCurrent from './modaCurrent/ImageCurrent.svelte';
import ModalCurrent from './modaCurrent/ModalCurrent.svelte';
export let closeModal: () => void;

let current_modal = 'reg';

const switchLogin = () => {
	current_modal = 'login';
};
const switchReg = () => {
	current_modal = 'reg';
};
const switchRecover = () => {
	current_modal = 'recover';
};
const switchReFinish = () => {
	current_modal = 'ReFinish';
};
</script>

<div class="modal_window_wrapper">
	<div class="modal_window">
		<!-- <div class="open_wrapper"></div> -->
		<div class="image_wrapper">
			<ImageCurrent {current_modal} />
		</div>
		<div class="login_wrapper">
			<ModalCurrent
				{switchLogin}
				{switchReg}
				{switchRecover}
				{switchReFinish}
				{current_modal}
				{closeModal} />
		</div>
	</div>
</div>

<style>
.modal_window_wrapper {
	height: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal_window {
	position: relative;
	min-height: 65%;
	height: fit-content;
	display: flex;
}
.image_wrapper {
	width: 20vw;
	background-color: #252935;
	display: flex;
	align-items: center;
	justify-content: center;
}
.login_wrapper {
	width: 20vw;
	background-color: #0d111d;
	border-radius: 0px 5px 5px 0px;
}

/* .open_wrapper{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #0d111d;
    border-radius: 0px 20px 20px 0px;
    transition: 400ms;
    animation: swipe 1s forwards;
}
@keyframes swipe {
    0% {
        width: 100%;
    }
    100% {
        width: 0%;
        display: none;
    }
} */
</style>
