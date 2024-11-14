<script lang="ts">
interface InputInterface {
	input_type: string;
}
export let input_type: string;
</script>

<input type={input_type} />
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
