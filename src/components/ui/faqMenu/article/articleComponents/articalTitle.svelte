<script lang="ts">
import { t } from 'svelte-i18n';

type TitleProps = {
	title: string;
};

let { title } = $$props as TitleProps;
</script>

<p class="pb-2 pt-5">{$t(title)}</p>
