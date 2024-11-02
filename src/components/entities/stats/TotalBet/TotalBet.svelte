<script lang="ts">
export let title = 'Bets Summary';
export let sum = 'Total Bets: 100';
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
}

.title {
	font-family: Manrope;
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 4px;
	color: white;
}

.sum {
	font-family: Manrope;
	font-size: 14px;
	font-weight: 400;
	color: #9d9d9d;
}
</style>
