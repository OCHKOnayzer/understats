<script lang="ts">
import { MONTHS } from '$src/utils/constants/constants';
import Icon from '@iconify/svelte';
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
		on:click="{onPrevMonth}"><Icon icon="oui:arrow-left" /></button>
	<div class="months-container">
		<div class="month-wrapper right">
			<span class="month">{MONTHS[currentDate.getMonth()]}, {currentDate.getFullYear()}</span>
		</div>
		<div class="month-wrapper left">
			<span class="month">{MONTHS[nextMonthDate.getMonth()]}, {nextMonthDate.getFullYear()}</span>
		</div>
	</div>
	<button
		class="nav-button"
		on:click="{onNextMonth}"><Icon icon="oui:arrow-right" /></button>
</div>

<style>
.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
}

.months-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px;
	flex: 1;
	padding: 0 16px;
}

.month-wrapper {
	display: flex;
}

.month-wrapper.left {
	justify-content: flex-start;
	padding-left: 15px;
}

.month-wrapper.right {
	justify-content: flex-end;
	padding-right: 15px;
}

.month {
	font-weight: 500;
	color: #fff;
}

.nav-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 4px;
	color: #fff;
	transition: background-color 0.2s;
}

.nav-button:hover {
	background-color: rgba(255, 255, 255, 0.1);
}
</style>
