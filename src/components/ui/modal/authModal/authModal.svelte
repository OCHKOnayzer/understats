<script lang="ts">
import ImageCurrent from './modalCurrent/ImageCurrent.svelte';
import ModalCurrent from './modalCurrent/ModalCurrent.svelte';
</script>

<div class="modal_window_wrapper">
	<div class="modal_window">
		<div class="image_wrapper">
			<ImageCurrent />
		</div>
		<div class="login_wrapper">
			<svelte:component this="{ModalCurrent}" />
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

@media screen and (max-width: 800px) {
	.modal_window_wrapper {
		justify-content: center;
	}

	.modal_window {
		flex-direction: column;
		width: 90%;
		height: fit-content;
	}
	.login_wrapper {
		width: 100%;
		border-radius: 5px;
		height: 90vh;
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

@media screen and (max-height: 600px) {
	.image_wrapper {
		display: none;
	}
}
</style>
