<script lang="ts">
interface BetsNoTableDataProps {
	title: string;
	sum: string;
}

let { title, sum }: BetsNoTableDataProps = $props();
</script>

<div class="item">
	<h2 class="title">{title}</h2>
	<h3 class="sum">{sum}</h3>
</div>

<style>
.item {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	background-color: #171b26;
	border-radius: 16px;

	@media (max-width: 1100px) {
		padding: 14px;
	}

	@media (max-width: 950px) {
		padding: 10px;
	}
}

.title {
	font-family: Manrope;
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 4px;
	color: white;

	@media (max-width: 1100px) {
		font-size: 14px;
	}

	@media (max-width: 950px) {
		font-size: 12px;
	}
}

.sum {
	font-family: Manrope;
	font-size: 14px;
	font-weight: 400;
	color: #9d9d9d;

	@media (min-width: 1100px) {
		font-size: 12px;
	}

	@media (max-width: 950px) {
		font-size: 10px;
	}
}
</style>
