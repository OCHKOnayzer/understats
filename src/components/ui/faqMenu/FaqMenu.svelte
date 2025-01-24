<script lang="ts">
import { createEventDispatcher } from 'svelte';

import FaqMenuElements from './faqMenuElements.svelte';

const dispatch = createEventDispatcher();

const handleSelectItemFromMenu = (event: any) => {
	dispatch('selectItemFromFaqMenu', { name: event.detail.name, articleId: event.detail.articleId });
};
</script>

<div class="faqMenu">
	<FaqMenuElements on:selectItemFromMenu="{handleSelectItemFromMenu}" />
</div>

<style>
.faqMenu {
	width: 25%;
	border-radius: 5px;
	margin-right: var(--elements-padding);
	background-color: #171b26;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
@media screen and (max-width: 1100px) {
	.faqMenu {
		width: 40%;
	}
}
@media (max-width: 800px) {
	.faqMenu {
		width: 100%;
		margin-right: 0px;
	}
}
</style>
