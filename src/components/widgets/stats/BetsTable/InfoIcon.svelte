<script lang="ts">
export let formattedValue: string;
export let fullValue: string;
export let align: 'left' | 'right' | 'center' = 'left';

let tooltipVisible = false;
let tooltipElement: HTMLSpanElement;
let wrapperElement: HTMLDivElement;

function showTooltip() {
	tooltipVisible = true;
	if (tooltipElement && wrapperElement) {
		const tooltipRect = tooltipElement.getBoundingClientRect();
		const wrapperRect = wrapperElement.getBoundingClientRect();
		const viewportWidth = window.innerWidth;

		tooltipElement.style.left = '';
		tooltipElement.style.right = '';

		if (wrapperRect.right + tooltipRect.width > viewportWidth) {
			tooltipElement.style.right = '0';
			tooltipElement.style.left = 'auto';
		} else {
			tooltipElement.style.left = '0';
			tooltipElement.style.right = 'auto';
		}
	}
}
</script>

<div
	class="wrapper"
	style="text-align: {align}"
	bind:this="{wrapperElement}">
	<span class="value">{formattedValue}</span>
	<span
		class="icon"
		on:mouseenter="{showTooltip}"
		on:mouseleave="{() => (tooltipVisible = false)}">
		ⓘ
		{#if tooltipVisible}
			<span
				class="tooltip"
				bind:this="{tooltipElement}">
				{fullValue}
			</span>
		{/if}
	</span>
</div>

<style>
.wrapper {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	position: relative;
}

.value {
	line-height: 1;
}

.icon {
	cursor: help;
	color: #718096;
	font-size: 12px;
	opacity: 0.7;
	position: relative;
	display: inline-flex;
	align-items: center;
	line-height: 1;
}

.icon:hover {
	opacity: 1;
}

.tooltip {
	position: absolute;
	top: -30px;
	background: #2d3748;
	color: white;
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 12px;
	white-space: nowrap;
	z-index: 1000;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Добавляем стрелочку */
.tooltip::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 50%;
	transform: translateX(-50%);
	border-width: 4px;
	border-style: solid;
	border-color: #2d3748 transparent transparent transparent;
}
</style>
