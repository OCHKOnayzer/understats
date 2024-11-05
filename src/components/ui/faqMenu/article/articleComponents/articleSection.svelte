<script lang="ts">
interface ArticalSectionInterface {
	text: string;
}
import { t } from 'svelte-i18n';
let { text = '' } = $$props as ArticalSectionInterface;
</script>

<div class="article_container">
	{$t(text)}
</div>

<style>
.article_container {
	color: #718096;
	font-size: 14px;
	margin-bottom: 3%;
}
</style>
