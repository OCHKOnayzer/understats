<script lang="ts">
export let error: string | null = '';
</script>

<div class="error_wrapper">
	<img
		src="assets/modal/error/error.png"
		alt="" />
	<span>{error}</span>
</div>

<style>
.error_wrapper {
	color: #fd1a1a;
	height: 2vh;
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 8px;
}
.error_wrapper img {
	height: 70%;
}
</style>
