<script lang="ts">
import { MONTHS } from '$src/utils/constants/constants';
interface Props {
	currentDate: Date;
	nextMonthDate: Date;
	onPrevMonth: () => void;
	onNextMonth: () => void;
}

let { currentDate, nextMonthDate, onPrevMonth, onNextMonth }: Props = $props();
</script>

<div class="calendar-header">
	<button
		class="nav-button"
		on:click="{onPrevMonth}">←</button>
	<div class="months-container">
		<span class="month">{MONTHS[currentDate.getMonth()]}, {currentDate.getFullYear()}</span>
		<span class="month">{MONTHS[nextMonthDate.getMonth()]}, {nextMonthDate.getFullYear()}</span>
	</div>
	<button
		class="nav-button"
		on:click="{onNextMonth}">→</button>
</div>

<style>
.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
}

.months-container {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex: 1;
	margin: 0 16px;
}

.month {
	font-size: 16px;
	font-weight: 500;
	color: white;
	min-width: 140px;
	text-align: center;
}

.nav-button {
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	padding: 8px;
	font-size: 20px;
	transition: opacity 0.2s;
}

.nav-button:hover {
	opacity: 0.8;
}
</style>
