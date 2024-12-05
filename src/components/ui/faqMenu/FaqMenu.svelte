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
	background-color: #171b26;
	display: flex;
	justify-content: center;
	align-items: center;
}
@media (max-width: 678px) {
	.faqMenu {
		width: 100%;
	}
}
</style>
