<script>
import { t } from 'svelte-i18n';
</script>

<div class="flex h-[calc(100vh-280px)] flex-col items-center justify-center p-4 text-white">
	<span class="loading-spinner mb-3"></span>
	<h2>{$t('stats.loading_data')}</h2>
</div>
