<script lang="ts">
import { t } from 'svelte-i18n';

import { isChangeTypeText } from '$src/stores/modalStore';

let visText = $isChangeTypeText ? 'social.hide_passw' : 'social.show_pass';
</script>

<span>
	{$t(visText)}
</span>

<style>
</style>
