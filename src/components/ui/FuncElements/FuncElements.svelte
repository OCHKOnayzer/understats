<script lang="ts">
import { t } from 'svelte-i18n';

import { Elements } from './FuncArray';
</script>

{#each Elements as item}
	<div class="funcSection_element">
		<div class="funcSection_element_title">
			<div class="element_logo">
				<img
					src={item.image}
					alt="" />
			</div>
			<div class="element_content">
				{$t(item.title)}
			</div>
		</div>
		<div class="funcSection_element_body">
			<span>{$t(item.text)}</span>
		</div>
	</div>
{/each}

<style>
.funcSection_element {
	margin: 2%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
	height: 100%;
	width: 80%;
}

.funcSection_element_title {
	display: flex;
	flex-direction: row;
	color: white;
	align-items: center;
	margin-bottom: 3%;
}

.element_logo {
	height: 24px;
	width: 24px;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.element_logo img {
	height: 100%;
	width: 100%;
}

.element_content {
	font-size: 24px;
}

.funcSection_element_body {
	color: #718096;
	font-size: 14px;
	line-height: 20px;
	flex-grow: 1;
}
</style>
