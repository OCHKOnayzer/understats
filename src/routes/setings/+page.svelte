<script>
	import { t } from 'svelte-i18n';
	import Header from '../../components/ui/header/header.svelte';
	import UserAvatar from '../../components/ui/editUser/userAvatar.svelte';
	import Info from '../../components/ui/editUser/info.svelte';
	import EditPass from '../../components/ui/editUser/editPass.svelte';
	import Setings from '../../components/ui/editUser/setings.svelte';
	const headerProps = $t('settings.settings');
</script>

<svelte:head>
	<title>{headerProps}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="mainContent">
		<Header Widget={Setings} {headerProps} />
		<UserAvatar />
		<Info />
		<EditPass />
	</div>	
</div>

<style>
</style>
