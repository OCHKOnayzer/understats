<script lang="ts">
import ImageCurrent from './modaCurrent/ImageCurrent.svelte';
import ModalCurrent from './modaCurrent/ModalCurrent.svelte';
</script>

<div class="modal_window_wrapper">
	<div class="modal_window">
		<div class="image_wrapper">
			<ImageCurrent />
		</div>
		<div class="login_wrapper">
			<svelte:component this={ModalCurrent} />
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
@media screen and (max-width: 1650px) {
	.login_wrapper {
		width: 25vw;
	}
	.image_wrapper {
		width: 25vw;
	}
	.modal_window {
		height: 70%;
	}
}
@media screen and (max-width: 1350px) {
	.login_wrapper {
		width: 35vw;
	}
	.image_wrapper {
		width: 35vw;
	}
	.modal_window {
		height: 80%;
	}
}
@media screen and (max-width: 1100px) {
	.login_wrapper {
		width: 40vw;
	}
	.image_wrapper {
		width: 40vw;
	}
}
@media screen and (max-width: 1050px) {
	.login_wrapper {
		width: 50vw;
	}
	.image_wrapper {
		display: none;
	}
}
@media screen and (max-height: 750px) {
	.modal_window {
		height: 90%;
	}
}
@media screen and (max-height: 700px) {
	.image_wrapper {
		display: none;
	}
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
