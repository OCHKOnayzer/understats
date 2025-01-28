<script lang="ts">
type ArticalSectionProps = {
	text: string;
};
import { t } from 'svelte-i18n';
let { text } = $$props as ArticalSectionProps;
</script>

<div class="article_container">
	{$t(text)}
</div>

<style>
.article_container {
	color: #f3bf55;
	font-size: 15px;
	margin-bottom: 10px;
}
</style>
