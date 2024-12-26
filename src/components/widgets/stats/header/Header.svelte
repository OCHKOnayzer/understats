<script lang="ts">
import { cn } from '$src/utils/utils';

import CheckBox from '../../demo/checkBox/CheckBox.svelte';
</script>

<header class="header">
	<h2 class="{`${cn('header-title')}`}">Статистика</h2>
	<CheckBox />
</header>

<style>
.header {
	margin: 36px 0;
	display: flex;
	justify-content: space-between;
}

.header-title {
	font-size: 36px;
	font-weight: 700;
	color: white;
	font-family: Manrope;
}
</style>
