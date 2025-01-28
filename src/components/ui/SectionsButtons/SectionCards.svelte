<script lang="ts">
import { t } from 'svelte-i18n';

import { SectionElemnts } from './section';
let activeIndex = 0;
const setActiveIndex = (index: number) => {
	activeIndex = index;
};
</script>

<div class="elemnts_wrapper">
	{#each SectionElemnts as item, index}
		<button
			class="element {activeIndex === index ? 'active' : ''}"
			on:click="{() => setActiveIndex(index)}">
			<span> {$t(item.name)}</span>
		</button>
	{/each}
</div>

<style>
.elemnts_wrapper {
	display: flex;
	height: 100%;
	width: 100%;
}
.element {
	cursor: pointer;
	transition: 400ms;
	border: unset;
	background-color: #363a45;
	min-width: 5vw;
	width: fit-content;
	border-radius: 100px;
	height: 3vh;
	margin-left: 10px;
	color: #718096;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
}
.element:hover {
	background-color: #6560ff7e;
}
.element:nth-child(1) {
	margin-left: 0px;
}
.active {
	background-color: #6660ff;
	color: white;
}
</style>
