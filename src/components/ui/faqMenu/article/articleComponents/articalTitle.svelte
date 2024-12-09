<script lang="ts">
import { t } from 'svelte-i18n';

interface Ititle {
	title: string;
}

let { title = '' } = $$props as Ititle;
</script>

<p class="pb-2 pt-5">{$t(title)}</p>
