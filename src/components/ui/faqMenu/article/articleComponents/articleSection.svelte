<script lang="ts">
type ArticalSectionProps = {
	text: string;
	mark: boolean;
};
import { t } from 'svelte-i18n';
let { text, mark } = $$props as ArticalSectionProps;
</script>

<div class="article_container">
	{#if mark}
		<div class="marked-text">
			<span class="bullet">•</span>
			{$t(text)}
		</div>
	{:else}
		{$t(text)}
	{/if}
</div>

<style>
.article_container {
	color: #a3a4ab;
	font-size: 15px;
	margin-bottom: 10px;
}

.marked-text {
	display: flex;
	align-items: center;
}

.bullet {
	margin-right: 0.5rem;
	font-weight: bold;
	color: inherit;
}
</style>
