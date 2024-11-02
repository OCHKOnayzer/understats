<script lang="ts">
import { t } from 'svelte-i18n';

import { ExpElemnt } from './ExpArray';
</script>

<div class="expSection_element_wrapper">
	{#each ExpElemnt as item}
		<div class="expSection_element">
			<span class="Installations_element">{item.count}</span>
			<span>{$t(item.name)}</span>
		</div>
	{/each}
</div>

<style>
.expSection_element_wrapper {
	margin: 4%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
	height: 100%;
}
.expSection_element {
	display: flex;
	flex-direction: column;
	color: white;
	margin-bottom: 10%;
}
.Installations_element {
	font-size: 56px;
	font-weight: 600;
	flex-grow: 1;
}
</style>
