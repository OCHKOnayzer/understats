<script lang="ts">
export let input_type = '';
</script>

<input
	type={input_type}
	name=""
	id="" />

<style>
input {
	background-color: #20242f;
	border-radius: 5px;
	color: white;
	border: unset;
	transition: border-color 0.3s ease;
	box-sizing: border-box;
	padding-left: 10px;
	height: 5vh;
	width: 100%;
}

input:focus {
	outline: none;
}
</style>
