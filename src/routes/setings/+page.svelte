<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { selectHeaderTitle } from '$src/stores/HeaderStores';
import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import { currentUser } from '$src/stores/modalStore';
import Lang from '$src/components/ui/settingsSections/lang.svelte';

// import UserAvatar from '../../components/ui/editUser/userAvatar.svelte';
import Info from '../../components/ui/editUser/info.svelte';
import EditPass from '../../components/ui/editUser/editPass.svelte';
// import Setings from '../../components/ui/editUser/setings.svelte';
let isMobile = false;

function checkScreenWidth() {
	isMobile = window.innerWidth <= 768;
}

onMount(() => {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
	return () => window.removeEventListener('resize', checkScreenWidth);
});
selectHeaderTitle('settings.settings');
</script>

<svelte:head>
	<title>{$t('settings.settings')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		{#if !$currentUser}
			<DemoButtons />
		{/if}
		{#if isMobile}
			<Lang />
		{/if}
		<div class="progressWrapper">
			<!-- <Setings /> -->
		</div>
		<!-- <UserAvatar /> -->
		<Info />
		<EditPass />
	</div>
</div>

<style>
.progressWrapper {
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
}
</style>
