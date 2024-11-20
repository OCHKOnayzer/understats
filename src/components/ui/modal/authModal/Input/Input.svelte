<script lang="ts">
export let input_type: string;
export let value = '';
</script>

<input
	type="{input_type}"
	bind:value="{value}" />

<style>
input {
	background-color: #20242f;
	border-radius: 5px;
	color: white;
	border: unset;
	transition: border-color 0.3s ease;
	box-sizing: border-box;
	padding-left: 10px;
	height: 6vh;
	width: 100%;
}
input:focus {
	outline: none;
}
</style>
