<script lang="ts">
interface PayInterface {
	PayText: string;
}
import { t } from 'svelte-i18n';
let { PayText } = $$props as PayInterface;
</script>

<div class="payTitle">
	{$t(PayText)}
</div>

<style>
.payTitle {
	color: white;
}
</style>
