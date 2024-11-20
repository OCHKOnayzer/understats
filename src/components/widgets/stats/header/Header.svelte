<script lang="ts">
import * as m from '$m';
import { cn } from '$src/utils/utils';
</script>

<header class="header">
	<h2 class="{`${cn('header-title')}`}">{m.stats()}</h2>
</header>

<style>
.header {
	margin: 36px 0;
}

.header-title {
	font-size: 36px;
	font-weight: 700;
	color: white;
	font-family: Manrope;
}
</style>
