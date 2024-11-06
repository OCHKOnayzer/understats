<script>
import LandingInfo from '$src/components/ui/landingInfo/LandingInfo.svelte';
</script>

<div class="landing-content">
	<div class="landing_slider" />
	<div class="landing_info_content">
		<LandingInfo />
	</div>
	<span class="root">© 2024 stathub.bet, Inc.</span>
</div>

<style>
.landing-content {
	background-image: url('assets/landing/back.png');
	background-size: cover;
	background-position: center;
	background-color: #0d111d;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 100vw;
	box-sizing: border-box;
	height: 100%;
	padding: 1rem;
}

.landing_slider {
	height: fit-content;
	width: 100%;
	box-sizing: border-box;
}

.landing_info_content {
	height: fit-content;
	width: 100%;
	box-sizing: border-box;
}

.root {
	font-size: 10px;
	color: #718096;
	margin-top: auto;
	padding: 1rem;
}
</style>
