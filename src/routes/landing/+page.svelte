<script>
import LandingInfo from '$src/components/ui/landingInfo/LandingInfo.svelte';
import LandingSlider from '$src/components/widgets/landingSlider/LandingSlider.svelte';
</script>

<div class="landing-content">
	<div class="eclipse-wrapper">
		<img
			src="assets/landing/image.png"
			alt="" />
	</div>
	<LandingSlider />
	<div class="landing_info_content">
		<LandingInfo />
	</div>
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
	box-sizing: border-box;
	height: 100%;
	padding: 1rem;
	justify-content: space-around;
	position: relative;
}
.eclipse-wrapper {
	position: absolute;
	z-index: 2;
	top: -6vh;
}
.eclipse-wrapper img {
	height: 75vh;
	width: 100vw;
}
.landing_info_content {
	height: fit-content;
	width: 100%;
	box-sizing: border-box;
	z-index: 3;
}
</style>
