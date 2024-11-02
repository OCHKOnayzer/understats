<script lang="ts">
export let Title: string;
</script>

<button class="install_wrapper">
	<span>{Title}</span>
</button>

<style>
.install_wrapper {
	cursor: pointer;
	background-color: transparent;
	position: relative;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding-left: 10px;
	width: 86%;
	border: 1px solid green;
	height: 4vh;
	border-radius: 100px;
	margin-top: 8px;
	margin-bottom: 8px;
	transition: 400ms;
}
.install_wrapper:hover {
	background-color: rgba(240, 248, 255, 0.249);
}
</style>
