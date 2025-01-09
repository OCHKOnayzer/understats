<script lang="ts">
interface ErrorInteface {
	error: string | null;
}
let { error } = $$props as ErrorInteface;
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
