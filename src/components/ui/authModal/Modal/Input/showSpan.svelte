<script lang="ts">
interface SpanProps {
	show_text: string;
}
import { t } from 'svelte-i18n';
let { show_text = '' } = $$props as SpanProps;
console.log(show_text, 'text input');
</script>

<span>
	{$t(show_text)}
</span>

<style>
/* Ваши стили */
</style>
