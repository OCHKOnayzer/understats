<script lang="ts">
import { t } from 'svelte-i18n';

interface ITitle {
	title: string;
}

let { title = '' } = $$props as ITitle;
</script>

<p class="pb-2 pt-5">{$t(title)}</p>
