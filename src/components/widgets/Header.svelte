<!-- <script lang="ts">
import Icon from '@iconify/svelte';
import { t } from 'svelte-i18n';

import BackgroundContainer from '$components/providers/backgroundContainer/BackgroundContainer.svelte';
import Button from '$components/ui/button/button.svelte';
import { headerTitle } from '$src/stores/HeaderStores';
// import * as m from '$m';
</script>

<header class="header">
	<BackgroundContainer>
		<div class="logo flex gap-5">
			<a href="/">{$t($headerTitle)}</a>
		</div>

		<div class="nav">
			<Button variant="outline">{m.report()}</Button>
			<Button
				variant="outlineGray"
				class="message">
				<Icon
					icon="mdi:message-arrow-right-outline"
					font-size="30"
					color="gray" />
			</Button>
		</div>
	</BackgroundContainer>
</header>

<style>
.header {
	font-family: Roboto;
}

.logo {
	font-size: 24px;

	a {
		text-decoration: none;
		color: #fff;
	}
}

.nav {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style> -->
