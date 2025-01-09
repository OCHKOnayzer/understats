<div class="loader-container">
	<div class="loader">
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
</div>

<style>
.loader-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: transparent;
	width: 100vw;
}

.loader {
	position: relative;
	width: 80px;
	height: 80px;
}

.circle {
	width: 20px;
	height: 20px;
	background: white;
	border-radius: 50%;
	position: absolute;
	animation: bounce 1.5s infinite ease-in-out;
}

.circle:nth-child(1) {
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	animation-delay: -0.3s;
}

.circle:nth-child(2) {
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	animation-delay: -0.15s;
}

.circle:nth-child(3) {
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}

.circle:nth-child(4) {
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	animation-delay: -0.45s;
}

@keyframes bounce {
	0%,
	100% {
		transform: scale(1);
		opacity: 0.6;
	}
	50% {
		transform: scale(1.5);
		opacity: 1;
	}
}
</style>
