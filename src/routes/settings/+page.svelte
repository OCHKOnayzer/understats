<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import UserActivity from '$src/components/ui/settingsSections/UserActivity.svelte';
import { selectHeaderTitle } from '$src/stores/HeaderStores';
import DemoButtons from '$src/components/widgets/demo/demoButtons/DemoButtons.svelte';
import { currentUser } from '$src/stores/modalStore';
import Lang from '$src/components/ui/settingsSections/lang.svelte';
import CheckBox from '$src/components/widgets/demo/checkBox/CheckBox.svelte';
import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';

// import UserAvatar from '../../components/ui/editUser/userAvatar.svelte';
import Info from '../../components/ui/editUser/info.svelte';
import EditPass from '../../components/ui/editUser/editPass.svelte';
// import Settings from '../../components/ui/editUser/settings.svelte';

onMount(() => {
	initializeScreenWidthListener();
});
selectHeaderTitle('settings.settings');
</script>

<svelte:head>
	<title>{$t('settings.settings')}</title>
	<meta
		name="description"
		content="About this app" />
</svelte:head>

<div class="pageContent">
	<!-- <UserActivity/> -->
	{#if !$currentUser}
		<DemoButtons />
	{/if}
	{#if $isMobile}
		<CheckBox />
		<Lang />
	{/if}
	<div class="progressWrapper">
		<!-- <Settings /> -->
	</div>
	<!-- <UserAvatar /> -->
	{#if !$isMobile || ($isMobile && $currentUser)}
		<Info />
	{/if}
	{#if $currentUser}
		<EditPass />
	{/if}
</div>

<style>
.pageContent {
	width: 100%;
}
.progressWrapper {
	width: 100%;
	margin: 0 auto;
	padding: 0 2rem;
	box-sizing: border-box;
}
</style>
