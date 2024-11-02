<script lang="ts">
export let modalActie: string;
import { t } from 'svelte-i18n';
</script>

<div class="form_title">{$t(modalActie)}</div>

<style>
.form_title {
	font-size: 30px;
	line-height: 32px;
	font-weight: 600;
}
</style>
